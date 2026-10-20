import { create } from 'zustand'

interface ArchiveState {
  characterId: string
  selectCharacter: (id: string) => void
  reducedMotion: boolean
  setReducedMotion: (value: boolean) => void
}
export const useArchive = create<ArchiveState>((set) => ({
  characterId: 'utsutsu',
  selectCharacter: (id) => set({ characterId: id }),
  reducedMotion: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  setReducedMotion: (value) => set({ reducedMotion: value }),
}))
