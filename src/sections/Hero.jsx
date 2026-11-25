import heroImg from '../assets/figma/hero.webp'
import Button from '../components/Button'
import { stats } from '../data/content'
import CountUp from '../components/CountUp'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy lg:min-h-[794px]">
      <img src={heroImg} alt="" className="absolute inset-0 size-full object-cover" />
      {/* Dark top for legibility, fading into the brand blue at the bottom */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(12,18,30,0.86) 0%, rgba(12,18,30,0.72) 45%, rgba(8,58,105,0.62) 70%, rgba(0,133,202,0.97) 92%, rgb(0,133,202) 100%)',
        }}
      />

      <div className="relative mx-auto flex max-w-[1200px] flex-col px-4 pt-[150px] pb-14 lg:box-content lg:px-[120px] lg:pt-[204px] lg:pb-[66px]">
        <h1
          data-reveal
          className="m-0 max-w-[1112px] text-[44px] leading-[1.14] font-medium tracking-[-1px] text-cream sm:text-[64px] lg:text-[85px] lg:tracking-[-2px]"
        >
          The critical materials powering an electrified world
        </h1>
        <p
          data-reveal
          style={{ '--d': '120ms' }}
          className="mt-[14px] mb-0 max-w-[1120px] text-[18px] leading-[26px] tracking-[-0.4px] text-cream lg:mt-[41px] lg:text-[20px] lg:leading-[28px]"
        >
          From rare earth separation to finished magnets, Neo delivers a secure, global supply of the advanced materials behind electric vehicles,
          clean energy and robotics.
        </p>
        <div data-reveal style={{ '--d': '220ms' }} className="mt-[22px] flex flex-wrap gap-[11px] lg:mt-[26px]">
          <Button href="#what-we-make" arrow>
            Explore our business
          </Button>
          <Button href="#investors" variant="outlineWhite">
            Invest Overview
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 lg:mt-[66px] lg:grid-cols-[286px_286px_286px_342px] lg:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ '--d': `${300 + i * 80}ms` }}
              className="h-[87px] border-t border-[rgba(244,243,240,0.31)]"
            >
              <p className="m-0 pt-[19px] text-[34px] leading-[37.4px] font-medium tracking-[-1.02px] text-[#f4f3f0]"><CountUp value={s.value} /></p>
              <p className="m-0 mt-[11px] text-[13px] leading-[19.5px] text-white">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
