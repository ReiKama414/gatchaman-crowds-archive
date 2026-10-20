import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import gsap from 'gsap'
import { useArchive } from '../store'

export function AnimatedDetails({ summary, children, className = '' }: { summary: ReactNode; children: ReactNode; className?: string }) {
  const root = useRef<HTMLDetailsElement>(null)
  const content = useRef<HTMLDivElement>(null)
  const animation = useRef<gsap.core.Tween | null>(null)
  const targetOpen = useRef(false)
  const [expanded, setExpanded] = useState(false)
  const reduced = useArchive((s) => s.reducedMotion)
  const id = useId()

  useEffect(() => () => { animation.current?.kill() }, [])
  useLayoutEffect(() => {
    if (!reduced || !content.current || !root.current) return
    animation.current?.kill()
    root.current.open = targetOpen.current
    gsap.set(content.current, { height: targetOpen.current ? 'auto' : 0, opacity: targetOpen.current ? 1 : 0 })
  }, [reduced])

  function toggle(e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    const element = content.current, details = root.current
    if (!element || !details) return
    animation.current?.kill()
    const next = !targetOpen.current
    const startHeight = details.open ? element.getBoundingClientRect().height : 0
    targetOpen.current = next
    setExpanded(next)
    details.open = true
    if (reduced) {
      details.open = next
      gsap.set(element, { height: next ? 'auto' : 0, opacity: next ? 1 : 0 })
      return
    }
    animation.current = gsap.fromTo(element, { height: startHeight }, {
      height: next ? element.scrollHeight : 0, opacity: next ? 1 : 0,
      duration: next ? .5 : .38, ease: 'power3.inOut', overwrite: true,
      onComplete: () => {
        details.open = next
        gsap.set(element, { height: next ? 'auto' : 0 })
        animation.current = null
      },
    })
  }
  return <details className={`animated-details ${className}`} ref={root} data-expanded={expanded}>
    <summary aria-expanded={expanded} aria-controls={id} onClick={toggle}>{summary}</summary>
    <div ref={content} id={id} className="disclosure-content" inert={!expanded}><div className="disclosure-inner">{children}</div></div>
  </details>
}
