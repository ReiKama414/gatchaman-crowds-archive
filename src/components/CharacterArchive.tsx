import { useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import { SwipeCarousel } from './SwipeCarousel'
import { characters } from '../data/characters'
import { getCharacterAssets } from '../data/assets'
import type { ArchiveAsset } from '../data/assets'
import { publicFacts } from '../data/presentation'
import type { Fact } from '../data/types'
import { useArchive } from '../store'
import { Artwork, FactList } from './ArchiveUI'

const tabs = [['profile', '基本資料'], ['appearance', '外觀／服裝'], ['abilities', 'NOTE／能力'], ['relationships', '人際關係'], ['evolution', '雙季變化'], ['episodes', '登場紀錄']]
const normalize = (name: string) => name.normalize('NFKD').replace(/[\u0300-\u036f\s・·._-]/g, '').toLowerCase()
export function CharacterArchive({ onOpen }: { onOpen: (a: ArchiveAsset) => void }) {
  const { characterId, selectCharacter } = useArchive()
  const [query, setQuery] = useState(''), [season, setSeason] = useState('both'), [tab, setTab] = useState('profile')
  const [outfit, setOutfit] = useState('character'), [imageSeason, setImageSeason] = useState(2), [original, setOriginal] = useState(true)
  const selected = characters.find((c) => c.id === characterId) ?? characters[0]
  const filtered = characters.filter((c) => (season === 'both' || c.seasons.includes('both') || c.seasons.includes(season as 'crowds' | 'insight')) && [c.name, c.japanese, c.english, ...c.aliases].some((name) => normalize(name).includes(normalize(query))))
  const images = getCharacterAssets(selected.id)
  const seasons = [...new Set(images.map((a) => a.season))]
  const visibleSeason = seasons.includes(imageSeason as 1 | 2) ? imageSeason : seasons[0]
  const baseOptions = selected.id === 'gelsadra' ? [['character', '少年形態'], ['adult-form', '青年形態'], ['design', '本來形態']] : [['character', '日常造型'], ['g-suit', 'G-SUIT']]
  const options = baseOptions.filter(([id]) => images.some((a) => a.season === visibleSeason && a.kind === id))
  const visibleOutfit = options.some(([id]) => id === outfit) ? outfit : options[0]?.[0]
  const asset = images.filter((a) => a.kind === visibleOutfit && a.season === visibleSeason && (!original || !a.provenance)).sort((a, b) => ((b.provenance ? 1e9 : 0) + (b.layout === 'profile-sheet' ? 1e7 : 0) + b.dimensions.width * b.dimensions.height) - ((a.provenance ? 1e9 : 0) + (a.layout === 'profile-sheet' ? 1e7 : 0) + a.dimensions.width * a.dimensions.height))[0]
  const factsFor = (id: string) => publicFacts((id === 'profile' ? selected.facts : selected[id as 'appearance' | 'abilities' | 'relationships' | 'evolution' | 'episodes']) as Fact[])
  const availableTabs = tabs.filter(([id]) => factsFor(id).length)
  const activeTab = availableTabs.some(([id]) => id === tab) ? tab : availableTabs[0]?.[0] ?? 'profile'

  function change(id: string) { selectCharacter(id); setTab('profile'); setOutfit('character'); setOriginal(true) }

  return <>
    <div className="crew-tools"><label className="search"><Search size={17} /><input type="search" value={query} onChange={(e) => { setQuery(e.target.value) }} placeholder="搜尋中文、日文、英文與別名" aria-label="搜尋角色" /><kbd>/</kbd></label><div className="segmented" role="group" aria-label="角色季別">{[['both', 'ALL'], ['crowds', 'S01'], ['insight', 'S02']].map(([id, label]) => <button key={id} aria-pressed={season === id} onClick={() => { setSeason(id) }}>{label}</button>)}</div><span className="crew-count">{filtered.length} RECORDS</span></div>
    <SwipeCarousel key={`${query}-${season}`} label="角色輪播" className="crew-carousel" maxColumns={6} minWidth={130} items={filtered.map((c) => <button className="roster-card" key={c.id} aria-pressed={selected.id === c.id} style={{ '--character-color': c.color } as CSSProperties} onClick={() => change(c.id)}><span className="roster-number">{c.number !== '—' ? c.number : c.group}</span><strong>{c.name}</strong><small>{c.japanese}</small><span className="roster-english">{c.english}</span><ArrowUpRight size={15} /></button>)} />
    {!filtered.length && <p className="empty-state">沒有符合的角色。試試「宮うつつ」、「Utsu-tsu」或「宮現」。</p>}
    <div className={`character-detail ${!asset ? 'no-visual' : ''}`} style={{ '--character-color': selected.color } as CSSProperties}>
      {asset && <div className="character-art"><div className="art-label"><span>{selected.number !== '—' ? `${selected.number} / ` : ''}{asset.provenance ? 'RECREATED VISUAL' : 'OFFICIAL RECORD'}</span></div><Artwork asset={asset} onOpen={onOpen} /><div className="outfit-tools"><div className="segmented">{seasons.map((s) => <button key={s} onClick={() => setImageSeason(s)} aria-pressed={s === visibleSeason}>S0{s}</button>)}</div><div className="segmented">{options.map(([id, label]) => <button key={id} aria-pressed={id === visibleOutfit} onClick={() => setOutfit(id)}>{label}</button>)}</div></div>{images.some((a) => a.provenance && a.kind === visibleOutfit && a.season === visibleSeason) && <div className="segmented visual-version"><button aria-pressed={original} onClick={() => setOriginal(true)}>官方原圖</button><button aria-pressed={!original} onClick={() => setOriginal(false)}>重繪 v2</button></div>}<p className="art-note">{asset.provenance ? '重繪展示立繪；原圖與參考來源均保留。' : '完整原始資料圖。點選可放大檢視。'}</p></div>}
      <div className="character-info"><div className="character-title"><span className="eyebrow">{selected.group}{selected.number !== '—' ? ` / ${selected.number}` : ''}</span><h3>{selected.name}</h3><p className="character-ja">{selected.japanese}</p><span className="character-en">{selected.english}</span></div><p className="character-summary">{selected.summary}</p>{selected.aliases.length > 0 && <div className="aliases"><span>ALIASES</span>{selected.aliases.join(' / ')}</div>}<div className="detail-tabs" role="tablist" aria-label="角色資料分類">{availableTabs.map(([id, label]) => <button role="tab" aria-selected={activeTab === id} aria-controls="character-tabpanel" id={`tab-${id}`} key={id} onClick={() => setTab(id)}>{label}</button>)}</div><div role="tabpanel" id="character-tabpanel" aria-labelledby={`tab-${activeTab}`}><FactList facts={factsFor(activeTab)} /></div></div>
    </div>
  </>
}
