import { useEffect, useState } from 'react'
import logo from '../assets/figma/logo-nav.png'
import chevron from '../assets/figma/chevron-down.svg'
import Button from '../components/Button'
import { navLinks } from '../data/content'

export function TickerBar() {
  // Figma "Ticker bar" (123:186) — example data, not a live feed.
  return (
    <div className="flex h-[35px] items-center justify-center bg-navy px-4 text-[13px] whitespace-nowrap md:px-[120px]">
      <div className="flex items-center gap-[10px] overflow-hidden">
        <span className="font-medium text-white">TSX: NEO</span>
        <span className="text-white/85">CA$26.69</span>
        <span className="font-medium text-[#7ed1a8]">▲ 1.79%</span>
        <span className="text-white/40">·</span>
        <span className="text-white/70">OTCQX: NOPMF</span>
      </div>
    </div>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    // Zero-height sticky wrapper so the nav floats over the hero and follows the scroll.
    <div className="sticky top-0 z-50 flex h-0 flex-col">
      <nav
        className={`relative mx-4 mt-[26px] shrink-0 overflow-hidden rounded-[13px] border-b border-[#2a2a2a] bg-white transition-shadow duration-300 lg:mx-auto lg:w-[calc(100%-32px)] lg:max-w-[1201px] ${
          scrolled ? 'shadow-[0_8px_30px_rgba(16,22,35,0.14)]' : ''
        }`}
        aria-label="Main"
      >
        <div className="flex h-[68px] items-center justify-between px-5 lg:pr-[17px] lg:pl-12">
          <a href="#top" aria-label="Neo Performance Materials — home" className="block h-[49px] w-[86px] shrink-0">
            <img src={logo} alt="Neo" className="size-full object-cover" />
          </a>

          <ul className="m-0 hidden list-none items-center gap-8 p-0 lg:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-[16px] leading-5 tracking-[-0.32px] text-[#515150] transition-colors hover:text-principal">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <button type="button" className="flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 font-sans text-[16px] leading-5 tracking-[-0.32px] text-[#515150]">
              EN
              <img src={chevron} alt="" width="16" height="16" />
            </button>
            <Button href="#contact">Contact Us</Button>
          </div>

          <button
            type="button"
            className="flex size-11 cursor-pointer flex-col items-center justify-center gap-[5px] border-0 bg-transparent lg:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-[2px] w-6 bg-ink transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-[2px] w-6 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-6 bg-ink transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>

        {open && (
          <div className="border-t border-[#e5e5e5] px-5 pt-2 pb-5 lg:hidden">
            <ul className="m-0 list-none p-0">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-[17px] text-[#515150]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#contact" onClick={() => setOpen(false)} className="mt-3 w-full">
              Contact Us
            </Button>
          </div>
        )}
      </nav>
    </div>
  )
}
