import factory from '../assets/figma/factory-wide.webp'
import Button from '../components/Button'

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative overflow-hidden px-4 pt-[81px] pb-14 text-center text-white lg:flex lg:h-[617px] lg:flex-col lg:items-center lg:justify-center">
      <div aria-hidden className="absolute inset-0">
        {/* Figma crop: image is 155.71% tall, offset -38.88% */}
        <img src={factory} alt="" loading="lazy" className="absolute top-[-38.88%] left-0 h-[155.71%] w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(175.63deg, rgb(0,133,202) 7.57%, rgba(0,133,202,0.5) 115.78%)' }}
        />
      </div>

      <div className="relative mx-auto flex max-w-[772px] flex-col items-center gap-[10px]">
        <p className="m-0 text-[14px] leading-[19.6px]">→ SUSTAINABILITY</p>
        <h2 data-reveal className="m-0 text-[34px] leading-[42px] font-medium tracking-[-1px] lg:py-[8px] lg:text-[52px] lg:leading-[62px] lg:tracking-[-2px]">
          Building blocks of a more sustainable world
        </h2>
        <p data-reveal style={{ '--d': '120ms' }} className="m-0 max-w-[678px] text-[18px] leading-7 font-medium tracking-[-0.4px] lg:py-[11px] lg:text-[20px]">
          Our materials make cleaner technologies possible, and we work to make how we produce them cleaner too.
        </p>
        <Button href="#sustainability" variant="outlineWhite">
          Read the sustainability report
        </Button>
      </div>
    </section>
  )
}
