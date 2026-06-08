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
import { CHARACTERS, LOCATIONS, CLUES, NARRATIVE_AXES, TIMELINE } from './data';
import { Character, LocationInfo, TimelineEvent, Clue, NarrativeAxis } from './types';
import RelationshipMatrix from './components/RelationshipMatrix';
import AudioAmbient from './components/AudioAmbient';

export default function App() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const [selectedChar, setSelectedChar] = useState<Character>(CHARACTERS[0]);
  const [clues, setClues] = useState<Clue[]>(CLUES);
  const [axes, setAxes] = useState<NarrativeAxis[]>(NARRATIVE_AXES);
  
  // Investigation status state
  const [locationScanning, setLocationScanning] = useState<{ [id: string]: boolean }>({});
  const [searchedLocations, setSearchedLocations] = useState<string[]>([]);
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null);
  
  // Timeline interaction state
  const [expandedEvents, setExpandedEvents] = useState<string[]>([]);
  const [timelineFilter, setTimelineFilter] = useState<'All' | 'Heron' | 'Langley' | 'Both'>('All');
  
  // Secret codes/Epilogue state
  const [showCodex, setShowCodex] = useState(false);
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

  // Trigger search location animation and reveal clue
  const handleSearchLocation = (loc: LocationInfo) => {
    if (searchedLocations.includes(loc.id)) return;
    
    // Simulate high-security scanning
    setLocationScanning(prev => ({ ...prev, [loc.id]: true }));
    
    setTimeout(() => {
      setLocationScanning(prev => ({ ...prev, [loc.id]: false }));
      setSearchedLocations(prev => [...prev, loc.id]);
      
      // Discover corresponding clue
      if (loc.clueId) {
        setClues(prevClues => 
          prevClues.map(c => c.id === loc.clueId ? { ...c, discovered: true } : c)
        );
        // Automatically select the discovered clue
        setSelectedClueId(loc.clueId);
      }
    }, 1800);
  };

  // Assign a found clue to its native axis, raising narrative progress
  const handleAssignClue = (clueId: string, axisId: string) => {
    // Boost strength of targeted narrative axis
    setAxes(prevAxes => 
      prevAxes.map(axis => {
        if (axis.id === axisId) {
          // Increase progress by 25% (up to 100)
          const current = axis.currentStrength;
          return { ...axis, currentStrength: Math.min(100, current + 25) };
        }
        return axis;
      })
    );
    
    // Smooth removal of this clue from selection state or marking completed
    setSelectedClueId(null);
  };

  // Compute stats dynamically
  const discoveredCount = clues.filter(c => c.discovered).length;
  const isFinalCodexUnlocked = discoveredCount === clues.length;
  
  // Dynamic system tension level from the sum of axis values and clues
  const totalTension = Math.min(
    100,
    Math.round((axes.reduce((sum, axis) => sum + axis.currentStrength, 0) / 4) + (discoveredCount * 6))
  );

  const toggleEventDetail = (id: string) => {
    setExpandedEvents(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const activeClue = clues.find(c => c.id === selectedClueId);

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

        <p className="font-serif text-[17px] md:text-[20px] italic text-brand-muted max-w-xl mx-auto leading-relaxed mb-10">
          {lang === 'ko' 
            ? '“침묵이 가장 오래 남는다. 그리고 가장 오래 남는 것이 가장 위험하다.”' 
            : '"Silence is what lingers longest. And what lingers longest is easily the most lethal."'}
        </p>

        {/* METRICS & STATUS PANEL */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 px-1 bg-brand-border border border-brand-border rounded max-w-4xl mx-auto shadow-2xl relative">
          <div className="bg-brand-s1 p-4 flex flex-col items-center justify-center">
            <span className="text-[9px] font-mono tracking-widest text-brand-muted uppercase mb-1">
              {lang === 'ko' ? '사교 집단 계급' : 'SOCIAL STABILITY'}
            </span>
            <span className="font-serif text-lg text-brand-gold">
              {lang === 'ko' ? '경직돈 구조 (II)' : 'Tier II Oligarchy'}
            </span>
          </div>

          <div className="bg-brand-s1 p-4 flex flex-col items-center justify-center">
            <span className="text-[9px] font-mono tracking-widest text-brand-muted uppercase mb-1">
              {lang === 'ko' ? '체계 긴장 지수' : 'PSYCHOLOGICAL TENSION'}
            </span>
            <div className="flex items-center gap-2">
              <span className={`font-mono text-xl font-medium ${totalTension > 60 ? 'text-brand-red' : 'text-brand-gold-lt'}`}>
                {totalTension}%
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            </div>
          </div>

          <div className="bg-brand-s1 p-4 flex flex-col items-center justify-center">
            <span className="text-[9px] font-mono tracking-widest text-brand-muted uppercase mb-1">
              {lang === 'ko' ? '획득 대외비 단서' : 'EVIDENCE SECURED'}
            </span>
            <span className="font-mono text-xl text-brand-cream">
              {discoveredCount} / {clues.length}
            </span>
          </div>

          <div className="bg-brand-s1 p-4 flex flex-col items-center justify-center">
            <span className="text-[9px] font-mono tracking-widest text-brand-muted uppercase mb-1">
              {lang === 'ko' ? '진실 규명 코덱스' : 'TRUTH INTEGRITY'}
            </span>
            <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 border rounded uppercase ${
              isFinalCodexUnlocked 
                ? 'bg-brand-gold-dk/20 text-brand-gold-lt border-brand-gold/50' 
                : 'bg-transparent text-brand-muted border-brand-border'
            }`}>
              {isFinalCodexUnlocked 
                ? (lang === 'ko' ? '기록 잠금해제' : 'Unsealed') 
                : (lang === 'ko' ? '기록 차단됨' : 'Encrypted')}
            </span>
          </div>
        </div>
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
          {lang === 'ko' ? '차디찬 런던의 세계관' : 'The Cold Laws of Sevenoaks & Mayfair'}
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
                ? '두 가문 사이에 일어난 2014년의 사태와 2016년의 폭삭 무너진 파산. 9년간 아무도 입에 물리려 하지 않았던 비밀들이 검은 물처럼 수면 아래 흘러갑니다.'
                : 'The tragedies of 2014 and the systematic foreclosure of 2016. Behind the silent walls, memories run deep and heavy like black river water.'}
            </p>
          </div>
        </div>
      </section>

      {/* CLUES & INVESTIGATION PANEL */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">
            {lang === 'ko' ? 'CLUE INVESTIGATOR' : 'FIELD OPERATIONS'}
          </span>
          <div className="flex-1 h-[1px] bg-brand-border" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light mb-8">
          {lang === 'ko' ? '비밀 공간 수사 및 단서 획득' : 'Investigate Major Estates & Secure Evidence'}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SEC 1: Location List Grid */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xs font-mono text-brand-muted tracking-widest uppercase mb-2">
              {lang === 'ko' ? '● 수색 가능한 지역 지소' : '● ACTIVE MAP INDEX'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {LOCATIONS.map(loc => {
                const isSearching = locationScanning[loc.id];
                const isSearched = searchedLocations.includes(loc.id);
                
                return (
                  <div 
                    key={loc.id}
                    id={`loc-card-${loc.id}`}
                    className={`bg-brand-s1 border p-5 rounded flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                      isSearched 
                        ? 'border-brand-gold-dk/30 bg-brand-s1/40' 
                        : 'border-brand-border hover:border-brand-gold/40'
                    }`}
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
                      
                      <p className="text-xs text-brand-muted font-serif italic leading-relaxed min-h-[50px] mb-4">
                        {lang === 'ko' ? loc.descKr : loc.descEn}
                      </p>
                    </div>

                    {/* Trigger search actions */}
                    <button
                      onClick={() => handleSearchLocation(loc)}
                      disabled={isSearched || isSearching}
                      className={`w-full py-2 border text-[10px] font-mono tracking-widest uppercase rounded flex items-center justify-center gap-2 transition-all duration-300 ${
                        isSearched
                          ? 'bg-brand-gold-dk/10 border-brand-gold-dk/30 text-brand-gold-dk cursor-not-allowed'
                          : isSearching
                          ? 'bg-brand-gold/10 border-brand-gold text-brand-gold-lt animate-pulse'
                          : 'bg-transparent border-brand-border text-brand-muted hover:border-brand-gold/60 hover:text-brand-gold-lt'
                      }`}
                    >
                      {isSearching ? (
                        <>
                          <Sparkles size={11} className="animate-spin" />
                          <span>{lang === 'ko' ? '봉인 해제 중...' : 'DECRYPTING STORAGE...'}</span>
                        </>
                      ) : isSearched ? (
                        <>
                          <CheckCircle size={11} />
                          <span>{lang === 'ko' ? '수수께끼 해독됨' : 'Evidence Secured'}</span>
                        </>
                      ) : (
                        <>
                          <Search size={11} />
                          <span>{lang === 'ko' ? '구조 수색하기' : 'Investigate Clues'}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SEC 2: Confidential Clue Binder Interaction */}
          <div className="lg:col-span-5">
            <div className="bg-brand-s2 border border-brand-border rounded p-6 shadow-2xl relative min-h-[460px] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between border-b border-brand-border/80 pb-4 mb-4">
                  <span className="text-[10px] font-mono tracking-widest text-brand-gold-lt uppercase">
                    {lang === 'ko' ? '비밀 기록 열람대' : 'SECURED DOSSIER CABINET'}
                  </span>
                  <Award size={16} className="text-brand-gold" />
                </div>

                {/* Show active clue list for user to inspect */}
                <p className="text-[11px] font-mono text-brand-muted tracking-wider uppercase mb-3">
                  {lang === 'ko' ? '● 확보한 긴급 단서 파일' : '● DISCOVERED CLUE INVENTORY'}
                </p>

                {discoveredCount === 0 ? (
                  <div className="h-[180px] border border-dashed border-brand-border rounded flex flex-col items-center justify-center text-center p-4">
                    <Lock size={28} className="text-brand-muted2 mb-3" />
                    <p className="text-sm font-serif italic text-brand-muted">
                      {lang === 'ko' 
                        ? '장소 카드의 "수색하기" 버튼을 눌러 비밀 증거와 진실 조각들을 확보하십시오.' 
                        : 'Discover classified archives by investigating the locations above.'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {clues.map(c => {
                      if (!c.discovered) {
                        return (
                          <div 
                            key={c.id} 
                            className="bg-brand-bg/50 border border-brand-border/40 rounded p-2.5 flex items-center justify-center text-center opacity-40 select-none"
                          >
                            <Lock size={12} className="text-brand-muted2 mr-2" />
                            <span className="text-[9px] font-mono tracking-widest text-brand-muted uppercase">LOCKED</span>
                          </div>
                        );
                      }
                      
                      const isSelected = selectedClueId === c.id;
                      
                      return (
                        <button
                          key={c.id}
                          onClick={() => setSelectedClueId(c.id)}
                          className={`p-3 rounded text-left border transition-all duration-300 relative overflow-hidden group ${
                            isSelected 
                              ? 'bg-brand-gold-dk/20 border-brand-gold text-brand-gold-lt' 
                              : 'bg-brand-s1 border-brand-border/80 text-brand-cream/80 hover:border-brand-gold/40'
                          }`}
                        >
                          <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100" />
                          <h5 className="font-serif text-xs font-semibold truncate leading-tight">
                            {lang === 'ko' ? c.nameKr : c.nameEn}
                          </h5>
                          <span className="text-[7px] font-mono tracking-widest text-brand-gold-dk uppercase mt-1 block">
                            {lang === 'ko' ? '해독 가능' : 'SECURED'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Inspected Clue Details */}
                {activeClue && (
                  <div className="mt-4 bg-brand-bg/90 border border-brand-border rounded p-4 relative animate-fadeIn">
                    <span className="text-[8px] font-mono text-brand-gold whitespace-nowrap bg-brand-s1 border border-brand-border px-2 py-0.5 absolute -top-2.5 left-4">
                      {lang === 'ko' ? '대외비 분석 기록' : 'INTERNAL ASSESSMENT'}
                    </span>
                    
                    <h4 className="font-serif text-[17px] font-semibold text-brand-cream/90 mb-2 mt-1">
                      {lang === 'ko' ? activeClue.nameKr : activeClue.nameEn}
                    </h4>

                    <p className="text-xs text-brand-muted font-serif italic leading-relaxed mb-3">
                      "{lang === 'ko' ? activeClue.inspectTextKr : activeClue.inspectTextEn}"
                    </p>

                    <div className="border-t border-brand-border/60 pt-3 mt-3">
                      <span className="text-[9px] font-mono text-brand-gold-lt tracking-widest uppercase block mb-1">
                        {lang === 'ko' ? '심층 규명 사실' : 'UNSEALED ALLEGATION'}
                      </span>
                      <p className="text-xs text-brand-cream/80 font-serif leading-relaxed italic">
                        {lang === 'ko' ? activeClue.unlockedStoryKr : activeClue.unlockedStoryEn}
                      </p>
                    </div>

                    {/* Connecting action button to increase narrative indexes */}
                    <div className="mt-4 pt-3 border-t border-brand-border/40 flex items-center justify-between">
                      <span className="text-[8px] font-mono text-brand-muted">
                        {lang === 'ko' ? '연장선에 긴장 추가' : 'ASSOCIATE AXIS'}
                      </span>

                      <button
                        onClick={() => handleAssignClue(activeClue.id, activeClue.targetAxis)}
                        className="px-3 py-1.5 bg-brand-gold hover:bg-brand-gold-lt text-brand-bg text-[9px] font-mono tracking-wider font-semibold uppercase rounded transition-colors duration-200 flex items-center gap-1"
                      >
                        <Link2 size={10} />
                        <span>{lang === 'ko' ? '서사선 연결하기' : 'Connect Core Clue'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {!activeClue && discoveredCount > 0 && (
                <div className="p-4 border border-brand-border bg-brand-bg/30 text-center rounded">
                  <p className="text-xs font-serif text-brand-muted italic">
                    {lang === 'ko' 
                      ? '단서 사잇장을 터치하면 리차드나 클로드의 의혹을 심층적으로 해독해 서사에 대입할 수 있습니다.' 
                      : 'Select a discovered dossier file to read the internal transcripts and map them to appropriate axes.'}
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* BENIO CELL: SOCIAL STRUCTURE & INTERACTIVE RELATION MATRIX / CHARACTER DOSSIER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">{lang === 'ko' ? 'CHARACTERS & DIALOGUE' : 'SOCIAL DYNAMICS'}</span>
          <div className="flex-1 h-[1px] bg-brand-border" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light mb-8">
          {lang === 'ko' ? '상류 사회 가문도 및 인물 비밀' : 'Tensions and Dynastic Dossiers'}
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
                    {lang === 'ko' ? '전 상류 사회 전문직. 2016년 파산 법제 조치 이후 영구 몰락.' : 'Dispossessed core estate. Ruined systematically in 2016 foreclosure.'}
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

                  {/* Secret Block - Unlocked dynamically */}
                  <div className="border border-brand-border/80 bg-brand-bg/60 rounded p-4 relative overflow-hidden group">
                    <div className="flex items-center gap-2 mb-2 text-brand-red">
                      <ShieldAlert size={14} />
                      <span className="text-[10px] font-mono tracking-widest uppercase font-semibold">
                        {lang === 'ko' ? '비기 및 숨겨진 진실' : 'CLASSIFIED INTERNAL DOSSIER'}
                      </span>
                    </div>

                    {totalTension >= 33 ? (
                      <p className="text-xs text-brand-cream/85 font-serif leading-relaxed italic bg-red-950/10 p-2.5 rounded border border-brand-red/30 animate-pulse">
                        {lang === 'ko' ? selectedChar.secretKr : selectedChar.secretEn}
                      </p>
                    ) : (
                      <div className="h-[48px] rounded flex flex-col items-center justify-center border border-dashed border-brand-border p-2">
                        <Lock size={14} className="text-brand-muted mb-1" />
                        <span className="text-[9px] font-mono text-brand-muted tracking-widest uppercase">
                          {lang === 'ko' ? `침묵 해제 불가 (시스템 긴장율 ${totalTension}/33% 필요)` : `DECRYPT SEALED (REQUIRES SYSTEM TENSION ${totalTension}/33%)`}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </div>

              {/* Backing relation notes context to show how this selected user feels about others */}
              <div className="mt-6 pt-4 border-t border-brand-border/60">
                <span className="text-[8px] font-mono text-brand-gold tracking-widest uppercase block mb-2">
                  {lang === 'ko' ? '● 당신(몰락 가주)과의 직접적 긴장 관계' : '● HOSTILITY METRIC TO YOU'}
                </span>
                <p className="text-xs font-serif text-brand-muted italic leading-relaxed">
                  {lang === 'ko' ? selectedChar.relationNotes.user : selectedChar.relationNotesEn.user}
                </p>
              </div>

            </div>
          </div>

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
            {lang === 'ko' ? '침묵과 비극의 대역사 (2008 – 2026)' : 'The Chronicle of Sealed Vows'}
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
            const isExpanded = expandedEvents.includes(ev.id);
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

                  {/* Interactive declassification detail expander link */}
                  <button 
                    onClick={() => toggleEventDetail(ev.id)}
                    className="flex items-center gap-1 text-[9px] font-mono tracking-widest uppercase text-brand-gold-lt hover:text-brand-cream transition-colors duration-200"
                  >
                    <span>{isExpanded ? (lang === 'ko' ? '대외비 비망록 접기' : 'CLOSE DOSSIER FILE') : (lang === 'ko' ? '대외비 비망록 열람하기' : 'DECLASSIFY INNER DETAILS')}</span>
                    <ChevronRight size={10} className={`transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="mt-3.5 p-4 bg-brand-s1/60 border border-brand-border/80 rounded italic font-serif text-xs text-brand-cream/80 leading-relaxed max-w-2xl animate-fadeIn">
                      <span className="text-[8px] font-mono text-brand-gold uppercase block mb-1">
                        CONFIDENTIAL MEMORANDUM // DECLASSIFIED AT {customTicker}
                      </span>
                      {lang === 'ko' ? ev.detailKr : ev.detailEn}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOUR AXIS GOALS PANEL */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[9px] tracking-widest text-brand-gold uppercase">{lang === 'ko' ? 'NARRATIVE AXES' : 'CAMPAIGN MILESTONES'}</span>
          <div className="flex-1 h-[1px] bg-brand-border" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-brand-cream font-light mb-8">
          {lang === 'ko' ? '구원과 멸망의 4대 서사선' : 'The Four Climax Thresholds'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {axes.map((axis, index) => {
            return (
              <div 
                key={axis.id}
                className="bg-brand-s1 border border-brand-border p-6 rounded relative overflow-hidden shadow-xl"
              >
                <div className="flex items-center justify-between mb-4 border-b border-brand-border/60 pb-3">
                  <div>
                    <span className="font-mono text-[8px] text-brand-gold uppercase block">AXIS 0{index + 1}</span>
                    <h3 className="font-serif text-xl font-light text-brand-cream">
                      {lang === 'ko' ? axis.titleKr : axis.titleEn}
                    </h3>
                  </div>
                  <span className="font-serif text-[44px] italic font-light text-brand-muted2 leading-none">{index + 1}</span>
                </div>

                <p className="text-xs text-brand-muted font-serif italic leading-relaxed mb-6">
                  {lang === 'ko' ? axis.descKr : axis.descEn}
                </p>

                {/* Progress Tension meter bar */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono text-brand-gold tracking-widest uppercase">
                      {lang === 'ko' ? axis.tensionLabelKr : axis.tensionLabelEn}
                    </span>
                    <span className="text-[10px] font-mono text-brand-gold-lt">{axis.currentStrength}%</span>
                  </div>

                  <div className="w-full h-1 bg-brand-bg rounded-full overflow-hidden">
                    <div 
                      className="bg-brand-gold h-full transition-all duration-1000"
                      style={{ width: `${axis.currentStrength}%` }}
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CODEX: SPECIAL LORE UNLOCK AT THE END */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 relative z-10">
        <div className="bg-brand-s2 border border-brand-gold-dk/50 p-8 rounded shadow-2xl relative overflow-hidden max-w-4xl mx-auto text-center">
          
          <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          
          <h3 className="font-serif text-2xl font-light text-brand-gold-lt mb-4 flex items-center justify-center gap-2">
            <BookMarked size={20} />
            <span>
              {lang === 'ko' ? '세븐오크스 침묵의 정점 해제' : 'The Threshold of Complete Resolution'}
            </span>
          </h3>

          <p className="text-sm font-serif italic text-brand-muted leading-relaxed mb-6 max-w-2xl mx-auto">
            {lang === 'ko' 
              ? '여섯 장소의 서류들을 모두 구찰하고 대외비 사실을 4대 서사망에 완전히 연결하면, 9년 전 헤론과 파산의 마지막 침묵을 가르던 양도 서약서 및 비공개 편지가 열립니다.'
              : 'Securing all six fragmented blueprints and mapping them correctly will unseal the confidential farewell ledger authored in 2017.'}
          </p>

          <button
            disabled={!isFinalCodexUnlocked}
            onClick={() => setShowCodex(!showCodex)}
            className={`px-8 py-3 rounded text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 ${
              isFinalCodexUnlocked
                ? 'bg-brand-gold hover:bg-brand-gold-lt text-brand-bg cursor-pointer shadow-lg shadow-brand-gold/20'
                : 'bg-brand-s1 border border-brand-border text-brand-muted cursor-not-allowed'
            }`}
          >
            {isFinalCodexUnlocked 
              ? (showCodex ? (lang === 'ko' ? '비밀 서신 봉인하기' : 'SHUT COMPLETE CHRONICLE') : (lang === 'ko' ? '비밀 서신 해독 개시' : 'UNLOCK FINAL COURIER NOTES')) 
              : `${lang === 'ko' ? '해금 대기 중' : 'SEALED'} (${discoveredCount}/6)`}
          </button>

          {/* Show complete decoded epistolary ending */}
          {isFinalCodexUnlocked && showCodex && (
            <div className="mt-8 border border-brand-gold/30 bg-brand-bg p-6 text-left rounded font-serif italic text-sm animate-fadeIn max-w-2xl mx-auto leading-relaxed text-brand-cream/90 space-y-4">
              <span className="text-[9px] font-mono text-brand-gold uppercase block text-center border-b border-brand-border pb-3 mb-4">
                - DECODED TRANSMISSION ORIGINAL FILE [2017.08.30 23:44] -
              </span>
              
              <p>
                {lang === 'ko' 
                  ? '“...나의 랭글리에게. 이 보초 없는 유배는 그대와 아버님의 삶을 리차드의 금융 수탈로부터 보호하기 위한 완벽한 차단막입니다. 내가 아무 말 없이 9년의 긴 터널을 돌아갈지라도, 세븐오크스의 측문 열쇠는 언제나 흙 속에 있으니, 결코 미안해하지도 슬퍼하지도 마십시오.”'
                  : '"...To my Langley. This unguarded exile is the solitary shield protecting you and Sebastian from my father’s legal execution. Thought I navigate a freezing dark alley for nine endless years, the side gate key is always right beneath the garden brick. Forgiveness is not requested."'}
              </p>
              
              <div className="text-right text-xs font-serif text-brand-gold mt-4">
                - {lang === 'ko' ? '클로드 헤론의 봉인 서신' : 'Claude’s final letter before Sevenoaks Exit'} -
              </div>
            </div>
          )}

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
