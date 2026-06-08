import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Eye, Info } from 'lucide-react';

interface AudioAmbientProps {
  lang: 'ko' | 'en';
}

export default function AudioAmbient({ lang }: AudioAmbientProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const [ambientType, setAmbientType] = useState<'rain' | 'mystery' | 'clock'>('mystery');
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscsRef = useRef<{ osc: OscillatorNode; gain: GainNode }[]>([]);
  const intervalRef = useRef<number | null>(null);
  const tickOscRef = useRef<OscillatorNode | null>(null);

  // Initialize Web Audio API elements
  const startSynth = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const mainGain = ctx.createGain();
      mainGain.gain.setValueAtTime(volume * 0.15, ctx.currentTime); // keep elegant and soft, low volume
      mainGain.connect(ctx.destination);
      gainNodeRef.current = mainGain;

      oscsRef.current = [];

      if (ambientType === 'mystery') {
        // Create an atmospheric minor pad
        const baseFreqs = [110, 165, 220, 261.63, 329.63]; // A minor chord (A2, E3, A3, C4, E4)
        baseFreqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();

          osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          
          oscGain.gain.setValueAtTime(0.02, ctx.currentTime);
          
          // Connect
          osc.connect(oscGain);
          oscGain.connect(mainGain);
          
          osc.start();
          oscsRef.current.push({ osc, gain: oscGain });

          // LFO modulation to simulate swell
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.1 + idx * 0.04, ctx.currentTime);
          lfoGain.gain.setValueAtTime(0.015, ctx.currentTime);
          
          lfo.connect(lfoGain);
          lfoGain.connect(oscGain.gain);
          lfo.start();
        });
      } else if (ambientType === 'rain') {
        // Build white-noise rain simulator
        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Filter the noise to sound like heavy rain hitting cold glass panes
        const biquadFilter = ctx.createBiquadFilter();
        biquadFilter.type = 'lowpass';
        biquadFilter.frequency.setValueAtTime(450, ctx.currentTime);

        whiteNoise.connect(biquadFilter);
        biquadFilter.connect(mainGain);
        whiteNoise.start();

        // Save reference as oscillator node to kill it easily later
        oscsRef.current.push({ osc: whiteNoise as any, gain: mainGain });
      } else if (ambientType === 'clock') {
        // Generate a subtle ticking sound (80 bpm) simulating the East End Ashby Flat clock
        let isTick = true;
        
        const playTick = () => {
          if (!audioContextRef.current || audioContextRef.current.state === 'closed') return;
          const osc = audioContextRef.current.createOscillator();
          const tickGain = audioContextRef.current.createGain();
          
          osc.type = 'sine';
          // alternate frequencies to make mechanical high/low lock ticks
          osc.frequency.setValueAtTime(isTick ? 880 : 700, audioContextRef.current.currentTime);
          isTick = !isTick;

          tickGain.connect(mainGain);
          osc.connect(tickGain);

          tickGain.gain.setValueAtTime(0.3, audioContextRef.current.currentTime);
          tickGain.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.03);

          osc.start();
          osc.stop(audioContextRef.current.currentTime + 0.04);
        };

        playTick();
        const intervalId = window.setInterval(playTick, 750);
        intervalRef.current = intervalId;
      }
    } catch (e) {
      console.warn("Web Audio API blocked or unsupported:", e);
    }
  };

  const stopSynth = () => {
    // Clear any timers
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Stop all oscillators
    oscsRef.current.forEach(({ osc }) => {
      try {
        osc.stop();
      } catch (e) {}
    });
    oscsRef.current = [];

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      stopSynth();
      startSynth();
    } else {
      stopSynth();
    }
    return () => {
      stopSynth();
    };
  }, [isPlaying, ambientType]);

  useEffect(() => {
    if (gainNodeRef.current && audioContextRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume * 0.15, audioContextRef.current.currentTime);
    }
  }, [volume]);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-brand-s1 border border-brand-border rounded p-4 shadow-xl flex items-center justify-between gap-4 flex-wrap">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSound}
          className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
            isPlaying 
              ? 'bg-brand-gold/20 border-brand-gold text-brand-gold-lt animate-pulse' 
              : 'border-brand-muted2 text-brand-muted hover:border-brand-gold/50 hover:text-brand-cream'
          }`}
          title={lang === 'ko' ? '사운드 켜기/끄기' : 'Toggle atmospheric soundtrack'}
        >
          {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>

        <div className="flex flex-col">
          <span className="text-[11px] font-mono tracking-widest text-brand-gold uppercase">
            {lang === 'ko' ? '사운드 테라피' : 'ATMOSPHERIC AUDIO'}
          </span>
          <span className="text-xs text-brand-muted italic font-serif">
            {isPlaying 
              ? (lang === 'ko' ? '공명 중...' : 'Resonating...') 
              : (lang === 'ko' ? '사운드 오프' : 'Muted')}
          </span>
        </div>
      </div>

      {/* Preset selection */}
      <div className="flex gap-2 bg-brand-bg/60 border border-brand-border/60 p-1.5 rounded">
        <button
          onClick={() => setAmbientType('mystery')}
          className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${
            ambientType === 'mystery' 
              ? 'bg-brand-gold-dk/30 text-brand-gold-lt border-b border-brand-gold' 
              : 'text-brand-muted hover:text-brand-cream'
          }`}
        >
          {lang === 'ko' ? '침묵의 서재' : 'Mansion'}
        </button>
        <button
          onClick={() => setAmbientType('rain')}
          className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${
            ambientType === 'rain' 
              ? 'bg-brand-gold-dk/30 text-brand-gold-lt border-b border-brand-gold' 
              : 'text-brand-muted hover:text-brand-cream'
          }`}
        >
          {lang === 'ko' ? '세븐오크스 비' : 'Rain'}
        </button>
        <button
          onClick={() => setAmbientType('clock')}
          className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase transition-all duration-300 ${
            ambientType === 'clock' 
              ? 'bg-brand-gold-dk/30 text-brand-gold-lt border-b border-brand-gold' 
              : 'text-brand-muted hover:text-brand-cream'
          }`}
        >
          {lang === 'ko' ? '삐거덕 시계' : 'Clock'}
        </button>
      </div>

      {/* Volume slider */}
      <div className="flex items-center gap-2 max-w-[120px] w-full">
        <span className="text-[8px] font-mono text-brand-muted">VOL</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full h-1 bg-brand-border rounded-lg appearance-none cursor-pointer accent-brand-gold-lt"
        />
      </div>
    </div>
  );
}
