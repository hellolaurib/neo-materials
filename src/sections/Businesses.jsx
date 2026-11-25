import arrowWhite from '../assets/figma/arrow-white.svg'
import Button from '../components/Button'
import { businesses } from '../data/content'

function BusinessCard({ image, title, text, delay }) {
  return (
    <a
      href="#what-we-make"
      data-reveal
      style={{ '--d': `${delay}ms` }}
      className="group relative block h-[400px] overflow-hidden rounded-[16px] text-white lg:w-[388px]"
    >
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
      />
      {/* Default state (Figma "Variant 3"): dark gradient + title + arrow */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,22,35,0.5)_0%,rgba(16,22,35,0)_49.6%,#101623_100%)]" />
      <div className="absolute right-[34px] bottom-[31px] left-6 flex items-center justify-between gap-4 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-0 [@media(hover:hover)]:group-focus-visible:opacity-0">
        <span className="text-[24px] leading-none tracking-[-2px]">{title}</span>
        <span className="flex h-[44px] w-[48px] shrink-0 items-center justify-center rounded-[11px] bg-principal">
          <img src={arrowWhite} alt="" width="20" height="20" />
        </span>
      </div>

      {/* Hover state (Figma "Variant 2"): blue overlay with the description */}
      <div className="absolute inset-0 hidden bg-[rgba(0,133,202,0.93)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:hover)]:block" />
      <p className="absolute right-6 bottom-[31px] left-[25px] m-0 hidden translate-y-3 text-[20px] leading-7 tracking-[-0.4px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:w-[338px] [@media(hover:hover)]:block">
        {text}
      </p>

      {/* Touch screens (no hover): show the description under the title */}
      <p className="absolute right-6 bottom-[90px] left-6 m-0 text-[16px] leading-[22px] text-white/85 [@media(hover:hover)]:hidden">{text}</p>
    </a>
  )
}

export default function Businesses() {
  return (
    <section id="what-we-make" className="bg-[#eee] px-4 pt-[60px] pb-[62px]">
      <div className="mx-auto flex max-w-[1191px] flex-col items-center text-center">
        <p className="m-0 text-[16px] leading-5 tracking-[-0.32px] text-muted">→ WHAT WE MAKE</p>
        <h2
          data-reveal
          className="mx-auto mt-[29px] mb-0 max-w-[836px] text-[32px] leading-[40px] font-medium tracking-[-1px] text-ink lg:mt-[15px] lg:text-[52px] lg:leading-[62px] lg:tracking-[-2px]"
        >
          Three businesses, one integrated supply chain
        </h2>

        <div className="mt-10 grid w-full grid-cols-1 gap-3 text-left md:grid-cols-3 lg:mt-[68px] lg:w-auto lg:grid-cols-[388px_388px_388px]">
          {businesses.map((b, i) => (
            <BusinessCard key={i} {...b} delay={i * 100} />
          ))}
        </div>

        <Button href="#what-we-make" arrow className="mt-12">
          Explore our products
        </Button>
      </div>
    </section>
  )
}
