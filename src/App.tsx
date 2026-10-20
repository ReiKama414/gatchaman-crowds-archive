import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, AudioLines, ChevronDown, Menu, MoveUpRight, Pause, Play, X } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { characters, sources } from './data/characters'
import { publishedText } from './data/presentation'
import { AnimatedDetails } from './components/AnimatedDetails'
import { CharacterArchive } from './components/CharacterArchive'
import { SwipeCarousel } from './components/SwipeCarousel'
import { seasons, episodes, music, concepts } from './data/series'
import { archiveAssets, getCharacterAssets } from './data/assets'
import type { ArchiveAsset } from './data/assets'
import { Artwork, FactList, Gallery, Lightbox, RelationshipGraph, SourceRegister, AssetRegister } from './components/ArchiveUI'
import { useArchive } from './store'
import { publicUrl } from './publicUrl'

const WorldScene = lazy(() => import('./components/Scene').then((m) => ({ default: m.WorldScene })))
const ImageScene = lazy(() => import('./components/Scene').then((m) => ({ default: m.ImageScene })))
gsap.registerPlugin(ScrollTrigger)

const chapters = [['opening', '開場'], ['world', '世界觀'], ['season-01', '第一季'], ['season-02', '第二季'], ['crew', '角色圖鑑'], ['utsutsu', '宮現'], ['note', 'NOTE'], ['relationships', '人物關係'], ['art', '官方圖庫'], ['sound', '音樂'], ['episodes', '各話資料'], ['credits', '來源']]
const findAsset = (id: string) => archiveAssets.find((a) => a.id === id)
const selectArtwork = (assets: ArchiveAsset[], kind: string, season: number) => assets.filter((a) => !a.provenance && a.kind === kind && a.season === season).sort((a, b) => (b.provenance ? 1e9 : 0) + (b.layout === 'profile-sheet' ? 1e7 : 0) + b.dimensions.width * b.dimensions.height - (a.provenance ? 1e9 : 0) - (a.layout === 'profile-sheet' ? 1e7 : 0) - a.dimensions.width * a.dimensions.height)[0]
const assetIds = ['hajime-v2', 'tsubasa-v2', 'utsutsu-front-v2', 's1-key-visual', 's2-key-visual', 's2-utsutsu']
const noteColors: Record<string, string> = { utsutsu: '#adc62e', hajime: '#e8e4dc', sugane: '#a7aaaf', joe: '#df4d4f', od: '#57b5af', paiman: '#e57fae', rui: '#bd9bdd', tsubasa: '#68a5e5', katze: '#b9a34b' }

function SectionLabel({ n, children }: { n: string; children: ReactNode }) { return <div className="section-label"><span className="section-index">{n}</span><span>{children}</span><span className="label-rule" /><span className="cross">✳</span></div> }
function SourcesInline({ entries }: { entries: { sourceUrl: string; sourceName: string; verificationStatus?: string; note?: string }[] }) { return <div className="inline-sources">{entries.map((s, i) => <div key={`${s.sourceUrl}-${i}`}><a href={s.sourceUrl} target="_blank" rel="noreferrer">{s.sourceName}{s.verificationStatus && <span className={`source-verification status-${s.verificationStatus}`}>{s.verificationStatus === 'confirmed' ? '已核實' : s.verificationStatus === 'secondary' ? '二手' : '待核'}</span>}<ArrowUpRight size={11} /></a>{s.note && <AnimatedDetails className="source-note" summary="查證註記"><p>{publishedText(s.note)}</p></AnimatedDetails>}</div>)}</div> }

