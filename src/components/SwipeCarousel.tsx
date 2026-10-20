import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function SwipeCarousel({ items, label, maxColumns = 3, minWidth = 260, className = '' }: { items: ReactNode[]; label: string; maxColumns?: number; minWidth?: number; className?: string }) {
  const viewport = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(1)
  const [page, setPage] = useState(0)
  const [offset, setOffset] = useState(0)
  const drag = useRef<{ x: number; y: number; moved: boolean } | null>(null)
  const suppressClick = useRef(false)
  const count = Math.max(1, Math.ceil(items.length / columns))
  const active = Math.min(page, count - 1)
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setColumns(Math.max(1, Math.min(maxColumns, Math.floor((entry.contentRect.width + 14) / (minWidth + 14))))))
    if (viewport.current) observer.observe(viewport.current)
    return () => observer.disconnect()
  }, [maxColumns, minWidth])
  function turn(delta: number) { setPage(Math.max(0, Math.min(count - 1, active + delta))) }
  return <div className={`swipe-carousel ${className}`} role="region" aria-roledescription="輪播" aria-label={label}>
    <button className="swipe-arrow swipe-prev" aria-label={`${label}上一頁`} disabled={active === 0} onClick={() => turn(-1)}><ChevronLeft size={21} /></button>
    <div className="swipe-viewport" ref={viewport} tabIndex={0} onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); turn(e.key === 'ArrowRight' ? 1 : -1) } }} onDragStart={(e) => e.preventDefault()} onClickCapture={(e) => { if (suppressClick.current) { e.preventDefault(); e.stopPropagation(); suppressClick.current = false } }} onPointerDown={(e) => { if (e.button !== 0) return; suppressClick.current = false; drag.current = { x: e.clientX, y: e.clientY, moved: false } }} onPointerMove={(e) => {
      const start = drag.current
      if (!start) return
      const dx = e.clientX - start.x, dy = e.clientY - start.y
      if (!start.moved && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 8) { drag.current = null; return }
      if (Math.abs(dx) > 7) { start.moved = true; e.currentTarget.setPointerCapture(e.pointerId) }
      if (start.moved) setOffset((active === 0 && dx > 0 || active === count - 1 && dx < 0) ? dx * .2 : dx)
    }} onPointerUp={(e) => {
      const start = drag.current
      if (start?.moved) { suppressClick.current = true; const dx = e.clientX - start.x; if (Math.abs(dx) > Math.min(110, (viewport.current?.clientWidth ?? 500) * .18)) turn(dx < 0 ? 1 : -1) }
      drag.current = null; setOffset(0)
      if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
    }} onPointerCancel={() => { drag.current = null; setOffset(0) }} onPointerLeave={() => { if (!drag.current?.moved) drag.current = null }}>
      <div className={`swipe-track ${offset ? 'is-dragging' : ''}`} style={{ transform: `translateX(calc(${-active * 100}% + ${offset}px))`, '--swipe-columns': columns } as CSSProperties}>
        {Array.from({ length: count }, (_, index) => <div className="swipe-page" key={index} inert={index !== active} aria-hidden={index !== active}>{items.slice(index * columns, (index + 1) * columns).map((item, i) => <div className="swipe-item" key={i}>{item}</div>)}</div>)}
      </div>
    </div>
    <button className="swipe-arrow swipe-next" aria-label={`${label}下一頁`} disabled={active === count - 1} onClick={() => turn(1)}><ChevronRight size={21} /></button>
    {count > 1 && <span className="swipe-count" aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>}
  </div>
}
