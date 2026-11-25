import { useRef } from 'react'
import Button from '../components/Button'
import { applications } from '../data/content'

function AppRow({ app, index }) {
  const previewRef = useRef(null)

  // The preview image follows the cursor inside the row (only rows that have an image).
  const onMove = (e) => {
    const el = previewRef.current
    if (!el) return
    const r = e.currentTarget.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - r.left}px`)
    el.style.setProperty('--y', `${e.clientY - r.top}px`)
  }

  return (
    <li
      data-reveal
      style={{ '--d': `${index * 60}ms` }}
      onMouseMove={app.image ? onMove : undefined}
      className="group relative grid gap-3 border-b border-[#d9d9d9] px-2 py-6 transition-colors duration-300 hover:bg-[#f7f9fb] lg:h-[136px] lg:grid-cols-[660px_1fr] lg:gap-0 lg:px-6 lg:py-0"
    >
      <div className="relative z-10 lg:pt-6">
        <p className="m-0 text-[30px] leading-9 font-medium tracking-[-1px] text-muted opacity-50">{String(index + 1).padStart(2, '0')}</p>
        <h3 className="m-0 mt-2 text-[26px] leading-[normal] font-medium tracking-[-1.5px] text-ink transition-colors group-hover:text-principal lg:mt-[15px] lg:text-[32px] lg:tracking-[-2px]">
          {app.title}
        </h3>
      </div>
      <p className="relative z-10 m-0 text-[16px] leading-5 tracking-[-0.32px] text-muted lg:max-w-[580px] lg:pt-[66px]">{app.text}</p>

      {app.image && (
        <div
          ref={previewRef}
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 z-20 hidden h-[180px] w-[320px] -translate-x-1/2 -translate-y-1/2 scale-90 overflow-hidden rounded-[16px] opacity-0 shadow-[0_20px_50px_rgba(16,22,35,0.25)] transition-[opacity,scale] duration-300 ease-out group-hover:scale-100 group-hover:opacity-100 [@media(hover:hover)]:block"
          style={{ left: 'var(--x, 50%)', top: 'var(--y, 50%)' }}
        >
          <img src={app.image} alt="" className="size-full object-cover" />
        </div>
      )}
    </li>
  )
}

export default function Applications() {
  return (
    <section id="applications" className="bg-white px-4 pt-14 pb-16 lg:px-[60px] lg:pt-[78px] lg:pb-[84px]">
      <div className="mx-auto max-w-[1320px] text-center">
        <p className="m-0 text-[16px] leading-6 text-muted">→ OUR APPLICATIONS</p>
        <h2
          data-reveal
          className="mx-auto mt-4 mb-0 max-w-[778px] text-[32px] leading-[40px] font-medium tracking-[-1px] text-ink lg:mt-[14px] lg:text-[52px] lg:leading-[62px] lg:tracking-[-2px]"
        >
          Inside the technologies shaping what comes next
        </h2>
      </div>

      <ol className="mx-auto mt-8 mb-0 max-w-[1320px] list-none p-0 text-left lg:mt-[-6px]">
        {applications.map((a, i) => (
          <AppRow key={a.title} app={a} index={i} />
        ))}
      </ol>

      <div className="mt-10 text-center lg:mt-[62px]">
        <Button href="#applications" arrow>
          See all applications
        </Button>
      </div>
    </section>
  )
}
