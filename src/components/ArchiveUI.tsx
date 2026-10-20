import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, Maximize2, Minus, Plus, RotateCcw, X } from 'lucide-react'
import { characters } from '../data/characters'
import { archiveAssets } from '../data/assets'
import type { ArchiveAsset } from '../data/assets'
import type { Fact } from '../data/types'
import { useArchive } from '../store'
import { publicFacts, publishedText } from '../data/presentation'
import { AnimatedDetails } from './AnimatedDetails'
import { SwipeCarousel } from './SwipeCarousel'
import type { Source } from '../data/types'
import { publicUrl } from '../publicUrl'

const statusNames: Record<string, string> = { confirmed: '官方核實', secondary: '二手資料', inferred: '推定' }
export function FactList({ facts }: { facts: Fact[] }) {
  const visible = publicFacts(facts)
  if (!visible.length) return null
  return <div className="facts">{visible.map((fact, i) => <div className="fact" key={`${fact.label}-${i}`}>
    <div className="fact-top"><span>{fact.label}</span><span className={`fact-status status-${fact.verificationStatus}`}>{fact.verificationStatus === 'confirmed' && fact.sourceType !== 'official' && fact.sourceType !== 'official-press' ? '交叉核對' : statusNames[fact.verificationStatus] ?? fact.verificationStatus}{fact.season !== 'both' && ` · S${fact.season === 'crowds' ? '01' : '02'}`}</span></div>
    <p>{fact.value}</p>
    {fact.note && publishedText(fact.note) && <small>{publishedText(fact.note)}</small>}
    {fact.sourceUrl && <a className="source-link" href={fact.sourceUrl} target="_blank" rel="noreferrer">{fact.sourceName}<ArrowUpRight size={11} /></a>}
    {fact.alternatives?.map((alt, j) => <AnimatedDetails className="conflict" key={j} summary={<>來源差異 · {alt.sourceName}</>}><p>{alt.value}</p><small>{publishedText(alt.note)}</small><a className="source-link" href={alt.sourceUrl} target="_blank" rel="noreferrer">查閱另一來源<ArrowUpRight size={11} /></a></AnimatedDetails>)}
  </div>)}</div>
}

export function Artwork({ asset, className = '', onOpen }: { asset?: ArchiveAsset; className?: string; onOpen?: (asset: ArchiveAsset) => void }) {
  if (!asset) return null
  return <figure className={`artwork ${asset.layout} ${asset.transparent ? 'transparent-art' : ''} ${asset.provenance ? 'derived-art' : ''} ${className}`}>
    <button aria-label={`放大${asset.caption}`} onClick={() => onOpen?.(asset)} className="artwork-open" disabled={!onOpen}>
      <img src={publicUrl(asset.path)} alt={asset.caption} width={asset.dimensions.width} height={asset.dimensions.height} loading="lazy" decoding="async" />
      {onOpen && <span className="enlarge"><Maximize2 size={16} /></span>}
    </button>
    <figcaption><span>{asset.sourceName} · S0{asset.season}</span><a href={asset.sourcePage} target="_blank" rel="noreferrer" aria-label={`前往${asset.sourceName}`}><ArrowUpRight size={12} /></a></figcaption>
  </figure>
}

