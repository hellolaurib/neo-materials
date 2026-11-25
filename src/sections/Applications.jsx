import Button from '../components/Button'
import { applications } from '../data/content'

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
          <li
            key={a.title}
            data-reveal
            style={{ '--d': `${i * 60}ms` }}
            className="group grid gap-3 border-b border-[#d9d9d9] px-2 py-6 transition-colors duration-300 hover:bg-[#f7f9fb] lg:h-[136px] lg:grid-cols-[660px_1fr] lg:gap-0 lg:px-6 lg:py-0"
          >
            <div className="lg:pt-6">
              <p className="m-0 text-[30px] leading-9 font-medium tracking-[-1px] text-muted opacity-50">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="m-0 mt-2 text-[26px] leading-[normal] font-medium tracking-[-1.5px] text-ink transition-colors group-hover:text-principal lg:mt-[15px] lg:text-[32px] lg:tracking-[-2px]">
                {a.title}
              </h3>
            </div>
            <p className="m-0 text-[16px] leading-5 tracking-[-0.32px] text-muted lg:max-w-[580px] lg:pt-[66px]">{a.text}</p>
          </li>
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
