import texture from '../assets/figma/footer-texture.webp'
import logoWhite from '../assets/figma/logo-white.png'
import iconLinkedin from '../assets/figma/icon-linkedin.svg'
import iconX from '../assets/figma/icon-x.svg'
import iconYoutube from '../assets/figma/icon-youtube.svg'
import { footerColumns } from '../data/content'

const socials = [
  { label: 'LinkedIn', icon: iconLinkedin },
  { label: 'X', icon: iconX },
  { label: 'YouTube', icon: iconYoutube },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-footer px-4 pt-14 pb-7 lg:h-[480px] lg:px-[120px] lg:pt-[72px]">
      {/* Texture: 10% opacity, desaturated (Figma: white "saturation" blend) */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[683.61px] overflow-hidden opacity-10">
        <img
          src={texture}
          alt=""
          loading="lazy"
          className="absolute top-[-0.03%] left-[-15.16%] h-[167.52%] w-[166.71%] max-w-none object-cover grayscale"
        />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex w-[255px] flex-col gap-[22px]">
            <div className="relative aspect-[254/119] w-full overflow-hidden">
              <img src={logoWhite} alt="Neo" className="absolute top-[-21.85%] left-0 h-[121.85%] w-[99.83%] max-w-none" />
            </div>
            <p className="m-0 text-[16px] leading-[1.5] tracking-[-0.16px] text-[rgba(228,227,222,0.85)]">
              The building blocks of
              <br />
              modern technology.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-[20px] border border-white/35 bg-white/8 transition-colors hover:bg-white/20"
                >
                  <img src={s.icon} alt="" width="20" height="20" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:flex sm:gap-10">
            {footerColumns.map((col) => (
              <div key={col.title} className="flex flex-col gap-[14px] sm:w-(--w) sm:shrink-0" style={{ '--w': `${col.width}px` }}>
                <p className="m-0 text-[12px] font-medium tracking-[0.72px] text-white/60 uppercase">{col.title}</p>
                {col.links.map((l) => (
                  <a key={l} href="#top" className="text-[15px] tracking-[-0.15px] text-cream transition-colors hover:text-white lg:whitespace-nowrap">
                    {l}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 h-px bg-white/20 lg:absolute lg:top-[332px] lg:mt-0 lg:w-full" />
        <div className="mt-6 flex flex-col gap-2 text-[13px] tracking-[-0.13px] text-white/60 md:flex-row md:justify-between lg:absolute lg:top-[356px] lg:mt-0 lg:h-6 lg:w-full lg:items-center">
          <p className="m-0 whitespace-pre-wrap">© 2026 Neo Performance Materials Inc.  ·  TSX: NEO  ·  OTCQX: NOPMF</p>
          <p className="m-0 whitespace-pre-wrap">Privacy policy  ·  Terms of use  ·  Global sites  ·  EN</p>
        </div>
      </div>
    </footer>
  )
}
