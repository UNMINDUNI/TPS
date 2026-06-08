import { Character, LocationInfo, TimelineEvent, Clue, NarrativeAxis } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'claude',
    name: 'Claude Heron',
    roleKr: '전무이사 · Heron Group',
    roleEn: 'Managing Director · Heron Group',
    symbol: '🦢',
    tier: 'T2 - 극상위 금융가',
    age: 27,
    appearance: ['백금발 (Platinum Blonde)', '벽안 (Deep Blue Eyes)', '192cm', '스리피스 수트 (Three-Piece Suit)'],
    descKr: '정중하고 거리를 유지한다. 격할수록 목소리가 낮아진다. 침묵이 길수록 상대가 먼저 양보하도록 만드는 차가운 위엄의 소유자. 9년 만에 돌연 런던으로 돌아왔으나, 그 아공간 같은 9년의 공백에 대해서는 침묵한다.',
    descEn: 'Polite, calculating, keeping an absolute distance. The more intense his anger, the quieter his voice drops. He has returned to London after 9 years of absolute silence, offering no explanation.',
    secretKr: '9년 전 떠난 진짜 이유는 당신과 Langley 가문을 Richard의 삼킬 듯한 탐욕으로부터 격리하고, 어머니 Eleanor가 남긴 실마리를 단독으로 해결하기 위함이었다.',
    secretEn: 'His departure nine years ago was to shield you and the Langley family from Richard’s insatiable greed, and to unravel the clues left by his mother, Eleanor, alone.',
    quoteKr: '"침묵하는 법을 배워야 합니다. 그것이 이 세계에서 살아남는 유일한 예의이며, 가장 치명적인 무기이기도 하니까요."',
    quoteEn: '"One must learn to govern with silence. It is the only polite gesture in this territory, and easily the most fatal weapon."',
    accentColor: '#b8963e',
    avatarBg: 'bg-slate-950 border-brand-gold/30',
    relationNotes: {
      user: '소꿉친구이자 비밀스러운 약속의 대상. 지키기 위해 멀어질 수밖에 없던 9년의 고독.',
      richard: '경멸하지만 굴복해야 하는 아버지. 숨 막히는 침묵의 전쟁 중.',
      julian: '불쾌한 자리에 들어선 불청객. 그의 가벼움 속에 감춰진 눈을 경계함.',
      owen: '당신 곁을 지키고 서 있는 충직한 갈색 머리 기사. 연줄 없는 그의 행보를 조용히 주시하는 중.',
      kenneth: '과묵한 목소리 속에 잠긴 옛 Langley의 기록과 비밀을 가장 경계하는 충신.'
    },
    relationNotesEn: {
      user: 'Childhood companion and objective of a silent vow. Nine years of distance to guarantee survival.',
      richard: 'Resented but unshakeable father. A cold, suffocating warfare with no loud words.',
      julian: 'The uninvited guest in the household hierarchy. Highly vigilant of his Fox-eyed mask.',
      owen: 'The loyal brown-haired guardian standing beside you. Quietly monitoring his career obstacles.',
      kenneth: 'The ancient guardian who holds the sealed scrolls and memories of Sebastian Langley.'
    }
  },
  {
    id: 'julian',
    name: 'Julian Heron',
    roleKr: '비상임이사 · 소셜라이트',
    roleEn: 'Non-Executive Director · Socialite',
    symbol: '🎭',
    tier: 'T2 - 헤론가 입적자',
    age: 25,
    appearance: ['헝클어진 금발 (Ruffled Blonde)', '여우눈 (Fox Eyes)', '194cm', '캐주얼 테일러드 코트'],
    descKr: '장난스럽고 영악하며 경쾌하다. 하지만 그의 농담에는 항상 살을 도려내는 듯한 뼈가 들어 있다. 이사회 의석은 있으나 헤론 그룹의 직접적인 실권은 없다. 2018년, 두 가문의 파멸의 잿더미 속에 공식 입적되었다.',
    descEn: 'Playful, sharp, and seemingly careless. There is a razor-thin blade concealed in every smile. Placed into the registry in 2018 when Langley fell and Eleanor was long gone.',
    secretKr: '사실 사생아로서 헤론 가의 어두운 이면을 직접 응시하며 자랐기에 가문의 붕괴를 갈망한다. 당신을 장난스레 조롱하지만, 실상은 그 늪에서 빼내 주고 싶은 이중적 동정심이다.',
    secretEn: 'Raised in the shadows of Richard’s legacy, he harbors a deep-seated desire to watch the Heron family burn. His mockery is a defense mechanism over a secret, genuine pity for your fate.',
    quoteKr: '"헤론 저택의 차가운 대리석보다는, 런던 동부의 그 삐걱거리는 마룻바닥이 훨씬 인간미 넘치지 않아? 구경하게 좀 보내줘."',
    quoteEn: '"The creaking floorboards of the East End sound much friendlier than the dead marble of Sevenoaks, don\'t you think? Pray show me sometime."',
    accentColor: '#93c5fd',
    avatarBg: 'bg-slate-900 border-blue-900/30',
    relationNotes: {
      user: '흥미진진한 몰락 가문의 생존자. 가끔 선을 넘어가 조롱하지만 언제든 손을 내밀 것처럼 군다.',
      claude: '가식적인 적통 형제. 그의 완벽한 스리피스 수트의 올 한 올이 풀리는 날을 고대한다.',
      richard: '자신을 유용성으로만 평가해 공식 명함을 쥐어 준 지배자. 기회만 오면 목을 노릴 상대.',
      owen: '순진해서 다치기 쉬운 존재. 그의 우직한 성정이 이 냉혹한 도심에서 언제 부서질지 내기하고 싶어 함.',
      kenneth: '눈치 빠른 늙은 늑대. 언제든 가주의 비리를 물어뜯을 준비가 되어 있음을 알고 지켜봄.'
    },
    relationNotesEn: {
      user: 'Fascinating survivor of a ruined legacy. Teasing but unpredictably shielding.',
      claude: 'The flawless legitimate heir. Eagerly waiting for a single loose thread to unravel him.',
      richard: 'The patriarch who granted him a name only for tax write-offs and leverage. A target to betray.',
      owen: 'A stubbornly honest creature. Wants to see how long that integrity lasts under urban gravity.',
      kenneth: 'A clever old wolf who knows exactly where Sebastian buried the skeletons.'
    }
  },
  {
    id: 'richard',
    name: 'Richard Heron',
    roleKr: '회장 · Heron Group',
    roleEn: 'Chairman · Heron Group',
    symbol: '♟',
    tier: 'T2 - 사교계 최고 권력',
    age: 48,
    appearance: ['백금발 (Steel Platinum)', '회색 눈 (Cold Grey Eyes)', '202cm', '클래식 다크 정장'],
    descKr: '묵직하고 조용한 위엄. 격식을 완벽히 차린 온화한 언어로 상대를 파멸로 이끈다. 장내에 들어서면 사방의 소음이 죽어 들고, 모든 호흡이 반 박자씩 느려진다. 다정하게 접근해 정중하게 조여 오는 지배자.',
    descEn: 'A towering figure of absolute cold authority. He never raises his voice; his quietest whisper carries the weight of execution. He suffocates his adversaries with polite gestures and unyielding contracts.',
    secretKr: 'Eleanor를 죽음에 이르게 방조했고, Sebastian Langley를 파멸로 몰고 가며 가문의 영혼까지 매수하고자 기획했다. 당신의 상속권 일부를 영구 차단한 서류의 서명자.',
    secretEn: 'He facilitated Eleanor’s isolation and engineered Sebastian’s bankruptcy to acquire the prime assets of Sevenoaks. The architect behind the systematic erasure of the Langley name.',
    quoteKr: '"자본의 은혜는 침묵하는 자에게만 내리지요. 내 아들이 그대에게 9년째 입을 닫는 이유도 거기 있고 말입니다."',
    quoteEn: '"The mercy of capital only extends to those who remain silent. Which is precisely why my son preserved his silence for nine long years."',
    accentColor: '#7a3535',
    avatarBg: 'bg-red-950/20 border-red-900/30',
    relationNotes: {
      user: '소유하지 못하면 제거해야 할 몰락 가문의 보풀. 아직 유용한 약혼의 시한이 남아 있어 내버려 두는 중.',
      claude: '자신의 가장 철저한 위선적 피조물이자 동시에 후계자. 그의 내면 속 반역을 감지하고 있음.',
      julian: '필요에 의해 호적에 올려 준 장식 장난감. 사냥개가 주인에게 이빨을 드러내지 않는 선에서만 귀여워함.',
      owen: '귀찮은 파리. 법률 하위직 따위는 이름 석 자로 런던 금융가에서 완전 퇴출시킬 수 있는 자갈돌에 불과함.',
      kenneth: '자신의 가슴에 비수를 꽂을 유일하게 신뢰할 수 없는 노집사. 일거수일투족을 봉쇄하고 감시함.'
    },
    relationNotesEn: {
      user: 'A loose thread of a ruined dynastic rival. Left alive only because the engagement clause still holds legal value.',
      claude: 'His masterstroke and successor. Well aware of the silent rebellion brewing under the perfect posture.',
      julian: 'A stray hound given a collar for convenience. Entertaining only as long as he stays at heel.',
      owen: 'An annoying insect in the lower courts. Easily crushed into bankruptcy at the stroke of a pen.',
      kenneth: 'The former steward of Langley who possesses dangerous historical records. Placed under close watch.'
    }
  },
  {
    id: 'kenneth',
    name: 'Kenneth Ashby',
    roleKr: '前 Langley 가문 수석 집사장',
    roleEn: 'Former Langley Chief Butler',
    symbol: '🗝️',
    tier: 'T3 - 충직한 그림자',
    age: 58,
    appearance: ['단정한 회색 머리', '단추형 은빛 안경', '오래된 가죽 만년필', '낡았지만 세심하게 다듬어진 의복'],
    descKr: '침묵이 충성이라고 말하는 오래된 수호자. Langley의 파산 이후에도 변제되지 않은 채 남아, 자비로 유저와 가문의 잔존 흔적을 보호했다. 조용하고 완벽한 일 처리 속에 20년 섬긴 주군을 향한 깊은 의문과 부채감이 있다.',
    descEn: 'A stoic, loyal keeper of secrets who served Sebastian Langley for two decades. Refused to leave after the bankruptcy, guarding the remaining memories of the house at his own financial cost.',
    secretKr: '사실 2016년 파산 당시 헤론 가가 흘린 고의적 서류 누출본을 제일 먼저 목격했으나, 아들 Owen의 신변과 유저의 생명을 보장받기 위해 입을 닫기로 타협한 씻을 수 없는 자책이 있다.',
    secretEn: 'Witnessed the forged documents sent by Richard during the 2016 bankruptcy, but agreed to remain silent in exchange for Owen’s security and your immediate physical safety—a compromise that tortures him.',
    quoteKr: '"도련님(아가씨), 침묵은 때론 거짓말보다 깊은 진실을 숨기기 위해 쓰입니다. 그들이 닫은 입 속엔 벼랑이 있습니다."',
    quoteEn: '"My lord (lady), silence is occasionally kept not to lie, but to suppress a truth too deep. There are vertical cliffs behind their sealed lips."',
    accentColor: '#8a8a8a',
    avatarBg: 'bg-zinc-950 border-zinc-800',
    relationNotes: {
      user: '목숨을 바쳐 지켜야 할 주인. 가문의 모든 비밀이 열리는 날, 마주할 당신의 깊은 절망을 두려워함.',
      claude: '어린 날 누구보다 가깝게 모셨으나 이제는 알 수 없는 거인이 되어 돌아온, 침묵의 가해자이자 조력자.',
      richard: '경멸스럽고도 거대한 권력. 자신의 조용한 기록들이 그를 기어코 파멸시키기를 기도하며 살고 있다.',
      julian: '가문 밖에서 떠돌던 눈빛이 이제 상류 사교계의 영악한 칼날이 된 모습을 안타깝고도 경계하며 주시함.',
      owen: '우직하고 불타오르는 내 아들. 당신을 위해 헤론 가라는 불섶으로 자진해 뛰어드는 그를 볼 때마다 두려움에 떤다.'
    },
    relationNotesEn: {
      user: 'His surviving master, to be guarded at all costs. Shudders at the weight of the truth you must eventually bear.',
      claude: 'An intimate child he once raised, now a looming stranger who models himself after the iron patriarch.',
      richard: 'A venomous serpent. Prays that the sealed archives will eventually bring this tyrant down.',
      julian: 'The dynamic, Fox-eyed wild card. Watches him with deep caution and warning.',
      owen: 'His passionate son. Trembles with anxiety as Owen steps closer to the jaws of the Heron dynasty.'
    }
  },
  {
    id: 'owen',
    name: 'Owen Ashby',
    roleKr: '법률/금융 하위직 · Kenneth의 아들',
    roleEn: 'Lower Legal/Finance Clerk · Kenneth\'s Son',
    symbol: '🌿',
    tier: 'T5 - 자력 생존 노동자',
    age: 26,
    appearance: ['단정한 갈색 고수머리', '녹갈색 눈빛', '186cm', '검소하지만 단정히 다려진 코튼 셔츠'],
    descKr: '유일하고 뜨거운 당신의 소꿉친구. 헤론의 검은 거미줄을 전혀 모른 채, 그저 파산 이후 동부의 비좁은 아파트에서 자라며 고난을 함께 버텼다. 우직한 성정과 따뜻한 성실성으로 법조계 하위직에서 정보를 긁어모은다.',
    descEn: 'Your warm, shielding childhood companion and Kenneth’s son. Entirely unaware of the intricate web, he supports you in a cramped flat in the East End, digging up legal files with sheer determination.',
    secretKr: '자신의 직업적 실력과 모든 삶을 바쳐서라도 Langley 가문의 이름을 재건하고 당신에게 씌워진 위선적 굴레를 찢어버리겠다고 결심함. 이미 소꿉친구 이상의 깊고 불타는 연모를 품고 있다.',
    secretEn: 'Vowed to sacrifice his career and safety to rebuild Langley and free you from the golden chains. He harbors a deeply suppressed, fiercely protective love for you since childhood.',
    quoteKr: '"나한테 물어봐 주면 좋겠어. 헤론 저택의 차가운 위로 대신, 내가 네 옆에서 밤을 지킬 수 있게 허락해 줘."',
    quoteEn: '"Ask me instead. Let me keep watch over your sleepless nights, rather than crawling back to the dead comfort of Sevenoaks."',
    accentColor: '#10b981',
    avatarBg: 'bg-emerald-950/25 border-emerald-900/30',
    relationNotes: {
      user: '자신의 인생 전체를 걸어 끝내 구원해 내야 할 빛. 결코 헤론들의 가식적인 미소에 빼앗기지 않겠다고 다짐함.',
      claude: '말 한마디 없이 9년을 떠났다 유유히 돌아온 거만한 지배층. 그의 호의에 당신이 한들거릴 때마다 심장이 타들어 간다.',
      richard: '보이지 않는 곳에서 Langley를 억누르는 실질적인 주모자임을 직감하고 법조계 서류를 들추는 중.',
      julian: '여우 같은 속내를 드러내며 선의인지 악의인지 알 수 없이 당신 주변을 맴도는 소셜라이트. 가장 주먹을 쥐게 만드는 인물.',
      kenneth: '자신에게 헤론 가를 멀리하라고 다그치며 무엇인가를 기어코 숨기는 과묵한 내 아버지. 그의 침묵이 슬프다.'
    },
    relationNotesEn: {
      user: 'The light of his life. Swore to drag you out of the Heron swamp, refusing to let them buy your soul.',
      claude: 'An arrogant monolith who abandoned everyone for nine years. His return triggers an unbearable anxiety.',
      richard: 'The hidden predator behind the bankruptcy. Pulling local court records to reconstruct his fraud.',
      julian: 'A toxic fox playing social games with you. Despised for his casual disrespect.',
      kenneth: 'His tight-lipped father who constantly begs him to stay away. Frustrated by the walls of his silence.'
    }
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: 'heron_tower',
    nameKr: 'Heron Tower (헤론 타워)',
    nameEn: 'Heron Tower',
    addrKr: '시티 오브 런던 (City of London)',
    addrEn: 'City of London',
    descKr: '유리벽과 철저한 저중저음의 공간. 감정보다는 수억 파운드짜리 숫자가 먼저 거론되는 곳. 만년필 뚜껑이 닫히는 정중한 소리만이 가끔 이 고요한 층고를 채운다.',
    descEn: 'A high-rise monument of tinted glass and high finance. Where fortunes are liquidated in absolute silence over single malt. Highly secure and emotionally dead.',
    visitors: ['claude', 'julian', 'richard'],
    icon: '🏢',
    clueId: 'bankruptcy_ledger'
  },
  {
    id: 'heron_hotel',
    nameKr: 'Heron Hotel (헤론 호텔 - 메이페어)',
    nameEn: 'Heron Hotel',
    addrKr: '런던 메이페어 (Mayfair · London)',
    addrEn: 'Mayfair · London',
    descKr: '눈부신 샹들리에와 무거운 대리석. 지하실의 수많은 직원 통로와 1층의 찬란하게 장식된 귀빈석 사이의 거리가 곧 그들의 계급 격차다. 자정 이후에는 빛이 서서히 꺼진다.',
    descEn: 'Heavy marble and dazzling crystal chandeliers. The vast layout separates the underground service shafts from the velvet VIP chambers—a map of absolute social tiering.',
    visitors: ['julian', 'richard'],
    icon: '🏨',
    clueId: 'iris_accident_report'
  },
  {
    id: 'heron_mansion',
    nameKr: 'Heron Mansion (헤론 대저택 - 세븐오크스)',
    nameEn: 'Heron Mansion',
    addrKr: '켄트 세븐오크스 (Sevenoaks · Kent)',
    addrEn: 'Sevenoaks · Kent',
    descKr: '헤론 가문의 중심지. 피아노룸은 언제나 서쪽 별관에 굳게 감겨 있으며, 오래전 사망한 Eleanor의 응접실은 먼지가 겹겹이 쌓인 채 봉인되어 있어 소름 돋는 무음만이 흐른다.',
    descEn: 'The ancestral estate. The piano gallery remains locked in the west wing, and Eleanor’s private suite sits frozen in dust—a quiet, gorgeous tomb.',
    visitors: ['claude', 'richard', 'julian', 'kenneth'],
    icon: '🏛️',
    clueId: 'eleanor_silver_ring'
  },
  {
    id: 'richard_villa',
    nameKr: 'Richard의 별장 (리차드 서리 빌라)',
    nameEn: "Richard's Surrey Villa",
    addrKr: '서리 주 (Surrey)',
    addrEn: 'Surrey',
    descKr: '엄격하게 가꿔진 인공 정원. 장미는 11월에 모두 전지가 끝난 뒤 고사하고 봄새로 다시 교체된다. 굳게 닫힌 전용 서재 아래의 와인 셀러에서 사밀한 비밀 협상이 성사되었다.',
    descEn: 'A meticulously sculpted fortress. The roses are systematically pruned to death in November and replanted in April. Beneath the cold study lies an isolated cellar for private leverage.',
    visitors: ['richard'],
    icon: '🍷',
    clueId: 'sebastian_sealed_box'
  },
  {
    id: 'langley_mansion',
    nameKr: 'Langley Mansion (랭글리 옛 저택)',
    nameEn: 'Langley Mansion (Ruins)',
    addrKr: '켄트 세븐오크스 (Sevenoaks · Kent)',
    addrEn: 'Sevenoaks · Kent (Abandoned)',
    descKr: '헤론 Mansion 바로 옆 돌담 측문을 사이에 뒀던 당신의 고향. 2016년 파산 이후 가구들이 뜯겨 나간 잿빛 돌벽만이 자리를 버틴다. 잡초 더미 속 온실과 무너진 Iris의 응접실.',
    descEn: 'Directly adjacent to the Heron estate, separated only by a rusted pedestrian gate. Striped of its grandeur in 2016, leaving skeleton halls and a collapsing greenhouse.',
    visitors: ['kenneth'],
    icon: '🏡',
    clueId: 'gate_rusty_key'
  },
  {
    id: 'ashby_flat',
    nameKr: 'Ashby Flat (애시비 동부 플랫)',
    nameEn: 'Ashby Flat',
    addrKr: '런던 이스트 엔드 (East End · London)',
    addrEn: 'East End · London',
    descKr: '화려한 런던의 이면. 삐걱거리는 나무 계단을 4층까지 숨 돌려 걸어 올라야 하는 임시 피난처. 창 밖엔 네온 불빛과 밤바람 소리만이 맴돌지만 유일한 안전지대이다.',
    descEn: 'Four flights of winding, creaky wooden stairs. A modest haven in the working-class district. Far from the velvet salons of Kent, but insulated from the Heron spies.',
    visitors: ['owen', 'kenneth'],
    icon: '🏠',
    clueId: 'bromley_receipts'
  }
];

