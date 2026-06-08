import React, { useState } from 'react';
import { CHARACTERS } from '../data';
import { Character } from '../types';

interface RelationshipMatrixProps {
  selectedChar: Character | null;
  onSelectChar: (char: Character) => void;
  lang: 'ko' | 'en';
}

export default function RelationshipMatrix({ selectedChar, onSelectChar, lang }: RelationshipMatrixProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<{ source: string; target: string } | null>(null);

  // Math coordinates for perfect pentagonal/hexagonal circular layout.
  // Standard list: Claude, Julian, Richard, Kenneth, Owen + User (center or in circle)
  // Let's place 6 nodes in a clean radial symmetry:
  // 0: Claude, 1: Julian, 2: Richard, 3: Kenneth, 4: Owen, 5: You (User)
  const nodes = [
    { id: 'claude', labelKr: '클로드', labelEn: 'Claude', symbol: '🦢', x: 250, y: 70 },
    { id: 'julian', labelKr: '줄리안', labelEn: 'Julian', symbol: '🎭', x: 410, y: 160 },
    { id: 'richard', labelKr: '리차드', labelEn: 'Richard', symbol: '♟', x: 370, y: 320 },
    { id: 'kenneth', labelKr: '케네스', labelEn: 'Kenneth', symbol: '🗝️', x: 130, y: 320 },
    { id: 'owen', labelKr: '오웬', labelEn: 'Owen', symbol: '🌿', x: 90, y: 160 },
    { id: 'user', labelKr: '유저 (나)', labelEn: 'You (Langley)', symbol: '🌹', x: 250, y: 200 } // Center-ish for dramatic connection
  ];

  // Specific high-tension relationship definitions
  const relations = [
    {
      source: 'claude', target: 'user',
      notesKr: '9년 간의 차가운 침묵. 오해와 약속이 뒤섞인 비틀린 순정.',
      notesEn: "9 years of freezing silence. A twisted allegiance buried beneath Richard's watchful eye."
    },
    {
      source: 'richard', target: 'claude',
      notesKr: '숨막히는 지배와 소리 없는 칼날의 반역전.',
      notesEn: "Oppressive control vs quiet, calculated coup d'état."
    },
    {
      source: 'richard', target: 'user',
      notesKr: '파산의 약점을 쥐고 흔드는 포식자. 약혼 동결권 보유.',
      notesEn: "Predatory creditor holding the contract of your existence."
    },
    {
      source: 'julian', target: 'claude',
      notesKr: '적통 서자의 긴장된 시선. 조롱과 위선의 파트너십.',
      notesEn: "Illegitimate resentment. Masked in elegant teasing and sibling espionage."
    },
    {
      source: 'julian', target: 'user',
      notesKr: '가장 사나운 여우. 적의 아들이지만 알 수 없는 구명선.',
      notesEn: "Fox-eyed provocateur. Richard's heir, yet an unpredictable whistleblower."
    },
    {
      source: 'owen', target: 'user',
      notesKr: '동부 플랫의 따뜻한 아군. 우직한 연모와 목숨을 건 수호.',
      notesEn: "Unshakable devotion. Vowed to tear down the golden cage of Heron to save you."
    },
    {
      source: 'kenneth', target: 'user',
      notesKr: '속죄와 절대복종. 랭글리의 유일한 수호자이자 비밀의 열쇠.',
      notesEn: "Quiet penance. Servant of the past, harboring the dark ledger of 2016."
    },
    {
      source: 'kenneth', target: 'richard',
      notesKr: '서재의 노집사와 왕좌의 기획자. 증거를 삼키고 때를 노림.',
      notesEn: "A tight-lipped archivist waiting to thrust the steel of evidence into Richard."
    },
    {
      source: 'owen', target: 'claude',
      notesKr: '과거와 현재의 적대적 불평등. 당신을 둔 보이지 않는 주도권 싸움.',
      notesEn: "Bitter class tension and intense professional gatekeeping over your future."
    },
    {
      source: 'kenneth', target: 'owen',
      notesKr: '헤론을 멀리하라는 침묵의 영탄조. 가업의 무게와 비밀 보존.',
      notesEn: "Anxious paternal warnings. Secrets kept to prevent Owen's premature destruction."
    }
  ];

  const handleNodeClick = (nodeId: string) => {
    if (nodeId === 'user') return; // User isn't an adjustable standalone character dossier
    const found = CHARACTERS.find(c => c.id === nodeId);
    if (found) {
      onSelectChar(found);
    }
  };

  // Determine active dynamic description
  let activeRelationText = '';
  if (hoveredLink) {
    activeRelationText = lang === 'ko' ? hoveredLink.notesKr : hoveredLink.notesEn;
  } else if (hoveredNode) {
    const node = nodes.find(n => n.id === hoveredNode);
    if (node) {
      activeRelationText = lang === 'ko' 
        ? `${node.labelKr}: ${node.id === 'user' ? '랭글리의 살아남은 마지막 적통.' : '인물 분석을 보려면 노드를 터치하세요.'}` 
        : `${node.labelEn}: ${node.id === 'user' ? 'The last remaining heir of House Langley.' : 'Click node to inspect dossier.'}`;
    }
  } else if (selectedChar) {
    activeRelationText = lang === 'ko'
      ? `${selectedChar.symbol} ${selectedChar.name}의 가문 내 긴장이 활성화되었습니다.`
      : `${selectedChar.symbol} Dynamic view for ${selectedChar.name} is active.`;
  } else {
    activeRelationText = lang === 'ko'
      ? '노드 또는 연결선에 마우스를 올리면 심리적 관계망의 긴장도가 표시됩니다.'
      : 'Hover over nodes or lines to unveil psychological threads and subtext.';
  }

  return (
    <div className="bg-brand-s1 border border-brand-border rounded p-6 shadow-2xl relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping"></span>
        <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase">
          {lang === 'ko' ? '실시간 인물 관계 긴장도' : 'PSYCHOLOGICAL MATRIX'}
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="w-full max-w-[500px] aspect-[5/4] relative mt-6 flex justify-center">
        <svg 
          viewBox="0 0 500 400" 
          className="w-full h-full select-none"
        >
          {/* Definitions for elegant visual gradients */}
          <defs>
            <radialGradient id="gold-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#b8963e" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#b8963e" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="link-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b8963e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1c1e2a" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Background Ambient Network Glow */}
          <circle cx="250" cy="200" r="130" fill="url(#gold-glow)" />

          {/* Drawing relationship link paths */}
          {relations.map((rel, idx) => {
            const start = nodes.find(n => n.id === rel.source)!;
            const end = nodes.find(n => n.id === rel.target)!;
            
            // Check if this connection should emphasize highlight
            const isHovered = hoveredLink?.source === rel.source && hoveredLink?.target === rel.target;
            const isRelatedToSelected = selectedChar && (selectedChar.id === rel.source || selectedChar.id === rel.target);
            const isRelatedToHoverNode = hoveredNode && (hoveredNode === rel.source || hoveredNode === rel.target);
            
            let strokeColor = 'rgba(28, 30, 42, 0.6)';
            let strokeWidth = 1.5;
            let strokeDash = '';
            
            if (isHovered) {
              strokeColor = 'var(--color-brand-gold-lt)';
              strokeWidth = 3;
            } else if (isRelatedToHoverNode) {
              strokeColor = 'rgba(184, 150, 62, 0.7)';
              strokeWidth = 2;
            } else if (isRelatedToSelected) {
              strokeColor = 'rgba(184, 150, 62, 0.4)';
              strokeWidth = 1.7;
              strokeDash = '4,4';
            }

            return (
              <g key={idx}>
                {/* Thick invisible collision path for easy hovers */}
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="transparent"
                  strokeWidth={14}
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredLink(rel)}
                  onMouseLeave={() => setHoveredLink(null)}
                />
                
                {/* Visual relationship line */}
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDash}
                  className="transition-all duration-300 pointer-events-none"
                />
              </g>
            );
          })}

          {/* Drawing nodes */}
          {nodes.map((node) => {
            const isSelected = selectedChar?.id === node.id;
            const isHovered = hoveredNode === node.id;
            
            let ringColor = 'border-brand-border';
            let glow = 'none';
            if (isSelected) {
              ringColor = 'stroke-brand-gold';
              glow = 'drop-shadow(0 0 8px rgba(184,150,62,0.6))';
            } else if (isHovered) {
              ringColor = 'stroke-brand-gold-lt';
              glow = 'drop-shadow(0 0 6px rgba(184,150,62,0.4))';
            } else if (node.id === 'user') {
              ringColor = 'stroke-brand-red';
            } else {
              ringColor = 'stroke-brand-border';
            }

            return (
              <g 
                key={node.id} 
                transform={`translate(${node.x}, ${node.y})`}
                className="cursor-pointer group"
                onClick={() => handleNodeClick(node.id)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Expand hover background anchor */}
                <circle r={26} fill="transparent" />
                
                {/* Visual node shell */}
                <circle 
                  r={18} 
                  fill={node.id === 'user' ? '#0c0e16' : '#131624'}
                  className="transition-all duration-300"
                  style={{ filter: glow }}
                  stroke={isSelected ? '#b8963e' : node.id === 'user' ? '#7a3535' : '#1c1e2a'}
                  strokeWidth={isSelected ? 2.5 : 1}
                />

                {/* Node Symbol icon */}
                <text 
                  textAnchor="middle" 
                  y={5} 
                  className="text-sm select-none pointer-events-none"
                >
                  {node.symbol}
                </text>

                {/* Elegant label floating above or below node depending on y coordinates */}
                <text
                  y={node.y > 220 ? 32 : -24}
                  textAnchor="middle"
                  fill={isSelected ? '#d4af6a' : '#ddd6c8'}
                  className="text-[10px] font-mono tracking-widest uppercase transition-colors duration-200"
                  opacity={isHovered || isSelected ? 1 : 0.65}
                >
                  {lang === 'ko' ? node.labelKr : node.labelEn}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Relationship detailed ticker panel */}
      <div className="w-full bg-brand-bg/80 border border-brand-border/60 rounded p-4 text-center mt-3 min-h-[72px] transition-all duration-300">
        <p className="font-serif text-[15px] italic text-brand-cream/90 leading-relaxed font-light">
          "{activeRelationText}"
        </p>
      </div>
    </div>
  );
}
