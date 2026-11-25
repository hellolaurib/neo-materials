import Button from '../components/Button'
import ScrollFillText from '../components/ScrollFillText'
import factory from '../assets/figma/factory-wide.webp'

export default function Intro() {
  return (
    <>
      <section id="about" className="bg-white px-4 pt-14 pb-10 lg:px-[119px] lg:pt-[65px] lg:pb-12">
        <div className="mx-auto flex max-w-[1202px] flex-col gap-6 lg:flex-row lg:gap-[139px]">
          <p className="m-0 shrink-0 text-[16px] leading-5 tracking-[-0.32px] text-muted lg:w-[172px]">→ WHAT WE MAKE</p>
          <div className="lg:w-[891px]">
            <ScrollFillText
              text="Neo is a global public company that turns rare earths and rare metals into the magnets and advanced materials modern technology depends on. We are not a mining company: we separate, refine, recycle and manufacture."
              className="m-0 text-[32px] leading-[40px] font-medium tracking-[-1px] lg:text-[52px] lg:leading-[62px] lg:tracking-[-2px]"
            />
            <Button href="#about" variant="link" arrow className="mt-5 -ml-6">
              About Neo
            </Button>
          </div>
        </div>
      </section>

      <div className="h-[260px] overflow-hidden sm:h-[360px] lg:h-[481px]">
        <img src={factory} alt="Inside a Neo magnet production facility" className="size-full object-cover" loading="lazy" />
      </div>
    </>
  )
}