export const CLUES: Clue[] = [
  {
    id: 'eleanor_silver_ring',
    nameKr: 'Eleanor의 은반지',
    nameEn: 'Eleanor\'s Silver Ring',
    foundAt: 'heron_mansion',
    inspectTextKr: '오래전 죽은 클로드의 어머니, Eleanor 가의 이니셜이 닳아 없어진 은반지. 안쪽에는 "Till Silence Ends (침묵이 깨지는 그날까지)" 라는 문구가 힘주어 새겨져 있다.',
    inspectTextEn: 'A worn silver crest ring belonging to Claude’s late mother. Engraved on the inner band is a faint, desperate vow: "Till Silence Ends".',
    targetAxis: 'axis3',
    unlockedStoryKr: '반지의 마모 상태로 미루어 볼 때, 그녀는 극심한 불안 상태에서 금속면을 계속 손끝으로 문질렀던 것이 드러난다. 리차드가 그녀의 죽음을 냉혹히 방관했다는 조용한 증거.',
    unlockedStoryEn: 'The deep abrasions suggest she repeatedly rubbed the inner metallic surface in periods of extreme anxiety. Solid proof of her isolated, monitored descent in Richard\'s house.',
    discovered: false
  },
  {
    id: 'bankruptcy_ledger',
    nameKr: '랭글리 파산 고의 차입 서류',
    nameEn: 'Forced Default Agreement',
    foundAt: 'heron_tower',
    inspectTextKr: '2016년 1월에 체결된 비밀 자산 처분 승인서. 체결 당사자로 무단 표시된 Sebastian Langley와 Richard Heron의 서명이 선명하지만 날짜가 위조된 정황이 엿보인다.',
    inspectTextEn: 'A highly confidential asset liquidation ledger dated Jan 2016. Sebastian’s signature appears unnaturally traced, aligning with Richard’s business stamps.',
    targetAxis: 'axis2',
    unlockedStoryKr: '랭글리 가문의 파산은 단순한 투자 실패가 아니었다. 리차드가 교묘히 심어둔 재정 구속 조항에 아버지가 협박당한 채 강제로 자산을 헐값에 매각해야 했던 법적 덫이었다.',
    unlockedStoryEn: 'The bankruptcy was an artificial default. Richard leveraged Sebastian’s short-term debts with predatory clauses, forcing him to sign away the Sevenoaks title for a nominal sum.',
    discovered: false
  },
  {
    id: 'iris_accident_report',
    nameKr: 'Iris 교통사고 재조사 대외비',
    nameEn: 'Iris Collision Log (Internal)',
    foundAt: 'heron_hotel',
    inspectTextKr: '2014년 당신의 어머니, Iris Langley의 사고 경위서 원본. 브레이크 답력 제어 장치의 펌웨어 에러가 감지되었지만 제조사 책임으로 급결론지어 외부 공개를 차단했다.',
    inspectTextEn: 'A classified insurance assessment of Iris’s fatal crash in 2014. Notes an intentional telemetry disablement and critical electronic failure override, buried instantly.',
    targetAxis: 'axis3',
    unlockedStoryKr: '사고가 나기 불과 사흘 전, 그녀는 리차드가 에스테이트 자산을 가로채기 위해 진행 중이던 이중 장부를 폭로하려 했다. 이것은 단순 실수가 아닌 잔혹한 기획의 암영이다.',
    unlockedStoryEn: 'Just three days prior to the crash, Iris threatened to expose Richard’s parallel offshore ledger to the Inland Revenue. Her death silences the Langley defense.',
    discovered: false
  },
  {
    id: 'sebastian_sealed_box',
    nameKr: 'Sebastian의 굳게 닫힌 가죽 상자',
    nameEn: 'Sebastian\'s Sealed Box',
    foundAt: 'richard_villa',
    inspectTextKr: '가주의 자금이 유출되던 당시의 진짜 수취인 목록과 은행 실명 보고서 박스. 아버지가 도망칠 당시 서둘러 서랍 밑바닥에 두고 가 리차드의 수장고에 몰수됐던 물품.',
    inspectTextEn: 'A brass-bound executive lockbox holding original Langley client funds. Consecutively logged right up to Sebastian’s flight, locked in Richard’s private vault.',
    targetAxis: 'axis1',
    unlockedStoryKr: '이 서류들은 아버지 Sebastian의 은둔지가 브롬리 너머 어딘가임을 뒷받침해 주는 단서를 준다. 그는 구속을 피해 도주 중이며, Kenneth가 여전히 그의 안위를 살피는 것을 돕고 있다.',
    unlockedStoryEn: 'The internal correspondence outlines Sebastian’s relocation logistics to a tenement in Bromley. He is actively evading Richard’s asset collection agents, aided silently by Kenneth.',
    discovered: false
  },
  {
    id: 'gate_rusty_key',
    nameKr: '세븐오크스 돌담 측문의 녹슨 열쇠',
    nameEn: 'Rusted Pedestrian Gate Key',
    foundAt: 'langley_mansion',
    inspectTextKr: '두 가문의 아이들이 저택 경계를 넘어 밤늦게 몰래 뛰어놀 때 사용하던 지름 3cm 남짓의 철제 열쇠. 수많은 손길로 손잡이는 둥글게 닳았지만 흙속에 파묻혀 있었다.',
    inspectTextEn: 'A heavy brass key to the pedestrian side gate between the estates. Where you and Claude used to cross lines under the Kent sunset.',
    targetAxis: 'axis4',
    unlockedStoryKr: '클로드는 9년 전 서둘러 떠나기 전날 밤, 랭글리의 폐허 곁 측문 징검다리에 이 열쇠와 비밀 약속에 관한 수갑 같은 약속을 두었다. 그가 남긴 감정이 아직 닳지 않았음을 증명한다.',
    unlockedStoryEn: 'On the night before his sudden exile, Claude left his favorite pocket watch key on this exact fence. A testament that his loyalty never genuinely wavered, despite Richard’s cage.',
    discovered: false
  },
  {
    id: 'bromley_receipts',
    nameKr: '브롬리 낡은 셋방의 무기명 영수증',
    nameEn: 'Bromley Anonymity Vouchers',
    foundAt: 'ashby_flat',
    inspectTextKr: '런던 남부 브롬리의 허름한 공동 주택 임대 명세서 더미. 2016년부터 수취인은 "S. L."(Sebastian Langley) 이지만, 기부자이자 요금 지불인은 무기명 헤론 신용 위탁 은행 계정이다.',
    inspectTextEn: 'A folder of rent receipts for the Bromley address, marked "Tenant: S. L." (Sebastian Langley). Funded by a blind trust account under the Heron Group.',
    targetAxis: 'axis1',
    unlockedStoryKr: '지불 계정의 추적 번호는 다름 아닌 Claude 가의 사위 연동 연금이었다! 클로드 역시 아버지를 격리해 리차드로부터 보호하기 위해 매달 자금을 은밀히 우회 송금했음이 드러난다.',
    unlockedStoryEn: 'The originating wire route points to a blind offshore account controlled by Claude! He has been keeping Sebastian alive and safe from Richard’s reach for nine cold years.',
    discovered: false
  }
];