export function Lightbox({ asset, onClose, onChange, items }: { asset: ArchiveAsset | null; onClose: () => void; onChange: (a: ArchiveAsset) => void; items: ArchiveAsset[] }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!asset) return
    const previous = document.activeElement as HTMLElement | null
    const bodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    ref.current?.focus()
    const key = (e: KeyboardEvent) => {
      const idx = items.findIndex((a) => a.id === asset.id)
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && items.length > 1) onChange(items[(idx + 1) % items.length])
      if (e.key === 'ArrowLeft' && items.length > 1) onChange(items[(idx - 1 + items.length) % items.length])
      if (e.key === 'Tab') {
        const focusable = ref.current?.querySelectorAll<HTMLElement>('button:not(:disabled),a[href]')
        if (!focusable?.length) return
        const first = focusable[0], last = focusable[focusable.length - 1]
        if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { e.preventDefault(); last.focus() }
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', key)
    return () => { document.body.style.overflow = bodyOverflow; document.removeEventListener('keydown', key); previous?.focus() }
  }, [asset, items, onChange, onClose])
  if (!asset) return null
  const idx = items.findIndex((a) => a.id === asset.id)
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label={asset.caption} ref={ref} tabIndex={-1} data-lenis-prevent onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
    <header><span>{asset.provenance ? 'AI-ASSISTED VISUAL' : asset.kind === 'merch' ? 'LICENSED MERCHANDISE / RETAIL PHOTO' : 'OFFICIAL VISUAL'} / {String(idx + 1).padStart(2, '0')}</span><button onClick={onClose} aria-label="關閉圖片"><X /></button></header>
    <img src={publicUrl(asset.path)} alt={asset.caption} />
    <div className="lightbox-bottom"><div><p>{asset.caption}</p><small>{asset.dimensions.width} × {asset.dimensions.height} · {asset.rights}</small><a href={asset.sourcePage} target="_blank" rel="noreferrer">{asset.sourceName}<ArrowUpRight size={13} /></a></div><div className="lightbox-buttons"><button disabled={items.length < 2} onClick={() => onChange(items[(idx - 1 + items.length) % items.length])} aria-label="上一張"><ChevronLeft /></button><button disabled={items.length < 2} onClick={() => onChange(items[(idx + 1) % items.length])} aria-label="下一張"><ChevronRight /></button></div></div>
  </div>
}

