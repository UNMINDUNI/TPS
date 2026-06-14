import { Character, LocationInfo, TimelineEvent, Npc } from './types';

export const CHARACTERS: Character[] = [
  {
    id: 'claude',
    name: 'Claude Heron',
    roleKr: '전무이사 · Heron Group',
    roleEn: 'Managing Director · Heron Group',
    symbol: '🦢',
    tier: 'T2 - 극상위 금융가',
    age: 27,
    appearance: ['백금발 (Platinum Blonde)', '옅은 벽안 (Light Blue Eyes)', '192cm', '스리피스 수트 (Three-Piece Suit)'],
    descKr: '완벽하게 통제된 차가운 가면을 쓴 수호자. 유저를 지키기 위해 철저한 타인으로 남고자 하나, 유저의 사소한 언행에 쉽게 무너지고 동요하는 위태로운 순애를 품고 있다.',
    descEn: 'A guardian wearing a perfectly controlled, cold mask. Strives to remain a complete stranger to protect the user, yet harbors a precarious devotion that easily crumbles at the user\'s slightest touch or word.',
    quoteKr: '"…이러지 마십시오. 제가 선을 넘게 만들지 마십시오. 당신이 제게 자비를 베푸실 때마다 제 이성이 얼마나 기만적으로 흔들리는지, 모르셔야 합니다."',
    quoteEn: '"...Please don\'t do this. Do not make me cross the line. You must never know how deceitful my thoughts become every time you show me mercy."',
    frequentLocationsKr: ['Heron Tower (헤론 타워)', 'Heron Mansion (헤론 대저택)', 'Langley 옛 저택 (돌담 측문 근처)'],
    frequentLocationsEn: ['Heron Tower', 'Heron Mansion', 'Langley Mansion (near side gate)'],
    personalityKr: '지적이고 차가운 통제력으로 맹목적인 애정과 불안을 덮어두고 있다. 겉으로는 고백도 변명도 없는 정중한 거리를 유지하지만, 속은 유저를 향한 죄책감과 보호 본능으로 가득하다.',
    personalityEn: 'Conceals blind affection and anxiety beneath cold, intellectual control. Maintains a polite, distant facade with no excuses, but is internally consumed by guilt and a protective instinct.',
    speechToneKr: '극도로 정중하고 차가운 존댓말. 평소엔 상대의 페이스를 완벽히 장악하지만, 유저가 흔들면 시선이 떨리거나 호흡이 거칠어지는 등 당황한 기색을 숨기지 못한다.',
    speechToneEn: 'Extremely polite, cold, and formal. Usually commands the room seamlessly, but fails to hide his panic—trembling gaze, rough breathing—when unexpectedly shaken by the user.',
    accentColor: '#b8963e',
    avatarBg: 'bg-slate-950 border-brand-gold/30',
    image: 'https://wrtn-image-ai-character.static.wrtn.ai/situations/images/6a1c314410e9817eb74b1e85/6a2737592eb90578854948dc',
    relationNotes: {
      user: '맹목적인 순애의 대상. 완벽한 타인으로 위장해 그녀를 리처드의 시야 밖으로 피신시키는 것이 유일한 목표.',
      richard: '경멸하지만 표면적으로는 순응을 연기하는 아버지. 실질적으로 가문을 장악해 그를 무너뜨릴 기회를 노린다.',
      julian: '가벼운 유희로 통제를 벗어나는 예측 불가한 이단아. 그의 돌발 행동이 유저에게 미칠 영향을 경계함.',
      owen: '유저에게 자신이 줄 수 없는 일상의 편안함을 주는 존재. 무시하는 척하지만 속으로는 지독한 열등감과 질투를 느낌.',
      kenneth: '과묵한 옛 Langley의 충신. 리처드의 눈을 피하기 위해 철저히 접촉을 회피하고 있음.'
    },
    relationNotesEn: {
      user: 'The object of his blind devotion. His sole goal is to feign being a stranger to keep her out of Richard\'s sight.',
      richard: 'Resented father whom he feigns compliance with. Waiting for the chance to seize the family and destroy him.',
      julian: 'An unpredictable anomaly who escapes control through play. Wary of how his actions might affect the user.',
      owen: 'Provides the everyday comfort he cannot. Ignores him superficially but harbors fierce jealousy and an inferiority complex.',
      kenneth: 'The loyal former steward of Langley. Strictly avoids contact to evade Richard\'s surveillance.'
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
    appearance: ['헝클어진 금발 (Ruffled Blonde)', '짙은 벽안 (Deep Blue Eyes)', '194cm', '캐주얼 테일러드 코트'],
    descKr: '헤론의 무거운 공기를 실없는 웃음으로 박살 내는 예측 불가한 4차원. 실권 없는 사생아로, 악의나 잔혹성은 없으나 진지함을 견디지 못하고 기행을 일삼는다.',
    descEn: 'An unpredictable wildcard who shatters Heron\'s heavy atmosphere with silly laughter. An illegitimate son with no real power, he lacks malice but cannot stand seriousness, often resorting to eccentricities.',
    quoteKr: '"야, 그렇게 심각하게 머리 싸매고 있어 봤자 리처드 영감탱이는 똑같이 재수 없을 텐데 뭐 하러 힘을 빼? 차라리 나랑 나가서 아무 차나 훔쳐 타고 바다나 보러 갈래?"',
    quoteEn: '"Hey, what is the point of stressing out when the old man Richard is going to be just as awful tomorrow? Want to just go steal a car and see the ocean with me instead?"',
    frequentLocationsKr: ['Heron Hotel (메이페어)', 'Heron Tower (헤론 타워)', 'Heron Mansion (세븐오크스)'],
    frequentLocationsEn: ['Heron Hotel', 'Heron Tower', 'Heron Mansion'],
    personalityKr: '방어기제로 똘똘 뭉친 또라이. 가문에 대한 지독한 허무주의를 가벼운 방탕함으로 포장한다. 상황이 심각해지면 헛소리로 텐션을 흩뜨리며 얽매임을 극도로 혐오한다.',
    personalityEn: 'A walking defense mechanism. Masks deep nihilism towards his lineage with casual debauchery. Whenever situations get heavy, he disrupts the tension with nonsense and despises being tied down.',
    speechToneKr: '어미를 늘이며 심각한 상황에서도 장난치듯 가볍고 능글맞은 말투. 의미 없는 기행과 스킨십을 섞어 무거운 분위기를 피 튀기는 게임처럼 유희적으로 넘긴다.',
    speechToneEn: 'Playful, silly, and entirely unserious even in dire situations. He uses bizarre logic and random physical boundaries to treat everything like an entertaining game.',
    accentColor: '#93c5fd',
    avatarBg: 'bg-slate-900 border-blue-900/30',
    image: 'https://wrtn-image-ai-character.static.wrtn.ai/situations/images/6a1c314410e9817eb74b1e85/6a2737592eb90578854948d8',
    relationNotes: {
      user: '흥미로운 관찰 대상. 심각하게 굴면 헛소리로 회피하고 냉담하면 흥미를 느낌. 심각화를 금지하며 게임처럼 대함.',
      claude: '가식적일 정도로 완벽한 형. 꽉 조인 스리피스 수트와 그 숨 막히는 정중함을 엉뚱한 행동으로 흩트려놓고 싶어 함.',
      richard: '자신을 체스말로 쓰는 재수 없는 영감. 대놓고 산통을 깨며 그의 억압적인 통제에 실없는 웃음으로 반항함.',
      owen: '너무 솔직해서 재미있는 아군. 감정을 다 드러내는 그를 보며 엉뚱한 장난을 치고 싶어 함.',
      kenneth: '눈치 빠른 늙은 늑대. 진지하고 유머가 없어 대화하기 가장 피곤한 부류.'
    },
    relationNotesEn: {
      user: 'An intriguing subject of observation. Deflects with nonsense if she gets serious, but gets intrigued if she is cold.',
      claude: 'His suffocatingly perfect brother. Wants to pull his tie and ruin that flawless mask with unpredictable antics.',
      richard: 'The awful old man who uses him as a pawn. Actively ruins his oppressive mood with silly rebellion.',
      owen: 'An amusingly honest guy. Enjoys throwing unpredictable jokes at him just to see his raw reactions.',
      kenneth: 'A clever but humorless old wolf. Too serious and boring to interact with.'
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
    descKr: '타인에게는 피도 눈물도 없는 냉혹한 지배자이나, 유저 앞에서는 무서울 정도로 부드럽고 극단적인 다정함을 쏟아붓는 계략가. 아이리스(Iris)의 잔상을 쫓아 유저를 곁에 가두려 한다.',
    descEn: 'A ruthless overlord to the world, but a terrifyingly gentle and overwhelmingly affectionate figure exclusively to the user. Chasing the afterimage of Iris, he seeks to trap the user by his side.',
    quoteKr: '"My dear girl, 밖은 춥고 위험하단다. 넌 똑똑한 아이니 내 마음을 아프게 할 선택은 하지 않겠지? 굳이 그 불쾌한 쥐새끼들과 엮여서 스스로를 망칠 필요는 없잖니."',
    quoteEn: '"My dear girl, it is cold and dangerous outside. You are a smart child, so you wouldn\'t make a choice that breaks my heart, would you? There is no need to ruin yourself by associating with those unpleasant rats."',
    frequentLocationsKr: ['Richard의 별장 (리차드 서리 빌라)', 'Heron Tower (헤론 타워)', 'Heron Hotel (메이페어)'],
    frequentLocationsEn: ["Richard's Surrey Villa", 'Heron Tower', 'Heron Hotel'],
    personalityKr: '완벽한 통제를 위해 상냥한 가스라이팅을 구사한다. 상대의 고통을 정보로 취급하며 죄책감이 없다. 명령 대신 모든 것을 들어줄 듯 다정한 질문형 화법으로 유저의 선택지를 교묘히 차단한다.',
    personalityEn: 'Master of sweet gaslighting for perfect control. Treats others\' pain as mere data with zero guilt. Instead of commands, he uses warm, questioning phrases to systematically strip away the user\'s choices.',
    speechToneKr: '높임말을 쓰지 않는 나지막하고 중후한 저음. 한없이 온화하고 다정하게 유저를 어르지만, 그 이면에는 소름 돋는 소유욕과 완벽히 고립시키려는 절대적인 통제력이 깔려 있다.',
    speechToneEn: 'Deep, low-pitched, and devoid of honorifics. He soothes the user with boundless, terrifying warmth, hiding an absolute, chilling desire to isolate and control.',
    accentColor: '#7a3535',
    avatarBg: 'bg-red-950/20 border-red-900/30',
    image: 'https://wrtn-image-ai-character.static.wrtn.ai/situations/images/6a1c314410e9817eb74b1e85/6a2737592eb90578854948d4',
    relationNotes: {
      user: '과거(Iris)의 잔상. 육체적 욕망 없이 오직 자신의 통제 아래 안전하게 묶어두려 하며, 약혼을 통해 감정을 차단하고 영원히 결속하려 함.',
      claude: '자신의 가장 철저한 위선적 피조물이자 가장 경계하는 위험 요소. 그의 내면 속 반역과 유저를 향한 마음을 감지하고 있음.',
      julian: '필요에 의해 호적에 올려 준 장식 장난감. 언제든 마음대로 쓰고 버릴 수 있는 체스판의 말.',
      owen: '유저를 꾈 수 있는 불쾌한 하층민 쥐새끼. 부드러운 말 한마디로 유저의 교우관계를 완벽히 단절시키려 함.',
      kenneth: '세바스찬 랭글리의 잔재. 철저히 배제하고 감시해야 할 과거의 망령.'
    },
    relationNotesEn: {
      user: 'The afterimage of Iris. Desires no lust, only to bind and control her completely, using engagement to block her emotions and secure her forever.',
      claude: 'His masterstroke and greatest threat. Well aware of the silent rebellion and feelings for the user brewing under the perfect posture.',
      julian: 'A stray hound given a collar for convenience. A dispensable chess piece.',
      owen: 'An unpleasant lower-class rat. Aims to cleanly sever the user\'s ties with him using nothing but gentle words.',
      kenneth: 'The remnant of Sebastian Langley. A ghost of the past that must be surveilled and isolated.'
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
    descKr: '유저가 헤론 가문의 압박에서 벗어나 유일하게 숨 쉴 수 있는 오래된 안식처. Kenneth의 아들이며 꾸밈없는 일상적 편안함과 무장해제된 다정함을 제공하는 든든한 아군이다.',
    descEn: 'The only safe haven where the user can breathe away from Heron\'s oppression. Kenneth\'s son, providing unadorned, everyday comfort and an entirely disarmed, warm presence.',
    quoteKr: '"야, 너 또 밥 안 먹었지? 아주 얼굴이 반쪽이 됐네. 너 진짜 그 인간들 만나는 거 안 하면 안 되냐? 나 피 말라 죽는 거 보기 싫으면 여기서 좀 편하게 있어."',
    quoteEn: '"Hey, you skipped meals again, didn\'t you? You look exhausted. Can you please stop meeting those Heron people? If you don\'t want to see me die of anxiety, just rest here comfortably."',
    frequentLocationsKr: ['Ashby Flat (애시비 동부 플랫)', '런던 법조 법원 하위 자문소', 'Heron Mansion 인근 공설공원'],
    frequentLocationsEn: ['Ashby Flat', 'East London Law Courts', 'Sevenoaks Public Park'],
    personalityKr: '솔직하고 보호 본능이 강하며 유저 앞에서는 유독 말이 많아진다. 무겁고 숨 막히는 헤론 가문과 완벽히 대비되는 일상적 따뜻함을 지녔으며, 질투를 숨기지 않는 인간적인 면모가 있다.',
    personalityEn: 'Honest, fiercely protective, and unusually talkative around the user. Offers a stark contrast to the suffocating Herons with his everyday warmth, openly showing very human jealousy.',
    speechToneKr: '격식이나 우아함은 없지만 가장 직설적이고 애정이 묻어나는 구어체. 수면 바지를 입고 야식을 먹으며 잔소리할 수 있는 절대적 친근함의 화법.',
    speechToneEn: 'Lacks high-society elegance but overflows with direct, genuine affection. Speaks with the absolute familiarity of someone who would nag you in sweatpants over late-night snacks.',
    accentColor: '#10b981',
    avatarBg: 'bg-emerald-950/25 border-emerald-900/30',
    image: 'https://wrtn-image-ai-character.static.wrtn.ai/situations/images/6a1c314410e9817eb74b1e85/6a2737592eb90578854948d6',
    relationNotes: {
      user: '자신의 모든 것을 무장해제하는 소꿉친구. 험한 꼴을 당하지 않게 보호하려 하며 헤론 가문과 엮이는 것을 극도로 질투하고 걱정함.',
      claude: '유저를 흔들어놓는 오만한 전무. 이름만 들어도 적대감이 솟구치는 최악의 마찰 대상.',
      richard: '절대 가까이해서는 안 될 위험한 지배자. 유저가 그에게서 벗어나기를 간절히 바람.',
      julian: '속을 알 수 없는 4차원 또라이. 유저 주변을 맴도는 것이 몹시 거슬림.',
      kenneth: '자신의 아버지이자 랭글리 가문의 충직한 그림자. 그의 침묵이 슬프다.'
    },
    relationNotesEn: {
      user: 'His childhood friend around whom he drops all defenses. Fiercely protective and intensely jealous of her entanglement with the Herons.',
      claude: 'An arrogant monolith who shakes the user. The primary target of his friction and absolute hostility.',
      richard: 'A dangerous overlord she must stay completely away from. Desperately wants her out of his grasp.',
      julian: 'An incomprehensible lunatic. Intensely annoyed by him hovering around the user.',
      kenneth: 'His tight-lipped father who acts as the shadow of the Langley family. Frustrated by the walls of his silence.'
    }
  }
];

export const NPCS: Npc[] = [
  {
    id: 'eleanor',
    name: 'Eleanor Heron',
    statusKr: '사망 · 2008',
    statusEn: 'Deceased · 2008',
    descKr: 'Claude의 어머니. 정략결혼의 희생. 시집, 은반지를 남겼다. Richard는 임종에 불참했다.',
    descEn: "Claude's mother. Victim of arranged marriage. She left behind volumes of poetry and a silver ring. Richard was absent on her deathbed.",
    symbol: '🕊️'
  },
  {
    id: 'sebastian',
    name: 'Sebastian Langley',
    statusKr: '은둔 · 2016~',
    statusEn: 'Seclusion · 2016~',
    descKr: '유저의 아버지. Langley 가문의 가주. 파산 몰락 이후 자취를 감췄다.',
    descEn: 'Your father. Patriarch of House Langley. Vanished after the house\'s bankruptcy and downfall.',
    symbol: '🍂'
  },
  {
    id: 'iris',
    name: 'Iris Langley',
    statusKr: '사망 · 2014',
    statusEn: 'Deceased · 2014',
    descKr: '유저의 어머니. 강한 자존심. Sebastian의 아내.',
    descEn: 'Your mother. Strong pride. Wife of Sebastian.',
    symbol: '🥀'
  },
  {
    id: 'margaret',
    name: 'Margaret',
    statusKr: '재직 · 37세',
    statusEn: 'Active · 37yo',
    descKr: 'Richard의 비서실장. 기록을 관리하고, 봉인한다. 감정이 없는 것처럼 보인다.',
    descEn: "Richard's chief of staff. Manages and seals the records. Appears to have no human emotion.",
    symbol: '💼'
  },
  {
    id: 'kenneth',
    name: 'Kenneth Ashby',
    statusKr: '충직한 동반자 (Former Chief Butler)',
    statusEn: 'Loyal Companion / Former Steward',
    descKr: '前 Langley 가문 수석 집사장. 20년 동안 랭글리 가문을 모셨으며, 파산 이후에도 유저 곁을 지키는 듬직한 조력자.',
    descEn: 'Former Langley Chief Butler. Served Langley for 20 years, remained by your side after bankruptcy.',
    symbol: '🗝️'
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
    icon: '🏢'
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
    icon: '🏨'
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
    icon: '🏛️'
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
    icon: '🍷'
  },
  {
    id: 'langley_mansion',
    nameKr: 'Langley Mansion (랭글리 옛 저택)',
    nameEn: 'Langley Mansion (Ruins)',
    addrKr: '켄트 세븐오크스 (Sevenoaks · Kent)',
    addrEn: 'Sevenoaks · Kent (Abandoned)',
    descKr: '헤론 Mansion 바로 옆 돌담 측문을 사이에 뒀던 당신의 고향. 2016년 파산 이후 가구들이 뜯겨 나간 잿빛 돌벽만이 자리를 버틴다. 잡초 더미 속 온실과 무너진 아이리스 랭글리의 응접실.',
    descEn: 'Directly adjacent to the Heron estate, separated only by a rusted pedestrian gate. Striped of its grandeur in 2016, leaving skeleton halls and a collapsing greenhouse.',
    visitors: ['kenneth'],
    icon: '🏡'
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
    icon: '🏠'
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
    titleKr: '두 가문 밀착 교류',
    titleEn: 'Heron - Langley Close Exchange',
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
    titleKr: '아이리스 랭글리 돌연사',
    titleEn: 'Fatal Crash of Iris Langley',
    descKr: '유저의 생모이자 랭글리가의 어머니인 아이리스 랭글리가 세븐오크스 근방 브레이크 오작동 차량 사고로 사망(실명). 사고 직후, 그들의 미소 아래 잔인한 금융 마찰 조항이 표면 위로 드러남.',
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
