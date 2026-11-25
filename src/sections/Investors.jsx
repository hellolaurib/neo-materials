import arrowBlue from '../assets/figma/arrow-blue.svg'
import presentation from '../assets/figma/investor-presentation.webp'
import Button from '../components/Button'
import { investorLinks } from '../data/content'

export default function Investors() {
  return (
    <section id="investors" className="bg-[#f9f9f9] px-4 py-14 lg:px-[80px] lg:pt-[86px] lg:pb-[88px]">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[600px_600px] lg:justify-between lg:gap-0">
        <div className="flex flex-col">
          <h2
            data-reveal
            className="m-0 text-[32px] leading-[normal] font-medium tracking-[-1.5px] text-ink-2 lg:mt-[10px] lg:max-w-[586px] lg:text-[40px] lg:tracking-[-2px]"
          >
            Record performance, raised guidance
          </h2>
          <p data-reveal className="mt-5 mb-0 text-[18px] leading-7 tracking-[-0.4px] text-[#585c62] lg:mt-[35px] lg:max-w-[518px] lg:text-[20px]">
            Q3 2026 revenue of $193.6M and Adjusted EBITDA of $47M. Neo pays a quarterly dividend and is listed on the Toronto Stock Exchange.
          </p>

          <ul className="mt-8 mb-0 list-none border-t border-[rgba(108,112,117,0.4)] p-0 lg:mt-[46px]">
            {investorLinks.map((label) => (
              <li key={label} className="border-b border-[rgba(108,112,117,0.4)]">
                <a href="#investors" className="group flex h-[77px] items-center justify-between gap-4 text-ink-2">
                  <span className="text-[22px] leading-7 tracking-[-0.56px] transition-colors group-hover:text-principal lg:text-[28px]">{label}</span>
                  <span className="flex h-[44px] w-[48px] shrink-0 items-center justify-center rounded-[11px] transition-colors group-hover:bg-principal/10">
                    <img src={arrowBlue} alt="" width="20" height="20" className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-[11px] lg:mt-[55px]">
            <Button href="#investors" arrow>
              Download corporate presentation
            </Button>
            <Button href="#investors" variant="outlineBlue" className="w-full sm:w-[228px]">
              Invest Center
            </Button>
          </div>
        </div>

        <div data-reveal className="overflow-hidden rounded-[20px] bg-[#f4f3f0] lg:h-[667px]">
          <img
            src={presentation}
            alt="Neo investor presentation, printed and open"
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>
  )
}
