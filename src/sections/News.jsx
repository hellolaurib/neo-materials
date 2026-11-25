import Button from '../components/Button'
import { news } from '../data/content'

export default function News() {
  const { featured, items } = news
  return (
    <section id="news" className="bg-white px-4 pt-14 pb-16 lg:px-0 lg:pt-[79px] lg:pb-[59px]">
      <h2 data-reveal className="m-0 text-center text-[36px] leading-[44px] font-medium tracking-[-1.5px] text-ink lg:text-[52px] lg:leading-[62px] lg:tracking-[-2px]">
        Latest news
      </h2>

      <div className="mx-auto mt-10 grid max-w-[1198px] gap-12 lg:mt-[69px] lg:grid-cols-[573px_573px] lg:justify-between lg:gap-0">
        <article data-reveal className="group">
          <a href="#news" className="block h-[240px] overflow-hidden rounded-[24px] sm:h-[350px]">
            <img
              src={featured.image}
              alt={featured.alt}
              loading="lazy"
              className="size-full scale-[1.23] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.28]"
            />
          </a>
          <h3 className="mt-[29px] mb-0 text-[26px] leading-8 font-normal tracking-[-1px] text-ink lg:pr-[42px] lg:text-[30px] lg:leading-9">
            <a href="#news" className="hover:text-principal">
              {featured.title}
            </a>
          </h3>
          <p className="mt-[10px] mb-0 text-[17px] leading-[28.8px] text-muted lg:text-[18px]">{featured.text}</p>
          <Button href="#news" variant="link" arrow className="-mt-1 -ml-6">
            Read more
          </Button>
        </article>

        <div className="flex flex-col gap-10 lg:gap-[55px] lg:pt-[9px]">
          {items.map((it, i) => (
            <article
              key={it.title}
              data-reveal
              style={{ '--d': `${120 + i * 100}ms` }}
              className="group grid grid-cols-[120px_1fr] gap-5 sm:grid-cols-[239px_1fr] sm:gap-8"
            >
              <a href="#news" className="block h-[120px] overflow-hidden rounded-[24px] sm:h-[232px]">
                <img
                  src={it.image}
                  alt={it.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </a>
              <div className="pt-[15px] lg:w-[302px]">
                <h3 className="m-0 text-[20px] leading-[normal] font-normal tracking-[-1px] text-ink sm:text-[24px] sm:tracking-[-2px] lg:pr-[21px]">
                  <a href="#news" className="hover:text-principal">
                    {it.title}
                  </a>
                </h3>
                <p className="mt-[14px] mb-0 text-[16px] leading-5 tracking-[-0.32px] text-muted">{it.text}</p>
                <a href="#news" className="mt-[7px] inline-block text-[16px] leading-5 tracking-[-0.32px] text-principal underline underline-offset-[3px] hover:no-underline">
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