export function RelationshipGraph() {
  const [season, setSeason] = useState('both')
  const [group, setGroup] = useState('ALL')
  const [active, setActive] = useState('utsutsu')
  const [view, setView] = useState({ x: 0, y: 0, scale: 1 })
  const drag = useRef<{ x: number; y: number; vx: number; vy: number; moved: boolean } | null>(null)
  const select = useArchive((s) => s.selectCharacter)
  const all = characters.filter((c) => (season === 'both' || c.seasons.includes('both') || c.seasons.includes(season as 'crowds' | 'insight')) && (group === 'ALL' || c.group === group))
  const coreIds = ['utsutsu', 'hajime', 'tsubasa', 'sugane', 'joe', 'od', 'paiman', 'rui', 'x', 'rizum', 'katze', 'gelsadra', 'jj']
  const nodes = all.map((c) => {
    const core = coreIds.includes(c.id)
    const ring = all.length > 18 ? all.filter((other) => coreIds.includes(other.id) === core) : all
    const angle = ring.indexOf(c) / ring.length * Math.PI * 2 - Math.PI / 2
    const inner = all.length > 18 && core
    return { ...c, x: 440 + Math.cos(angle) * (inner ? 205 : 340), y: 315 + Math.sin(angle) * (inner ? 165 : 255) }
  })
  const edges: { from: typeof nodes[number]; to: typeof nodes[number]; fact: Fact }[] = []
  for (const node of nodes) for (const fact of node.relationships) {
    const text = `${fact.label} ${fact.value}`.toLowerCase()
    const targets = fact.relatedCharacterIds ? nodes.filter((c) => fact.relatedCharacterIds!.includes(c.id)) : nodes.filter((c) => c.id !== node.id && [c.name, c.japanese, c.english, ...c.aliases].some((n) => n.length >= 2 && text.includes(n.toLowerCase())))
    for (const target of targets) if (!edges.some((e) => e.from.id === target.id && e.to.id === node.id || e.from.id === node.id && e.to.id === target.id)) edges.push({ from: node, to: target, fact })
  }
  const character = characters.find((c) => c.id === active) ?? characters[0]
  const changeScale = (delta: number) => setView((v) => ({ ...v, scale: Math.max(.65, Math.min(2.2, v.scale + delta)) }))
  return <div className="relations-layout"><div className="graph-wrap"><div className="graph-toolbar"><label>季別<select value={season} onChange={(e) => setSeason(e.target.value)}><option value="both">兩季</option><option value="crowds">CROWDS</option><option value="insight">INSIGHT</option></select></label><label>組織<select value={group} onChange={(e) => setGroup(e.target.value)}><option value="ALL">全部</option><option value="GATCHAMAN">G-CREW</option><option value="GALAX">GALAX</option><option value="ALIEN">異星生命</option><option value="CIVILIAN">市民</option></select></label><div className="graph-controls"><button onClick={() => changeScale(-.15)} aria-label="縮小關係圖"><Minus size={15} /></button><button onClick={() => changeScale(.15)} aria-label="放大關係圖"><Plus size={15} /></button><button onClick={() => setView({ x: 0, y: 0, scale: 1 })} aria-label="重設視角"><RotateCcw size={15} /></button></div></div>
    <svg viewBox="0 0 880 630" className="relationship-svg" role="group" aria-label="角色關係圖，可拖曳並使用按鈕縮放" onPointerDown={(e) => { if ((e.target as Element).closest('.graph-node')) return; const r = e.currentTarget.getBoundingClientRect(); drag.current = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y, moved: false }; e.currentTarget.setPointerCapture(e.pointerId); e.currentTarget.dataset.ratio = String(880 / r.width) }} onPointerMove={(e) => { if (drag.current) { const r = Number(e.currentTarget.dataset.ratio); if (Math.abs(e.clientX - drag.current.x) + Math.abs(e.clientY - drag.current.y) > 5) drag.current.moved = true; setView((v) => ({ ...v, x: drag.current!.vx + (e.clientX - drag.current!.x) * r, y: drag.current!.vy + (e.clientY - drag.current!.y) * r })) } }} onPointerUp={() => { requestAnimationFrame(() => { drag.current = null }) }} onPointerCancel={() => { drag.current = null }}>
      <defs><pattern id="graph-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#ffffff15" /></pattern></defs><rect width="880" height="630" fill="url(#graph-grid)" />
      <g transform={`translate(${view.x + 440 * (1 - view.scale)} ${view.y + 315 * (1 - view.scale)}) scale(${view.scale})`}>
        {edges.map((edge, i) => <line key={i} x1={edge.from.x} y1={edge.from.y} x2={edge.to.x} y2={edge.to.y} stroke={edge.from.id === active || edge.to.id === active ? '#d5ff57' : '#45474f'} strokeWidth={edge.from.id === active || edge.to.id === active ? 2 : 1} />)}
        {nodes.map((node) => <g key={node.id} role="button" tabIndex={0} aria-label={`查看${node.name}的關係`} className="graph-node" onClick={() => { if (!drag.current?.moved) setActive(node.id) }} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(node.id) } }} transform={`translate(${node.x} ${node.y})`}><circle r={node.id === active ? 32 : 25} fill={node.id === active ? '#d5ff57' : '#181b22'} stroke={node.color} strokeWidth="2" /><text y="5" textAnchor="middle" fill={node.id === active ? '#101311' : '#fff'} fontSize="12">{node.number.startsWith('G-') ? node.number.slice(2) : node.name.slice(0, 2)}</text><text y="51" textAnchor="middle" fill="#f3f2e9" fontSize="12">{node.name}</text></g>)}
      </g>
    </svg><span className="graph-hint">DRAG TO EXPLORE · 點選節點查看有來源的人際連結</span>
  </div><aside className="relation-detail" style={{ '--character-color': character.color } as CSSProperties}><span className="eyebrow">SELECTED CONNECTION</span><h3>{character.name}</h3><p>{character.japanese}</p><FactList facts={character.relationships} /><a className="text-action" href="#crew" onClick={() => select(character.id)}>前往角色檔案<ArrowUpRight size={17} /></a></aside></div>
}

