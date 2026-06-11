export interface Character {
  id: string;
  name: string;
  roleKr: string;
  roleEn: string;
  symbol: string;
  tier: string;
  age: number;
  appearance: string[];
  descKr: string;
  descEn: string;
  quoteKr: string;
  quoteEn: string;
  frequentLocationsKr: string[];
  frequentLocationsEn: string[];
  personalityKr: string;
  personalityEn: string;
  speechToneKr: string; // 캐릭터말투
  speechToneEn: string;
  relationNotes: { [targetId: string]: string }; // relational text (Kr)
  relationNotesEn: { [targetId: string]: string }; // relational text (En)
  accentColor: string;
  avatarBg: string;
  image?: string;
}

export interface LocationInfo {
  id: string;
  nameKr: string;
  nameEn: string;
  addrKr: string;
  addrEn: string;
  descKr: string;
  descEn: string;
  visitors: string[]; // Character IDs
  icon: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  titleKr: string;
  titleEn: string;
  descKr: string;
  descEn: string;
  detailKr: string;
  detailEn: string;
  family: 'Heron' | 'Langley' | 'Both' | 'Other';
  type: 'key' | 'loss' | 'normal';
}

export interface Npc {
  id: string;
  name: string;
  statusKr: string;
  statusEn: string;
  descKr: string;
  descEn: string;
  symbol: string;
}