function Loader({ done, onComplete }: { done: boolean; onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [failures, setFailures] = useState(0)
  useEffect(() => {
    let cancelled = false, completed = 0
    const assets = assetIds.map(findAsset).filter((a): a is ArchiveAsset => !!a)
    const total = assets.length + 1
    const advance = () => { completed++; if (!cancelled) setProgress(Math.round(completed / total * 100)) }
    const promises = assets.map((a) => new Promise<void>((resolve) => {
      const img = new Image()
      img.onload = () => { advance(); resolve() }
      img.onerror = () => { if (!cancelled) setFailures((v) => v + 1); advance(); resolve() }
      img.src = publicUrl(a.path)
    }))
    promises.push(document.fonts.ready.then(() => { advance() }))
    Promise.all(promises).then(() => { if (!cancelled) onComplete() })
    return () => { cancelled = true }
  }, [onComplete])
  return <div className={`loader ${done ? 'loader-done' : ''}`} aria-hidden={done} aria-live="polite"><div className="loader-logo">G<span>_</span></div><div className="loader-line"><span style={{ width: `${progress}%` }} /></div><div className="loader-meta"><span>INITIALIZING THE ARCHIVE</span><span>{String(progress).padStart(3, '0')}%</span></div><small>{failures ? `${failures} 個素材未載入，其他內容仍可瀏覽` : '官方視覺與字型 · 實際資源載入進度'}</small></div>
}

function UtsutsuSection({ onOpen }: { onOpen: (a: ArchiveAsset) => void }) {
  const character = characters.find((c) => c.id === 'utsutsu')!
  const [form, setForm] = useState('g-suit')
  const [season, setSeason] = useState(2)
  const asset = selectArtwork(getCharacterAssets('utsutsu'), form, season)
  const [original, setOriginal] = useState(false)
  const portrait = findAsset(original ? 's1-utsutsu-press-character' : 'utsutsu-front-v2')
  return <section id="utsutsu" className="utsutsu-section section-dark"><div className="section-inner"><SectionLabel n="06">UTSUTSU MIYA — THE QUIET HEART</SectionLabel><div className="utsutsu-heading"><div><span className="eyebrow">CHARACTER IN FOCUS / G-99</span><h2 data-reveal>UTSU<span>TSU</span><br /><em>MIYA.</em></h2></div><div className="utsutsu-intro"><span className="ja-vertical">うつうつします。</span><p>生命を、わけあう。</p><p>將自己的生命分給他人。<br />一個寡言的女孩，<br />慢慢學會與世界連結。</p><span className="eyebrow">宮現 / 宮うつつ</span></div></div>
    <div className="utsutsu-body"><div className="utsutsu-visual"><span className="utsutsu-vertical-name">UTSU-TSU / G-99</span><Artwork asset={portrait} onOpen={onOpen} /><div className="segmented portrait-versions"><button aria-pressed={!original} onClick={() => setOriginal(false)}>重繪 v2</button><button aria-pressed={original} onClick={() => setOriginal(true)}>官方原圖</button></div><p className="portrait-note">{original ? '第一季官方立繪 · 原始比例' : '重繪 v2 · 白底平塗稿'}<br />宮現 / 官方身高 143 cm</p></div>
      <div className="utsutsu-dossier"><div className="utsutsu-profile" data-reveal><span className="eyebrow">01 / A QUIET PRESENCE</span><h3>靜默之中，<br />也有溫柔的力量。</h3><p>{character.summary}</p><div className="utsutsu-numbers"><div><span>G-99</span><small>GATCHAMAN NUMBER</small></div><div><span>143<sup>cm</sup></span><small>HEIGHT / 官方身高</small></div></div><FactList facts={character.facts.filter((f) => /年齡|生日|聲優|血型/.test(f.label))} /></div>
      <div className="life-death" data-reveal><span className="eyebrow">02 / LIFE & DEATH</span><div className="life-visual" aria-hidden="true">{Array.from({ length: 17 }, (_, i) => <span className="life-branch" key={i} style={{ '--branch': i, height: `${18 + Math.sin(i * .7) * 15 + i * 2}%`, left: `${i * 5.8}%` } as CSSProperties} />)}<span className="life-word">LIFE<span>↔</span>DEATH</span></div><h3>生命並非無限。<br />給予，也伴隨代價。</h3><FactList facts={character.abilities} /><p className="visual-disclaimer">植物與粒子為本站的抽象視覺詮釋；不代表角色擁有操控植物的原作能力。</p></div>
      <div className="utsutsu-development" data-reveal><span className="eyebrow">03 / OPENING UP</span><h3>從「不敢靠近」，<br />到主動伸出手。</h3><FactList facts={character.relationships} /><FactList facts={character.evolution} /></div></div>
    </div>
    <div className="utsutsu-forms"><div><span className="eyebrow">04 / THE MANY SIDES OF UTSUTSU</span><h3>同一顆心，<br />不同的姿態。</h3><div className="segmented">{[1, 2].map((s) => <button key={s} onClick={() => setSeason(s)} aria-pressed={season === s}>SEASON 0{s}</button>)}</div><div className="form-switch"><button aria-pressed={form === 'character'} onClick={() => setForm('character')}>日常造型<ArrowRight size={17} /></button><button aria-pressed={form === 'g-suit'} onClick={() => setForm('g-suit')}>G-SUIT<ArrowRight size={17} /></button></div><FactList facts={character.appearance} /><p className="visual-disclaimer">服裝的二手描述與官方圖片分開標示；尚未取得的造型不以其他圖片替代。</p></div><div className="form-artwork"><Artwork asset={asset} onOpen={onOpen} /></div></div>
    <SwipeCarousel label="宮現劇照" maxColumns={2} minWidth={240} className="utsutsu-scenes" items={getCharacterAssets('utsutsu').filter((a) => a.kind === 'scene').map((a) => <Artwork key={a.id} asset={a} onOpen={onOpen} />)} />
  </div></section>
}

function NoteArchive({ onOpen }: { onOpen: (a: ArchiveAsset) => void }) {
  const [index, setIndex] = useState(0)
  const [owner, setOwner] = useState('utsutsu')
  const selected = concepts[index]
  const photograph = findAsset('note-eight-colors-hd')
  const character = characters.find((c) => c.id === owner)!
  return <section id="note" className="note-section section-light"><div className="section-inner"><SectionLabel n="07">NOTE & G-SUIT / THE POWER WITHIN</SectionLabel><div className="section-heading"><h2 data-reveal>MORE THAN<br />A <em>NOTE.</em></h2><p>精神化為形體。<br />力量的模樣，由持有者決定。</p></div><div className="note-layout"><div className="note-reference note-overview"><div className="note-photo-heading"><span>NOTE / 8 COLORS</span><strong>八色 NOTE</strong></div><Artwork asset={photograph} onOpen={onOpen} /><p className="note-photo-caption">依提供的商品圖高清重製，保留八組配色、正反面與原有排列。點選圖片可放大。</p></div><div className="note-info"><div className="concept-tabs" role="tablist" aria-label="世界觀資料">{concepts.map((c, i) => <button role="tab" aria-selected={index === i} key={c.id} onClick={() => setIndex(i)}>{c.name}</button>)}</div><span className="eyebrow">SYSTEM FILE / {String(index + 1).padStart(2, '0')}</span><h3>{selected.name}</h3><span className="note-ja">{selected.nameJa}</span><p>{selected.description}</p><div className="concept-limit"><span>LIMITS / 邊界</span><p>{publishedText(selected.limitations)}</p></div><SourcesInline entries={selected.sources} /><div className="note-owner"><label htmlFor="note-owner">查看成員的 NOTE 與能力</label><select id="note-owner" value={owner} onChange={(e) => setOwner(e.target.value)}>{characters.filter((c) => Object.hasOwn(noteColors, c.id)).map((c) => <option value={c.id} key={c.id}>{c.name} / {c.number}</option>)}</select><FactList facts={character.abilities.slice(0, 2)} /></div></div></div></div></section>
}

function EpisodeArchive() {
  const [season, setSeason] = useState(1)
  return <section id="episodes" className="episode-section section-light"><div className="section-inner"><SectionLabel n="11">EPISODE ARCHIVE / EVERY CHAPTER</SectionLabel><div className="section-heading"><h2 data-reveal>EVERY<br /><em>PERSPECTIVE.</em></h2><div><p>從前衛到洞察。<br />兩季的每一個章節。</p><div className="segmented">{[1, 2].map((n) => <button key={n} aria-pressed={season === n} onClick={() => setSeason(n)}>SEASON 0{n}</button>)}</div></div></div><div className="episode-list">{episodes.filter((e) => e.season === season).map((e) => <AnimatedDetails className="episode-row" key={e.id} summary={<><span className="episode-no">{e.kind === 'special' ? 'SP' : String(e.number).padStart(2, '0')}</span><h3>{e.title}</h3><span className="episode-type">{e.kind === 'special' ? '特別篇 / 非正式 TV 集數' : 'TV EPISODE'}</span><PlusIcon /></>}><div className="episode-content"><p>{e.synopsis}</p><SourcesInline entries={e.sources} /></div></AnimatedDetails>)}</div><p className="archive-note">兩季各 12 話正式電視集數；第一季第 12 話導演剪輯版《Embrace》與第二季第 0 話《inbound》另列特別篇。</p></div></section>
}
function PlusIcon() { return <span className="plus-icon" aria-hidden="true">+</span> }

function SoundArchive() {
  const [selected, setSelected] = useState(music[0])
  const [minimized, setMinimized] = useState(false)
  const [visible, setVisible] = useState(false)
  const panel = useRef<HTMLDivElement>(null)
  const drag = useRef<{ x: number; y: number; left: number; top: number } | null>(null)
  const pick = (m: typeof music[number]) => { setSelected(m); setVisible(true); setMinimized(false) }
  return <section id="sound" className="sound-section section-dark"><div className="section-inner"><SectionLabel n="10">SOUND ARCHIVE / LISTEN TO THE CROWDS</SectionLabel><div className="sound-heading"><h2 data-reveal>TURN UP<br />THE <em>WORLD.</em></h2><div className="sound-art" aria-hidden="true"><div className="record"><span>GC<br /><small>33⅓ RPM</small></span></div><AudioLines className="sound-lines" size={90} /></div></div><div className="music-list">{music.map((m, i) => <button className="music-row" key={m.id} onClick={() => pick(m)}><span className="music-no">{String(i + 1).padStart(2, '0')}</span><span className="music-kind">S0{m.season} / {m.type}</span><div><strong>{m.title}</strong><span>{m.artist}</span></div><span className="music-release">{m.releaseDate}</span><MoveUpRight size={23} /></button>)}</div><p className="archive-note">曲目資訊來自官方唱片頁。點選可查看發行資料並前往官方試聽；本站不自動播放音訊。</p>
  </div>{visible && <div ref={panel} className={`sound-player ${minimized ? 'minimized' : ''}`} role="region" aria-label="音樂資料面板"><div className="player-handle" onPointerDown={(e) => { if ((e.target as HTMLElement).closest('button')) return; const r = panel.current!.getBoundingClientRect(); drag.current = { x: e.clientX, y: e.clientY, left: r.left, top: r.top }; e.currentTarget.setPointerCapture(e.pointerId) }} onPointerMove={(e) => { if (!drag.current || !panel.current) return; const p = drag.current; const r = panel.current.getBoundingClientRect(); panel.current.style.left = `${Math.max(8, Math.min(window.innerWidth - r.width - 8, p.left + e.clientX - p.x))}px`; panel.current.style.top = `${Math.max(70, Math.min(window.innerHeight - r.height - 8, p.top + e.clientY - p.y))}px`; panel.current.style.right = 'auto'; panel.current.style.bottom = 'auto' }} onPointerUp={() => { drag.current = null }} onPointerCancel={() => { drag.current = null }}><span><AudioLines size={14} /> SOUND FILE / 可拖曳</span><div><button onClick={() => setMinimized((v) => !v)} aria-label={minimized ? '展開音樂資訊' : '縮小音樂資訊'}>{minimized ? '+' : '−'}</button><button onClick={() => setVisible(false)} aria-label="關閉音樂資訊"><X size={16} /></button></div></div>{<div className="player-content" hidden={minimized}><span className="eyebrow">SEASON 0{selected.season} / {selected.type}</span><h3>{selected.title}</h3><p>{selected.artist}</p><small>{selected.releaseDate}</small><p>{selected.description}</p><a className="pill-button" href={selected.officialUrl} target="_blank" rel="noreferrer">官方唱片／試聽頁<ArrowUpRight size={15} /></a><SourcesInline entries={selected.sources} /><select value={selected.id} onChange={(e) => setSelected(music.find((m) => m.id === e.target.value)!)} aria-label="切換曲目">{music.map((m) => <option key={m.id} value={m.id}>{m.title}</option>)}</select></div>}</div>}</section>
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [menu, setMenu] = useState(false)
  const [currentChapter, setCurrentChapter] = useState('opening')
  const [lightbox, setLightbox] = useState<ArchiveAsset | null>(null)
  const app = useRef<HTMLDivElement>(null)
  const { reducedMotion, setReducedMotion } = useArchive()
  const onLoad = useCallback(() => setLoaded(true), [])
  const openImage = useCallback((asset: ArchiveAsset) => setLightbox(asset), [])
  const closeImage = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [setReducedMotion])
  useEffect(() => {
    if (reducedMotion || !loaded) return
    const lenis = new Lenis({ duration: 1.05, anchors: true, smoothWheel: true, syncTouch: false, prevent: (node) => node.classList.contains('gallery-track') || node.classList.contains('crew-roster') || node.classList.contains('lightbox') })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t: number) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    return () => { gsap.ticker.remove(tick); lenis.destroy() }
  }, [reducedMotion, loaded])
  useLayoutEffect(() => {
    if (!loaded || reducedMotion || !app.current) return
    const scrambleElement = app.current.querySelector<HTMLElement>('[data-scramble]')
    const scrambleFinal = 'THE DIGITAL ARCHIVE'
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title .title-line', { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: .12, ease: 'power4.out' })
      gsap.fromTo('.hero-figure', { y: 90, opacity: 0, rotation: -6 }, { y: 0, opacity: 1, rotation: 0, duration: 1.4, stagger: .12, delay: .2, ease: 'power3.out' })
      gsap.fromTo('.hero-figures', { y: 0, scale: 1 }, { y: -50, scale: 1.04, scrollTrigger: { trigger: '#opening', start: 'top top', end: 'bottom top', scrub: 1.2, invalidateOnRefresh: true } })
      gsap.to('.hero-outline', { xPercent: -15, scrollTrigger: { trigger: '#opening', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => gsap.fromTo(el, { opacity: .15, y: 35, clipPath: 'inset(0% 0 30% 0)' }, { opacity: 1, y: 0, clipPath: 'inset(0% 0 0% 0)', duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 93%', once: true } }))
      const scramble = document.querySelector<HTMLElement>('[data-scramble]')
      if (scramble) { const value = scramble.textContent ?? ''; const p = { n: 0 }; const glyphs = 'GACTHMAN_019+<>/'; gsap.to(p, { n: value.length, duration: 1.4, delay: .3, ease: 'none', onUpdate: () => { scramble.textContent = value.split('').map((ch, i) => i < p.n || ch === ' ' ? ch : glyphs[(i + Math.floor(p.n * 8)) % glyphs.length]).join('') }, onComplete: () => { scramble.textContent = value } }) }

    }, app)
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 1200)
    return () => { clearTimeout(refresh); ctx.revert(); if (scrambleElement) scrambleElement.textContent = scrambleFinal }
  }, [loaded, reducedMotion])
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setCurrentChapter(entry.target.id) }) }, { rootMargin: '-15% 0px -65% 0px' })
    chapters.forEach(([id]) => { const el = document.getElementById(id); if (el) observer.observe(el) })
    const shortcut = (e: KeyboardEvent) => { if (e.key === '/' && !(e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement)) { e.preventDefault(); document.querySelector<HTMLInputElement>('.search input')?.focus(); document.getElementById('crew')?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' }) } }
    document.addEventListener('keydown', shortcut)
    return () => { observer.disconnect(); document.removeEventListener('keydown', shortcut) }
  }, [reducedMotion])
  useEffect(() => {
    if (!loaded || reducedMotion) return
    let timer = 0
    const observer = new ResizeObserver(() => {
      clearTimeout(timer)
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 250)
    })
    document.querySelectorAll('.character-detail,.utsutsu-forms,.episode-list,.note-layout,.relations-layout').forEach((element) => observer.observe(element))
    return () => { observer.disconnect(); clearTimeout(timer) }
  }, [loaded, reducedMotion])

  const hajime = findAsset('hajime-v2'), tsubasa = findAsset('tsubasa-v2')
  return <div className={`app ${reducedMotion ? 'motion-reduced' : ''}`} ref={app}>
    <a className="skip-link" href="#crew">跳到角色資料</a><Loader done={loaded} onComplete={onLoad} />
    <Suspense fallback={null}><WorldScene /></Suspense><div className="noise" aria-hidden="true" />
    <header className="site-header"><a href="#opening" className="brand" aria-label="GATCHAMAN CROWDS 首頁"><span className="brand-mark">G<span>_</span></span><span>GATCHAMAN CROWDS<small>THE DIGITAL ARCHIVE</small></span></a><nav className="header-nav" aria-label="主要導覽"><a href="#crew">G-CREW</a><a href="#utsutsu" className="nav-utsutsu"><span />UTSUTSU</a><a href="#art">ART ARCHIVE</a></nav><div className="header-actions"><button className="motion-button" onClick={() => setReducedMotion(!reducedMotion)} aria-pressed={reducedMotion} title={reducedMotion ? '開啟動態效果' : '減少動態效果'} aria-label={reducedMotion ? '開啟動態效果' : '減少動態效果'}>{reducedMotion ? <Play size={15} /> : <Pause size={15} />}</button><button className="menu-toggle" aria-label={menu ? '關閉章節選單' : '開啟章節選單'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={19} /> : <Menu size={19} />}</button></div></header>
    <nav className="chapter-nav" aria-label="章節快速導覽">{chapters.map(([id, title], i) => <a key={id} href={`#${id}`} aria-label={`${String(i + 1).padStart(2, '0')} ${title}`} aria-current={currentChapter === id ? 'location' : undefined}><span className="chapter-dot" /><span className="chapter-tooltip">{String(i + 1).padStart(2, '0')} / {title}</span></a>)}</nav>
    {menu && <nav className="full-menu" aria-label="所有章節">{chapters.map(([id, title], i) => <a href={`#${id}`} key={id} onClick={() => setMenu(false)}><span>{String(i + 1).padStart(2, '0')}</span>{title}<ArrowUpRight size={20} /></a>)}</nav>}
    <main>
      <section id="opening" className="hero"><div className="hero-top"><span>A FAN-MADE INTERACTIVE EXPERIENCE</span><span>TACHIKAWA, TOKYO / 2015–2016</span></div><div className="hero-signal" aria-hidden="true"><span /><span /><span /><span /><span /></div><div className="hero-outline" aria-hidden="true">UPDATE THE WORLD.</div><div className="hero-disc" aria-hidden="true"><div className="disc-inner" /><div className="disc-label">ARE WE A CROWD?<br />ARE WE A HERO?</div></div>
        <div className="hero-figures" aria-hidden="true">{tsubasa && <img className="hero-figure figure-tsubasa" src={publicUrl(tsubasa.path)} alt="" width={tsubasa.dimensions.width} height={tsubasa.dimensions.height} />}{hajime && <img className="hero-figure figure-hajime" src={publicUrl(hajime.path)} alt="" width={hajime.dimensions.width} height={hajime.dimensions.height} />}</div><div className="hero-title"><div><span className="title-line">GATCHAMAN</span></div><div><span className="title-line">CR<span className="hero-o">O</span>WDS<span className="hero-period">.</span></span></div></div><div className="hero-bottom"><div><span className="eyebrow" data-scramble>THE DIGITAL ARCHIVE</span><p>世界は、アップデートできる。</p><span className="hero-chinese">世界，還能有別的模樣。</span></div><a href="#world" className="explore-button"><span>ENTER THE ARCHIVE<small>探索這個世界</small></span><ArrowDownRight size={27} /></a><span className="hero-scroll">SCROLL TO EXPLORE<ArrowDown size={15} /></span></div><div className="hero-copyright">RECREATED V2 · ORIGINAL CHARACTERS © NTV / VAP / TATSUNOKO PRO.</div>
      </section>
      <div className="ticker" aria-hidden="true"><div>{Array.from({ length: 4 }, (_, i) => <span key={i}>GATCHAMAN CROWDS <b>✳</b> WE ARE NOT ALONE <b>✳</b> UPDATE THE WORLD <b>✳</b> </span>)}</div></div>
      <section id="world" className="world-section section-dark"><div className="section-inner"><SectionLabel n="02">THE WORLD / 世界のかたち</SectionLabel><div className="world-intro"><span className="eyebrow">IT STARTED WITH A QUESTION.</span><h2 data-reveal>誰說英雄，<br />只能有<em>一種形狀？</em></h2><div className="world-description"><span className="small-cross">✳</span><p>在近未來的立川，秘密守護城市的 GATCHAMAN，遇上相信人人都能改變世界的社群 GALAX。一個叫做「はじめ」的女孩，開始重新思考：我們真的需要敵人嗎？</p><a href="#season-01" className="text-action">從第一季開始<ArrowDownRight size={18} /></a></div></div><SwipeCarousel label="世界觀" maxColumns={1} className="world-carousel" items={[<article className="world-panel"><span>01 / THE INDIVIDUAL</span><h3>ひとり。</h3><p>一個人，能做什麼？</p><div className="world-symbol symbol-one" aria-hidden="true" /><small>NOTE · INDIVIDUALITY · CHOICE</small></article>, <article className="world-panel world-panel-lime"><span>02 / THE NETWORK</span><h3>つながる。</h3><p>當人與人開始連結。</p><div className="world-symbol symbol-network" aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <span key={i} />)}</div><small>GALAX · COLLABORATION · CROWDS</small></article>, <article className="world-panel world-panel-pink"><span>03 / THE ATMOSPHERE</span><h3>みんな。</h3><p>「大家」的答案，就是答案嗎？</p><div className="world-symbol symbol-crowd" aria-hidden="true">{Array.from({ length: 21 }, (_, i) => <i key={i} />)}</div><small>INSIGHT · CONSENSUS · RESPONSIBILITY</small></article>]} /><span className="world-note">以上為本站的主題導讀。原作設定與限制詳見 NOTE 資料庫。</span></div></section>
      {seasons.map((s) => <section id={`season-0${s.season}`} key={s.id} className={`season-section season-${s.season} ${s.season === 1 ? 'section-light' : 'section-pink'}`}><div className="section-inner"><SectionLabel n={`0${s.season + 2}`}>SEASON 0{s.season} / {s.year}</SectionLabel><div className="season-layout"><div className="season-image"><Artwork asset={findAsset(`s${s.season}-key-visual`)} onOpen={openImage} /><span className="season-huge-no" aria-hidden="true">0{s.season}</span></div><div className="season-info"><span className="eyebrow">{s.year} / {s.episodeCount} TV EPISODES</span><h2 data-reveal>{s.season === 1 ? <>CHANGE<br />THE <em>WORLD.</em></> : <>FEEL THE<br /><em>INSIGHT.</em></>}</h2><h3>{s.title}</h3><p className="season-japanese">{s.titleJa}</p><p className="season-chinese">{s.titleZh}</p><p className="season-summary">{s.summary}</p><div className="season-themes">{s.themes.map((t) => <span key={t}>{t}</span>)}</div><AnimatedDetails className="season-staff" summary={<>製作資訊與播出資料<ChevronDown size={14} /></>}><div><p><span>日本首播</span><strong>{s.broadcast}</strong></p><p><span>特別篇</span><strong>{s.special}</strong></p><p><span>主要人物</span><strong>{s.importantCharacters.join(' · ')}</strong></p>{s.staff.map((staff) => <p key={staff.role}><span>{staff.role}</span><strong>{staff.name}</strong></p>)}</div></AnimatedDetails><SourcesInline entries={s.sources} /><a href="#episodes" className="text-action">查看各話檔案<ArrowDownRight size={18} /></a></div></div>{s.season === 2 && <div className="insight-texture" aria-hidden="true"><Suspense fallback={null}><ImageScene src={findAsset('s2-key-visual')?.path ?? ''} /></Suspense><span>THE AIR WE SHARE.</span><small>WEBGL DISPLACEMENT STUDY / 視覺詮釋</small></div>}</div></section>)}
      <section id="crew" className="crew-section section-dark"><div className="section-inner"><SectionLabel n="05">G-CREW / CHARACTER RECORDS</SectionLabel><div className="section-heading"><h2 data-reveal>THE PEOPLE.<br />THE <em>POSSIBILITIES.</em></h2><div><span className="eyebrow">DIFFERENT NOTES. ONE WORLD.</span><p>每個人，都有自己的可能。<br />從主角、異形、客人，到城市裡的普通人。</p></div></div><CharacterArchive onOpen={openImage} /></div></section>
      <UtsutsuSection onOpen={openImage} /><NoteArchive onOpen={openImage} />
      <section id="relationships" className="relationships-section section-dark"><div className="section-inner"><SectionLabel n="08">RELATIONSHIPS / WE ARE CONNECTED</SectionLabel><div className="section-heading"><h2 data-reveal>NO ONE IS<br />AN <em>ISLAND.</em></h2><p>一段關係，改變兩個人。<br />讓彼此慢慢靠近起來。</p></div><RelationshipGraph /></div></section>
      <section id="art" className="art-section section-light"><div className="section-inner"><SectionLabel n="09">ART ARCHIVE / A WORLD IN COLOR</SectionLabel><div className="section-heading"><h2 data-reveal>EVERY COLOR<br />TELLS A <em>STORY.</em></h2><p>每一條線，每一種色彩。<br />官方原圖與重繪稿分開標示。</p></div><Gallery onOpen={openImage} /></div></section><SoundArchive /><EpisodeArchive />
      <section id="credits" className="credits-section section-dark"><div className="section-inner"><SectionLabel n="12">CREDITS / BUILT WITH LOVE, BACKED BY SOURCES</SectionLabel><div className="credits-heading"><h2 data-reveal>FOR THE LOVE<br />OF THE <em>CROWDS.</em></h2><span className="credit-star">✳</span></div><div className="credits-intro"><p>一份獻給《GATCHAMAN CROWDS》的非官方檔案。這不是官方網站，也不是完整百科；設定、考證與每一筆資料都盡力附上來源。</p><div className="verification-key"><span><i className="dot-confirmed" />官方核實</span><span><i className="dot-secondary" />二手資料</span><span><i className="dot-inferred" />推定</span></div></div><SourceRegister entries={sources} /><AssetRegister onOpen={openImage} /><div className="rights-note"><p>作品、角色、製作委員會、タツノコプロ、音樂、商標與官方圖像之權利屬 NTV、VAP、タツノコプロ及相關製作委員會。本站僅供個人介紹與研究展示，並未取得再授權、轉載、散布或商業使用。另行需得權利人許可。</p><p>二手說明保留出處；資料衝突以當前官方頁為主顯示。本站不提供動畫或音樂下載，也不做侵權串流。</p></div><footer><a href="#opening" className="footer-wordmark">GATCHAMAN<br /><em>CROWDS.</em></a><div><span>THE DIGITAL ARCHIVE</span><p>A FAN-MADE INTERACTIVE EXPERIENCE</p><a href="#opening">回到開場<ArrowUpRight size={15} /></a></div></footer></div></section>
    </main><Lightbox asset={lightbox} onClose={closeImage} onChange={openImage} items={archiveAssets.filter((a) => !a.id.endsWith('-visual') || a.kind === 'key-visual' || a.id === lightbox?.id)} />
  </div>
}
