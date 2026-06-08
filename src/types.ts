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
  secretKr: string;
  secretEn: string;
  quoteKr: string;
  quoteEn: string;
  relationNotes: { [targetId: string]: string }; // relational text (Kr)
  relationNotesEn: { [targetId: string]: string }; // relational text (En)
  accentColor: string;
  avatarBg: string;
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
  clueId?: string; // Clue that can be found here
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

export interface Clue {
  id: string;
  nameKr: string;
  nameEn: string;
  foundAt: string; // Location ID
  inspectTextKr: string;
  inspectTextEn: string;
  targetAxis: string; // ID of the Narrative Axis it helps
  unlockedStoryKr: string;
  unlockedStoryEn: string;
  discovered: boolean;
}

export interface NarrativeAxis {
  id: string;
  titleKr: string;
  titleEn: string;
  descKr: string;
  descEn: string;
  tensionLabelKr: string;
  tensionLabelEn: string;
  currentStrength: number; // 0 to 100
}
