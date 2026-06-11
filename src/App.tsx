import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  MapPin, 
  Clock, 
  Search, 
  BookOpen, 
  Globe, 
  HelpCircle, 
  TrendingUp, 
  Sparkles, 
  ChevronRight, 
  FileText, 
  ShieldAlert, 
  CheckCircle,
  Award,
  BookMarked,
  Link2
} from 'lucide-react';
import { CHARACTERS, LOCATIONS, TIMELINE, NPCS } from './data';
import { Character, LocationInfo, TimelineEvent, Npc } from './types';
import RelationshipMatrix from './components/RelationshipMatrix';
import AudioAmbient from './components/AudioAmbient';

export default function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [selectedChar, setSelectedChar] = useState<Character>(CHARACTERS[0]);
  
  // Timeline interaction state
  const [timelineFilter, setTimelineFilter] = useState<'All' | 'Heron' | 'Langley' | 'Both'>('All');
  
  const [customTicker, setCustomTicker] = useState('00:00:00');

  // Live ticking clock for premium feel
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { timeZone: 'Europe/London', hour12: false } as const;
      const londonTime = now.toLocaleTimeString('en-GB', {
        ...options,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCustomTicker(londonTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="min-h-screen bg-brand-bg text-brand-cream selection:bg-brand-gold-dk selection:text-brand-cream/90 font-body relative overflow-hidden pb-16">
      
      {/* Background Decorative Grid matching standard user-attached aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(184,150,62,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(184,150,62,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse,rgba(184,150,62,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* HEADER / NAVIGATION BAR */}
      <nav id="navbar" className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold tracking-[0.2em] font-serif uppercase text-brand-cream">
            The Perfect <em className="text-brand-gold not-italic font-medium">Strang</em>×<span className="font-semibold tracking-[0.05em] text-brand-gold-lt">Heron</span>
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          {/* Active Ticking London Clock */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-[9px] tracking-widest text-brand-muted uppercase">
            <Clock size={11} className="text-brand-gold" />
            <span>London</span>
            <span className="text-brand-gold-lt">{customTicker}</span>
          </div>

          {/* Language Toggle Button */}
          <button 
            onClick={() => setLang(l => l === 'ko' ? 'en' : 'ko')}
            className="flex items-center gap-1.5 px-3 py-1 bg-brand-s1 border border-brand-border hover:border-brand-gold/60 rounded text-[10px] font-mono tracking-widest uppercase transition-colors duration-200"
          >
            <Globe size={11} className="text-brand-gold-lt" />
            <span>{lang === 'ko' ? 'EN' : 'KO'}</span>
          </button>
        </div>
      </nav>

      {/* HERO COVER HEADER */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8 text-center relative z-10">
        <p className="font-mono text-[9px] tracking-[0.55em] text-brand-gold uppercase mb-5">
          London · 2007 – 2026 · Interactive Reference Bible
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-none mb-6">
          The Perfect <br className="sm:hidden" />
          <span className="italic text-brand-gold-lt">Strang</span>
          <span className="text-brand-gold mx-2">×</span>
          <span className="font-semibold tracking-wider">Heron</span>
        </h1>
        
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="w-[80px] h-[1px] bg-gradient-to-r from-transparent to-brand-gold-dk" />
          <span className="font-serif text-brand-gold text-xs">× / ×</span>
          <div className="w-[80px] h-[1px] bg-gradient-to-l from-transparent to-brand-gold-dk" />
        </div>

        <p className="font-serif text-[17px] md:text-[20px] italic text-brand-muted max-w-xl mx-auto leading-relaxed">
          {lang === 'ko' 
            ? '“침묵이 가장 오래 남는다. 그리고 가장 오래 남는 것이 가장 위험하다.”' 
            : '"Silence is what lingers longest. And what lingers longest is easily the most lethal."'}
        </p>
      </header>

      {/* AUDIO AMBIENT MODULE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 relative z-10">
        <AudioAmbient lang={lang} />
      </div>

      {/* DETAILED WORLD GUIDE SECTION (COLLAPSIBLE / EXPLAINABLE) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">{lang === 'ko' ? 'WORLD' : 'THE UNIVERSE'}</span>
          <div className="flex-1 h-[1px] bg-brand-border" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light mb-8">
          {lang === 'ko' ? '세계관' : 'The Cold Laws of Sevenoaks & Mayfair'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-brand-s1 border border-brand-border p-6 rounded hover:border-brand-gold/30 transition-all duration-300">
            <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase mb-3 block">01 / POWER</span>
            <h3 className="font-serif text-lg text-brand-cream mb-2">
              {lang === 'ko' ? '자본이 권력이다' : 'Capital is Imperial'}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed font-serif italic">
              {lang === 'ko' 
                ? '구 귀족의 상속 칭호는 아직 존재하나, 돈이 뒷받침되지 않으면 사교계에선 유령 취급을 받습니다. 사설 은행 자본만이 신흥 보좌의 기준이 됩니다.'
                : 'Old aristocratic titles are mere paper masks. Without solid liquid equity, they are treated like phantoms in Kent.'}
            </p>
          </div>

          <div className="bg-brand-s1 border border-brand-border p-6 rounded hover:border-brand-gold/30 transition-all duration-300">
            <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase mb-3 block">02 / THREAT</span>
            <h3 className="font-serif text-lg text-brand-cream mb-2">
              {lang === 'ko' ? '정중함 속의 협박' : 'Symphonies of Polite Warnings'}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed font-serif italic">
              {lang === 'ko' 
                ? '목소리를 직접 높이는 사람은 경감의 전리품에 불과합니다. 가장 강한 위협은 은쟁반 위의 은빛 주전자에서 우려낸 홍차 너머로, 조용히 전달됩니다.'
                : 'No one screams in validation. The most violent threats are packaged in passive ironies over bone china teacups.'}
            </p>
          </div>

          <div className="bg-brand-s1 border border-brand-border p-6 rounded hover:border-brand-gold/30 transition-all duration-300">
            <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase mb-3 block">03 / WEAPON</span>
            <h3 className="font-serif text-lg text-brand-cream mb-2">
              {lang === 'ko' ? '배제와 접근의 격차' : 'Exclusion and Boundaries'}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed font-serif italic">
              {lang === 'ko' 
                ? '초대받지 못한 장소에서 사적인 만남은 일어나지 않습니다. 상류 대리석 빌라의 출입권만이 곧 그들의 명재적 보호막이자 생존의 증서입니다.'
                : 'A meeting does not happen without invitation control. Access to the luxury boardrooms is the only armor that defends a name.'}
            </p>
          </div>

          <div className="bg-brand-s1 border border-brand-border p-6 rounded hover:border-brand-gold/30 transition-all duration-300">
            <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase mb-3 block">04 / HISTORY</span>
            <h3 className="font-serif text-lg text-brand-cream mb-2">
              {lang === 'ko' ? '봉인된 과거의 영혼' : 'The Encrypted Archive'}
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed font-serif italic">
              {lang === 'ko' 
                ? '두 가문 사이에 일어난 2014년의 사태 and 2016년의 폭삭 무너진 파산. 9년간 아무도 입에 물리려 하지 않았던 비밀들이 검은 물처럼 수면 아래 흘러갑니다.'
                : 'The tragedies of 2014 and the systematic foreclosure of 2016. Behind the silent walls, memories run deep and heavy like black river water.'}
            </p>
          </div>
        </div>
      </section>

      {/* GEOGRAPHY & LOCATIONS DIRECTORY */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">
            {lang === 'ko' ? 'MAJOR SANCTUARIES' : 'ESTATE GEOGRAPHY'}
          </span>
          <div className="flex-1 h-[1px] bg-brand-border" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light mb-8">
          {lang === 'ko' ? '주요 공간' : 'The Estates & Geographic Anchors'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LOCATIONS.map(loc => {
            return (
              <div 
                key={loc.id}
                id={`loc-card-${loc.id}`}
                className="bg-brand-s1 border border-brand-border p-5 rounded flex flex-col justify-between transition-all duration-300 relative overflow-hidden hover:border-brand-gold/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{loc.icon}</span>
                    <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase bg-brand-bg px-2 py-0.5 border border-brand-border">
                      {lang === 'ko' ? loc.addrKr : loc.addrEn}
                    </span>
                  </div>
                  
                  <h4 className="font-serif text-lg text-brand-cream mb-1">
                    {lang === 'ko' ? loc.nameKr : loc.nameEn}
                  </h4>
                  
                  <p className="text-xs text-brand-muted font-serif italic leading-relaxed mb-4">
                    {lang === 'ko' ? loc.descKr : loc.descEn}
                  </p>
                </div>

                <div className="border-t border-brand-border/40 pt-3 flex items-center justify-between text-[10px] font-mono tracking-wider">
                  <span className="text-brand-gold-lt">{lang === 'ko' ? '주요 방문자' : 'KEY VISITORS'}</span>
                  <span className="text-brand-cream/70">
                    {loc.visitors.map(v => {
                      const char = CHARACTERS.find(c => c.id === v);
                      if (char) return char.name.split(' ')[0];
                      const npc = NPCS.find(n => n.id === v);
                      if (npc) return npc.name.split(' ')[0];
                      return v;
                    }).join(', ')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENIO CELL: SOCIAL STRUCTURE & INTERACTIVE RELATION MATRIX / CHARACTER DOSSIER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">{lang === 'ko' ? 'CHARACTERS & DIALOGUE' : 'SOCIAL DYNAMICS'}</span>
          <div className="flex-1 h-[1px] bg-brand-border" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light mb-8">
          {lang === 'ko' ? '메인 캐릭터' : 'Tensions and Dynastic Dossiers'}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT AREA: SOCIAL STRUCTURING & RELATIONSHIP WEB */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* SVG Visual Relation Network */}
            <RelationshipMatrix
              selectedChar={selectedChar}
              onSelectChar={(char) => setSelectedChar(char)}
              lang={lang}
            />

            {/* Social Tier List from HTML */}
            <div className="bg-brand-s1 border border-brand-border rounded overflow-hidden">
              <div className="px-5 py-3 border-b border-brand-border bg-brand-s1/60">
                <span className="text-[9px] font-mono text-brand-gold tracking-widest uppercase">
                  {lang === 'ko' ? '사회적 수직계 계급 테이블' : 'THE SOCIAL GRADIENT INDEX'}
                </span>
              </div>
              
              <div className="divide-y divide-brand-border">
                <div className="grid grid-cols-12 p-3.5 hover:bg-brand-s2/30 transition-colors">
                  <div className="col-span-2 font-serif text-xl italic text-brand-muted">I</div>
                  <div className="col-span-4 font-serif text-sm text-brand-cream font-medium">
                    {lang === 'ko' ? '구 귀족 (Old Nobility)' : 'Old Nobility'}
                  </div>
                  <div className="col-span-6 font-serif text-xs text-brand-muted italic">
                    {lang === 'ko' ? '칭호와 에스테이트 소유. 초대를 설계하고 가르는 자들.' : 'Estate owners of Kent. They control salon access and gate hospitality.'}
                  </div>
                </div>

                <div className="grid grid-cols-12 p-3.5 bg-brand-gold-dk/10 hover:bg-brand-s2/30 transition-colors">
                  <div className="col-span-2 font-serif text-xl italic text-brand-gold">II</div>
                  <div className="col-span-4 font-serif text-sm text-brand-gold-lt font-medium flex items-center gap-1">
                    {lang === 'ko' ? 'Heron 가문' : 'House Heron'}
                    <span className="text-[7px] font-mono tracking-widest bg-brand-gold text-brand-bg px-1 uppercase py-0.5 font-bold scale-90">TOP</span>
                  </div>
                  <div className="col-span-6 font-serif text-xs text-brand-muted italic">
                    {lang === 'ko' ? '금융 권력의 심장부. 가장 침묵하는 자가 최강자다.' : 'Sovereign private banking. The quietest office in Heron Tower has absolute reign.'}
                  </div>
                </div>

                <div className="grid grid-cols-12 p-3.5 hover:bg-brand-s2/30 transition-colors opacity-75">
                  <div className="col-span-2 font-serif text-xl italic text-brand-red">III</div>
                  <div className="col-span-4 font-serif text-sm text-red-300 font-medium line-through">
                    {lang === 'ko' ? 'Langley 가문 (몰락)' : 'House Langley'}
                  </div>
                  <div className="col-span-6 font-serif text-xs text-brand-muted italic">
                    {lang === 'ko' ? '구 귀족. 2016년 파산 법제 조치 이후 몰락.' : 'Old aristocratic lineage. Systematically ruined after the 2016 legal foreclosure.'}
                  </div>
                </div>

                <div className="grid grid-cols-12 p-3.5 hover:bg-brand-s2/30 transition-colors">
                  <div className="col-span-2 font-serif text-xl italic text-brand-muted2">V</div>
                  <div className="col-span-4 font-serif text-sm text-brand-cream/70">
                    {lang === 'ko' ? '현재 (유저)' : 'Present (User / You)'}
                  </div>
                  <div className="col-span-6 font-serif text-xs text-brand-muted italic">
                    {lang === 'ko' ? '자력 생존 노동 계층. 그러나 서류함 속 Langley라는 이름은 여전함.' : 'Laboring in the East End flats. Survival by cold grit; yet the registry holds your title.'}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT AREA: DETAILED DYNAMIC CHARACTER DOSSIER */}
          <div className="lg:col-span-5">
            <div className="bg-brand-s1 border border-brand-border rounded p-6 shadow-2xl relative min-h-[580px] flex flex-col justify-between">
              
              <div>
                {/* Character Header Selector */}
                <div className="flex gap-1.5 flex-wrap border-b border-brand-border pb-4 mb-4">
                  {CHARACTERS.map(char => {
                    const isSelected = selectedChar.id === char.id;
                    return (
                      <button
                        key={char.id}
                        onClick={() => setSelectedChar(char)}
                        className={`px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase rounded transition-all duration-300 ${
                          isSelected 
                            ? 'bg-brand-gold-dk/30 text-brand-gold-lt border-b-2 border-brand-gold' 
                            : 'text-brand-muted hover:text-brand-cream'
                        }`}
                      >
                        {char.symbol} {char.name.split(' ')[0]}
                      </button>
                    );
                  })}
                </div>

                {/* Main Dossier Content */}
                <div className="animate-fadeIn">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-serif text-3xl font-light text-brand-cream">
                        {selectedChar.name}
                      </h3>
                      <p className="font-mono text-xs text-brand-gold tracking-widest uppercase mt-1">
                        {lang === 'ko' ? selectedChar.roleKr : selectedChar.roleEn}
                      </p>
                    </div>
                    <span 
                      className="text-4xl p-2.5 rounded-full bg-brand-bg border border-brand-border"
                      style={{ textShadow: '0 0 10px rgba(184,150,62,0.4)' }}
                    >
                      {selectedChar.symbol}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedChar.appearance.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-[9px] font-mono tracking-wider px-2 py-0.5 bg-brand-bg rounded border border-brand-border/60 text-brand-cream/80"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 bg-brand-gold-dk/20 text-brand-gold-lt border border-brand-gold-dk/40 uppercase">
                      Age: {selectedChar.age}
                    </span>
                  </div>

                  {/* Character Portrait Asset */}
                  {selectedChar.image ? (
                    <div className="my-5 overflow-hidden rounded border border-brand-border bg-brand-bg/80 relative group h-72 shadow-inner">
                      <img 
                        src={selectedChar.image} 
                        alt={selectedChar.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-90 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-s1 to-transparent opacity-80" />
                    </div>
                  ) : (
                    <div className="my-5 rounded border border-dashed border-brand-border/80 bg-brand-bg/40 h-44 flex flex-col items-center justify-center relative overflow-hidden group select-none animate-fadeIn">
                      <div 
                        className="absolute w-32 h-32 rounded-full blur-3xl opacity-20 transition-all duration-500 group-hover:scale-110"
                        style={{ backgroundColor: selectedChar.accentColor || '#b8963e' }}
                      />
                      <span className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 relative z-10 filter drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                        {selectedChar.symbol}
                      </span>
                      <span className="text-[9px] font-mono tracking-[0.25em] text-brand-gold-lt uppercase relative z-10">
                        {lang === 'ko' ? '대외비 이미지 조각 대기 중' : 'MEMOIR PROFILE COMPONENT'}
                      </span>
                      <span className="text-[8px] font-mono tracking-widest text-brand-muted uppercase mt-1 relative z-10">
                        SYSTEM SECURE LINK / TIER {selectedChar.tier.split(' ')[0]}
                      </span>
                    </div>
                  )}

                  <div className="border-t border-b border-brand-border/60 py-4 mb-5">
                    <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase block mb-1">
                      {lang === 'ko' ? '인물 요약 배후지' : 'CHRONICLE DOSSIER'}
                    </span>
                    <p className="text-sm text-brand-cream/90 font-serif italic leading-relaxed">
                      "{lang === 'ko' ? selectedChar.descKr : selectedChar.descEn}"
                    </p>
                  </div>

                  {/* Character Custom Dialogue Quote */}
                  <div className="p-4 bg-brand-bg/60 border-l border-brand-gold rounded font-serif text-sm italic text-brand-gold-lt leading-relaxed mb-5">
                    {lang === 'ko' ? selectedChar.quoteKr : selectedChar.quoteEn}
                  </div>

                  {/* Detailed Bio (Frequent Locations, Personality, Speech Pattern) */}
                  <div className="grid grid-cols-1 gap-4 mb-5 border-t border-b border-brand-border/40 py-4 text-xs font-serif leading-relaxed">
                    <div>
                      <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase block mb-1">
                        {lang === 'ko' ? '자주 가는 장소' : 'FREQUENTED SANCTUARIES'}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {(lang === 'ko' ? selectedChar.frequentLocationsKr : selectedChar.frequentLocationsEn).map((loc, idx) => (
                          <span key={idx} className="bg-brand-bg/40 px-2 py-0.5 rounded border border-brand-border/40 text-[10px] text-brand-cream/80 flex items-center gap-1">
                            <span className="text-brand-gold">·</span> {loc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase block mb-1">
                        {lang === 'ko' ? '인물 성격' : 'PERSONALITY'}
                      </span>
                      <p className="text-brand-cream/85 italic">
                        {lang === 'ko' ? selectedChar.personalityKr : selectedChar.personalityEn}
                      </p>
                    </div>

                    <div>
                      <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase block mb-1">
                        {lang === 'ko' ? '고유 말투 (IDIOLECT)' : 'SPEECH SPECTRUM'}
                      </span>
                      <p className="text-brand-cream/85 italic">
                        {lang === 'ko' ? selectedChar.speechToneKr : selectedChar.speechToneEn}
                      </p>
                    </div>
                  </div>


                </div>
              </div>

              {/* Backing relation notes context to show how this selected user feels about others */}
              <div className="mt-6 pt-4 border-t border-brand-border/60">
                <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase block mb-2">
                  {lang === 'ko' ? '● 당신과의 직접적 긴장 관계' : '● HOSTILITY METRIC TO YOU'}
                </span>
                <p className="text-xs font-serif text-brand-muted italic leading-relaxed">
                  {lang === 'ko' ? selectedChar.relationNotes.user : selectedChar.relationNotesEn.user}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PERIPHERAL DOSSIERS (NPC) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10" id="npcs-sec">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">
            {lang === 'ko' ? '주변 인물 기록' : 'PERIPHERAL DOSSIERS (NPC)'}
          </span>
          <div className="flex-1 h-[1px] bg-brand-border" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light mb-8">
          {lang === 'ko' ? '주변 인물 NPC' : 'The Bystanders & Sacrifices of Sevenoaks'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {NPCS.map(npc => (
            <div 
              key={npc.id}
              className="bg-brand-s1/60 border border-brand-border/60 p-5 rounded flex flex-col justify-between hover:border-brand-gold/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl p-2 bg-brand-bg border border-brand-border/40 rounded-full select-none">
                  {npc.symbol}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-base text-brand-cream font-medium">
                    {npc.name}
                  </h3>
                  <span className="text-[9px] font-mono tracking-widest text-brand-gold uppercase block mt-1 mb-2 bg-brand-gold-dk/10 border border-brand-gold-dk/20 px-1.5 py-0.5 rounded w-max">
                    {lang === 'ko' ? npc.statusKr : npc.statusEn}
                  </span>
                  <p className="text-xs text-brand-muted font-serif italic leading-relaxed">
                    {lang === 'ko' ? npc.descKr : npc.descEn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAILED CHRONOLOGY & INTERACTIVE TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10" id="timeline-sec">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">{lang === 'ko' ? 'TIMELINE' : 'CHRONOLOGY'}</span>
          <div className="flex-1 h-[1px] bg-brand-border" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light">
            {lang === 'ko' ? '히스토리 (2008 – 2026)' : 'The Chronicle of Sealed Vows'}
          </h2>

          {/* Timeline Category Filters */}
          <div className="flex gap-1.5 self-start bg-brand-s1 border border-brand-border p-1 rounded">
            {(['All', 'Heron', 'Langley', 'Both'] as const).map(f => (
              <button
                key={f}
                onClick={() => setTimelineFilter(f)}
                className={`px-3 py-1 text-[9px] font-mono tracking-widest uppercase rounded transition-all duration-300 ${
                  timelineFilter === f 
                    ? 'bg-brand-gold text-brand-bg font-semibold' 
                    : 'text-brand-muted hover:text-brand-cream'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Timeline */}
        <div className="relative pl-6 md:pl-12 border-l border-brand-border space-y-10">
          {TIMELINE.filter(ev => {
            if (timelineFilter === 'All') return true;
            return ev.family === timelineFilter;
          }).map(ev => {
            const isLoss = ev.type === 'loss';
            const isKey = ev.type === 'key';
            
            return (
              <div 
                key={ev.id}
                className="relative group transition-all duration-300 hover:translate-x-1"
              >
                {/* Visual Line Bullet Point Indicator */}
                <span className={`absolute -left-[31px] md:-left-[55px] top-1.5 w-2 h-2 rounded-full border transform rotate-45 transition-colors duration-300 ${
                  isLoss 
                    ? 'bg-brand-red border-red-500' 
                    : isKey 
                    ? 'bg-brand-gold border-brand-gold-lt' 
                    : 'bg-brand-bg border-brand-border'
                }`} />

                <div className="max-w-4xl">
                  {/* Event Marker Date info */}
                  <span className={`font-mono text-[9px] tracking-widest uppercase ${
                    isLoss ? 'text-red-400' : isKey ? 'text-brand-gold' : 'text-brand-muted'
                  }`}>
                    {ev.date}
                  </span>

                  {/* Core Event Title info */}
                  <h4 className="font-serif text-xl font-light text-brand-cream mt-1 mb-2">
                    {lang === 'ko' ? ev.titleKr : ev.titleEn}
                  </h4>

                  {/* Concise summary */}
                  <p className="text-sm text-brand-muted font-serif italic leading-relaxed mb-3">
                    {lang === 'ko' ? ev.descKr : ev.descEn}
                  </p>

                </div>
              </div>
            );
          })}
        </div>
      </section>


      {/* FOOTER */}
      <footer className="mt-20 border-t border-brand-border text-center pt-8">
        <p className="font-mono text-[9px] tracking-widest text-brand-muted uppercase">
          The Perfect Strang×Heron · London · 2007 – 2026
        </p>
        <p className="font-mono text-[8px] tracking-wider text-brand-muted/40 mt-2">
          {lang === 'ko' 
            ? '모든 지적 자산과 침묵의 권리는 랭글리와 헤론 그룹에 한정되어 있습니다.' 
            : 'All intellectual registries are bound to House Langley and Heron Bank.'}
        </p>
      </footer>

    </div>
  );
}