export function Gallery({ onOpen }: { onOpen: (a: ArchiveAsset) => void }) {
  const [filter, setFilter] = useState('all')
  const list = archiveAssets.filter((a) => !a.id.endsWith('-visual') || a.kind === 'key-visual').filter((a) => filter === 'all' || filter === 'redraw' && !!a.provenance && a.kind === 'character' || filter === 'utsutsu' && a.characterId === 'utsutsu' || filter === 's1' && a.season === 1 || filter === 's2' && a.season === 2 || filter === a.kind)
  return <><div className="filter-row" role="group" aria-label="圖庫分類">{[['all', '全部視覺'], ['redraw', '重繪 v2'], ['s1', 'SEASON 01'], ['s2', 'SEASON 02'], ['utsutsu', 'UTSUTSU'], ['g-suit', 'G-SUIT'], ['key-visual', '主視覺'], ['scene', '動畫劇照'], ['design', '設定線稿'], ['merch', 'NOTE 商品']].map(([id, label]) => <button aria-pressed={id === filter} onClick={() => setFilter(id)} key={id}>{label}</button>)}<span>{list.length} IMAGES</span></div><SwipeCarousel key={filter} label="官方圖庫" className="art-carousel" maxColumns={3} minWidth={240} items={list.map((a, i) => <div className="gallery-item" key={a.id}><span className="gallery-index">{String(i + 1).padStart(2, '0')} / S0{a.season}</span><Artwork asset={a} onOpen={onOpen} /><p>{a.caption}</p></div>)} /><p className="gallery-caption">官方原圖與重繪稿分開標示。拖曳或使用左右箭頭換頁；點選圖片放大。</p></>
}

export function SourceRegister({ entries }: { entries: Source[] }) {
  return <div className="source-register">{entries.map((source) => <AnimatedDetails key={source.id} summary={<><span className={`source-status source-${source.status}`}>{source.status === 'read' ? <Check size={13} strokeWidth={2} /> : <ArrowUpRight size={13} />}</span><span>{source.name}<small>{source.language} / {source.type}</small></span><span className="source-state">{{ read: '已讀取', partial: '部分可讀', blocked: '存取受限', unavailable: '無法讀取' }[source.status]}</span><ChevronDownIcon /></>}><div className="source-register-body">{publishedText(source.note) && <p>{publishedText(source.note)}</p>}<small>查閱日期 {source.accessed}</small><a href={source.url} target="_blank" rel="noreferrer">開啟來源<ArrowUpRight size={13} /></a></div></AnimatedDetails>)}</div>
}
function ChevronDownIcon() { return <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 9 6 6 6-6" /></svg> }
export function AssetRegister({ onOpen }: { onOpen: (a: ArchiveAsset) => void }) {
  return <AnimatedDetails className="asset-register" summary={<>查看圖片來源紀錄 · {archiveAssets.length} 個素材<ChevronDownIcon /></>}>{archiveAssets.map((a) => <div className="asset-source-row" key={a.id}><button onClick={() => onOpen(a)}>{a.id}<ArrowUpRight size={12} /></button><span>S0{a.season} · {a.provenance ? '重繪稿' : a.kind} · {a.dimensions.width}×{a.dimensions.height}</span><a href={a.sourceUrl} target="_blank" rel="noreferrer">{a.provenance ? '高清檔案' : '原始圖片'}<ArrowUpRight size={11} /></a><small>{a.rights}</small>{a.generation && <AnimatedDetails className="generation-record" summary="重繪方式與參考來源"><p>{a.generation.prompt}</p><span>工具：內建 imagegen · {a.generation.created}</span>{a.generation.references.map((ref) => <a key={ref} href={ref} target="_blank" rel="noreferrer">參考圖片<ArrowUpRight size={11} /></a>)}</AnimatedDetails>}</div>)}</AnimatedDetails>
}

