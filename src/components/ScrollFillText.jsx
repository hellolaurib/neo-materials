import { useEffect, useRef } from 'react'

// Words start light grey and fill to ink one by one as the heading scrolls through the viewport.
// Progress 0 when the heading top reaches 85% of the viewport, 1 when its bottom reaches 45%.
export default function ScrollFillText({ text, className = '', as: Tag = 'h2' }) {
  const ref = useRef(null)
  const words = text.split(' ')

  useEffect(() => {
    const el = ref.current
    const spans = el.querySelectorAll('[data-w]')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      spans.forEach((s) => s.style.setProperty('--f', 1))
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.85
      const end = vh * 0.45
      const p = Math.min(1, Math.max(0, (start - r.top) / (start - end + r.height)))
      const n = spans.length
      // soft edge: each word fills over ~3 words' worth of progress
      const soft = 3
      spans.forEach((s, i) => {
        const f = Math.min(1, Math.max(0, (p * (n + soft) - i) / soft))
        s.style.setProperty('--f', f.toFixed(3))
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <span
          key={i}
          data-w
          aria-hidden
          style={{ color: 'color-mix(in srgb, #101623 calc(var(--f, 0) * 100%), #d3d6dc)' }}
        >
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