export const NARRATIVE_AXES: NarrativeAxis[] = [
  {
    id: 'axis1',
    titleKr: 'Sebastian의 행방 추적',
    titleEn: 'Tracking Sebastian Langley',
    descKr: '실종된 아버지를 찾아내는 것. 케네스가 단서의 입구를 알지만 리차드의 무소음 추격조가 이를 교란하며, 클로드는 안전을 이유로 그것을 함구한다.',
    descEn: 'Finding the missing patriarch. Kenneth holds the physical coordinates, Richard commands the surveillance, and Claude enforces isolation for security.',
    tensionLabelKr: '추적 긴장 지수',
    tensionLabelEn: 'Search Friction',
    currentStrength: 15
  },
  {
    id: 'axis2',
    titleKr: 'Langley 명예와 이름의 재건',
    titleEn: 'Langley Reclamation',
    descKr: '헤론 가문에 헐값으로 양도된 랭글리의 재정과 자산 권리, 문장의 명예를 회수하고 무력한 노동 계급에서 한걸음 올라서 법적 분쟁을 승리로 선언한다.',
    descEn: 'Recovering the stolen assets, patent deeds, and core family title. Reversing the 2016 bankruptcy via legal action and debt structural audits.',
    tensionLabelKr: '재건 투쟁율',
    tensionLabelEn: 'Reclamation Progress',
    currentStrength: 10
  },
  {
    id: 'axis3',
    titleKr: '2014 & 2016 비극의 진실 규명',
    titleEn: 'The Silent Truth (2014-2016)',
    descKr: '어머니 Iris의 의문의 참사와 Eleanor 가에 가해진 의혹들의 고리를 증명해 낸다. 직접적인 서사가 없는 행간의 의심을 벼리고 분노의 화살을 겨눈다.',
    descEn: 'Investigating Iris’s crash and Eleanor’s isolated demise. Proving Richard’s meticulous complicity before the clock of limitations runs out.',
    tensionLabelKr: '의혹 증명도',
    tensionLabelEn: 'Hostility Index',
    currentStrength: 20
  },
  {
    id: 'axis4',
    titleKr: '정략 결혼의 시한과 비밀 약속',
    titleEn: 'The Horizon of Engagement',
    descKr: '클로드의 내결정된 다른 귀족 가문과의 정략 약혼 시한이 다가온다. 그를 수장 밑으로 무릎 꿇릴 것인지, 아니면 두 가문의 봉인된 고리를 끊고 무너뜨릴 것인가.',
    descEn: 'Claude’s arranged marriage deadline looms. Accept for protection at the expense of betrayal, or shatter the compact to burn both dynasties down.',
    tensionLabelKr: '약혼 파기 임계치',
    tensionLabelEn: 'Divorce Impending Threshold',
    currentStrength: 8
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 'tl_2008',
    date: '2008.11.03',
    titleKr: 'Eleanor Heron 가주 병사',
    titleEn: 'Passing of Eleanor Heron',
    descKr: '클로드의 친어머니 별세. 가문의 피아노 갤러리가 굳게 잠겼으며, 남편 Richard는 장례식 당일 업무에 조용히 선을 긋고 정상 출근했다. 당시 Claude는 아홉 살.',
    descEn: 'Claude’s mother passes away after severe systemic isolation. The grand music wing of the Mansion is padlocked. Richard returned to his desk on the same afternoon.',
    detailKr: '장례식 내내 클로드는 울지 않고 아버지를 응시했다고 한다. 자리가 비워진 Eleanor의 피아노와 시집, 은반지 등은 서관 깊숙이 버려졌다.',
    detailEn: 'Attendants reported the nine-year-old Claude stood dry-eyed, watching his father with an unsettling intensity. Eleanor’s silver belongings were cataloged and shuttered.',
    family: 'Heron',
    type: 'loss'
  },
  {
    id: 'tl_2010',
    date: '2010.03.11',
    titleKr: 'Heron - Langley 교류 긴밀화',
    titleEn: 'Heron - Langley Alliance',
    descKr: '세븐오크스 켄트의 돌담 측문이 상시 개방되었다. 가문 간 전례 없는 밀월이 진행되며 두 가주의 사적인 왕래와 랭글리 외동아이(유저)의 헤론 가 출입 개시.',
    descEn: 'The pedestrian gate between the Kent estates is unlocked for daily visitation. A golden decade of joint ventures, private hunts, and tea in the rose garden.',
    detailKr: '클로드는 차갑고 엄숙한 저택에서 숨통이 되어 주는 유일한 상대를 돌담 곁에서 발견했다. 이 시기 둘 사이의 비밀 신호(만년필 낙서, 책 전달)가 조용히 자리 잡았다.',
    detailEn: 'In a house governed by frozen statues, the young Claude found a singular living presence across the stone wall. They exchanged secret maps and volumes of romantic poetry.',
    family: 'Both',
    type: 'key'
  },
  {
    id: 'tl_2013',
    date: '2013.12.25',
    titleKr: '밀착의 겨울 절정기',
    titleEn: 'The Peak of Kent Evenings',
    descKr: '두 가문의 자택 서재, 온실, 켄트의 모든 오솔길은 경계 없이 통행이 하락됐다. 어떤 고통이나 그림자도 자본의 장벽 안에 가려졌던 아름다운 환희의 시절.',
    descEn: 'No barriers. Shared libraries, joint bank accounts, and midnight strolls across the Kent border. A false era of security where wealth acted as a protective dome.',
    detailKr: '어린 날 클로드는 낡은 펜던트에 "Till Silence Ends" 를 낙서했지만, 아버지는 사냥용 개를 고를 때와 아주 똑같은 무서운 미소로 랭글리 가를 관조하고 있었다.',
    detailEn: 'Claude engraved a brass pocketwatch for you, unaware that Richard was tracking Sebastian’s secret leverage accounts with the exact calculations of an executioner.',
    family: 'Both',
    type: 'normal'
  },
  {
    id: 'tl_2014',
    date: '2014.04.17',
    titleKr: 'Iris Langley 돌연사',
    titleEn: 'Fatal Crash of Iris Langley',
    descKr: '유저의 생모이자 랭글리가의 어머니인 Iris가 세븐오크스 근방 브레이크 오작동 차량 사고로 실명. 사고 직후, 그들의 미소 아래 잔인한 금융 마찰 조항이 표면 위로 드러남.',
    descEn: 'Your mother dies instantly in a high-speed vehicle control failure. In the days following, the warm hospitality of the Herons transforms into severe legal notices.',
    detailKr: '아이리스는 리차드가 가짜 법인을 세워 랭글리 자산을 착취하는 영수증을 폭로하려 준비 중이었다. 이 급작스러운 참사로 랭글리 가문은 방어 동력을 영구 상실했다.',
    detailEn: 'Iris had compiled a file showing Richard’s shadow holding companies routing equity away from Langley. Her sudden engine failure paralyzed Langley’s primary legal defense.',
    family: 'Langley',
    type: 'loss'
  },
  {
    id: 'tl_2016_jan',
    date: '2016.01.09',
    titleKr: 'Langley 가문 공식 파산',
    titleEn: 'Formal Ruin of House Langley',
    descKr: '새해가 열린 직후 켄트 저택, 사용인들, 가산 등 모든 명예 자산 몰수 집행. 헤론 타워의 금융 추적에 무차별 노출되며 유저는 하류 노동계 전락.',
    descEn: 'The Langley estate is repossessed overnight. The family shield is stripped, leaving Kenneth as the only loyal guardian to hold the remaining crates free of charge.',
    detailKr: '리차드는 이 모든 헐값 몰수의 뒤편에서 서류철을 통제하고 신흥 왕조의 승리를 자축했다. 이 시기, 세븐오크스의 모든 정원은 무참히 흙투성이가 된 채 출입이 차단되었다.',
    detailEn: 'Richard formalized the asset seizure in Heron Tower, sealing the transaction while you and Kenneth packed what was left into old leather suitcases.',
    family: 'Langley',
    type: 'loss'
  },
  {
    id: 'tl_2016_sep',
    date: '2016.09.22',
    titleKr: 'Sebastian Langley 증발',
    titleEn: 'Vanishing of Sebastian',
    descKr: '가을의 초입. 어떠한 흔적과 설명도 랭글리가의 가주이자 아버지는 종적을 감췄다. 그가 남긴 셋집 방고리와 굳게 잠긴 철제 금 상자만이 세상에 버려졌다.',
    descEn: 'Sebastian disappears without a single letter. He exits his makeshift flat in Bromley, pursued silently by debt collection agencies hired by Richard.',
    detailKr: '케네스는 무언가를 눈치채고 있었으나 온전히 슬픔을 혼자 머금으며 랭글리 아가씨(도련님)의 안위를 외곬으로 돌보기 시작했다.',
    detailEn: 'Kenneth remained tight-lipped but immediately arranged for you to move to the safer, less conspicuous streets of the East End, sheltering you with Owen.',
    family: 'Langley',
    type: 'loss'
  },
  {
    id: 'tl_2017',
    date: '2017.08.31',
    titleKr: 'Claude, 정적 속의 9년 작별',
    titleEn: 'Claude\'s Unannounced Exile',
    descKr: '여름의 마지막 날 밤. 어떠한 작별 인사나 수긍할 수 있는 말마디조차 남기지 않은 채, 클로드는 돌연 런던을 영구히 출국했다. 긴 9년의 침묵 터널의 발단.',
    descEn: 'On the final night of summer, Claude vanishes from Sevenoaks. No goodbye, no address, starting a terrifying nine-year silence that crippled your remaining trust.',
    detailKr: '그는 마지막으로 돌벽 틈에 "나를 전적으로 미워하라, 진실이 목에 올 때까지" 라는 서신만을 두고 떠났다. 이후 아버지가 기획한 연금 신용 계좌에 은폐된 행방만이 이어졌다.',
    detailEn: 'His final untraceable note read: "Hate me fully, until the truth reaches your throat." Underneath he laid the key to the iron gate, buried under Kent wet dirt.',
    family: 'Both',
    type: 'key'
  },
  {
    id: 'tl_2018',
    date: '2018.03.20',
    titleKr: 'Julian 사생아 공식 입적',
    titleEn: 'Julian Integrated into the Lineage',
    descKr: '전혀 헤론가의 적통이 부재하고 흔들릴 법한 시기, 리차드의 또 다른 혼외자 Julian이 맹렬하게 대저택의 문명과 호적을 정식 계승하고 이사회에 조명받았다.',
    descEn: 'Julian, the illegitimate fox-eyed outsider, is officially entered into the Heron family registry, stepping into the vacant social galleries Claude left behind.',
    detailKr: '줄리안은 자신의 출신을 결코 잊지 않고 오히려 사교계를 비틀어 비웃기 위해 화려한 비상임 이사 겉자락을 수긍하며 어두운 구멍을 쪼아 보기 시작했다.',
    detailEn: 'Julian took the title with a sneer, weaponizing his new status to toy with the aristocracy while secretly mapping the rot in Richard’s finances.',
    family: 'Heron',
    type: 'normal'
  },
  {
    id: 'tl_2026',
    date: '2026.현재',
    titleKr: 'Claude 귀환 · 헤론 수장 취임',
    titleEn: 'Claude Returns as MD',
    descKr: '말없이 떠났던 클로드가 싸늘한 금발과 한층 거대해진 목소리로 귀환, 메이페어와 시티 오브 런던의 은행권을 접수했다. 잠잠했던 추수기가 요동치는 지동선.',
    descEn: 'Claude returns. The nine-year gap is breached. Armed with immense banking backing, he occupies the MD office of Heron Tower, setting off ancient seismic tremors.',
    detailKr: '그의 눈빛은 오래된 동부의 여든 살 먹은 빌라를 구하려는 구원자처럼 차갑고도 절망적이게 불탄다. 당신과의 지독한 숨바꼭질이 다시 불붙기 바란다.',
    detailEn: 'His eyes are unchanged—deep, freezing lakes harbor a desperate resolve to finish the cold war he entered nine years ago. The stage is set.',
    family: 'Both',
    type: 'key'
  }
];
