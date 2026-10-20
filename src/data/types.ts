export type Season = 'crowds' | 'insight' | 'both';
export type SourceType = 'official' | 'official-press' | 'encyclopedia' | 'database' | 'community';
export type VerificationStatus = 'confirmed' | 'secondary' | 'inferred' | 'unknown';
export interface Source { id: string; name: string; url: string; type: SourceType; language: string; status: 'read' | 'partial' | 'blocked' | 'unavailable'; note: string; accessed: string }
export interface Fact { label: string; value: string; sourceUrl: string; sourceName: string; sourceType: SourceType; verificationStatus: VerificationStatus; season: Season; alternatives?: { value: string; sourceUrl: string; sourceName: string; note: string }[]; note?: string; spoiler?: boolean; relatedCharacterIds?: string[] }
export interface CharacterImage { src: string; label: string; kind: 'portrait' | 'g-suit' | 'setting' | 'still'; season: Season; sourceUrl: string; credit: string; available: boolean }
export interface Character { id: string; name: string; japanese: string; english: string; aliases: string[]; group: 'GATCHAMAN' | 'GALAX' | 'ALIEN' | 'CIVILIAN'; seasons: Season[]; color: string; number: string; priority?: boolean; summary: string; facts: Fact[]; appearance: Fact[]; abilities: Fact[]; relationships: Fact[]; evolution: Fact[]; episodes: Fact[]; images: CharacterImage[]; sourceIds: string[]; missing: string[] }
