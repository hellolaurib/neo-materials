import { useEffect, useRef, useState } from 'react'

// Counts from 0 up to the number inside `value` (e.g. "$603M", "100K", "30+"),
// keeping the prefix and suffix. Replays each time it scrolls back into view.
export default function CountUp({ value, duration = 1800 }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const [, prefix = '', num = '0', suffix = ''] = match || []
  const target = Number(num)
  const ref = useRef(null)
  const [n, setN] = useState(target)

  useEffect(() => {
    if (!match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const run = () => {
      cancelAnimationFrame(raf)
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3) // ease-out cubic
        setN(Math.round(target * eased))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    setN(0)
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) run()
        else {
          cancelAnimationFrame(raf)
          setN(0)
        }
      },
      { threshold: 0.6 },
    )
    io.observe(ref.current)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <span ref={ref} aria-label={value} className="tabular-nums">
      <span aria-hidden>
        {prefix}
        {n}
        {suffix}
      </span>
    </span>
  )
}
