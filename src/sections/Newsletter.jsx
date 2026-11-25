import { useState } from 'react'
import arrowBlue from '../assets/figma/arrow-blue.svg'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <section id="contact" className="bg-white px-4 pt-6 pb-16 lg:pt-[53px] lg:pb-[82px]">
      <div
        data-reveal
        className="mx-auto flex max-w-[1192px] flex-col gap-6 rounded-[24px] border border-white bg-principal px-6 py-10 text-white lg:min-h-[236px] lg:flex-row lg:items-center lg:gap-[37px] lg:px-[60px] lg:py-[63px]"
      >
        <div className="lg:w-[415px]">
          <h2 className="m-0 text-[34px] leading-[normal] font-medium tracking-[-2px] lg:text-[40px]">Stay informed</h2>
          <p className="m-0 text-[16px] leading-5 tracking-[-0.32px]">Investors alerts and company news, straight to your inbox.</p>
        </div>

        {sent ? (
          <p role="status" className="m-0 text-[18px] leading-7">
            Thanks! We’ll send investor alerts and news to <strong className="font-medium">{email}</strong>.
          </p>
        ) : (
          <form onSubmit={submit} className="flex flex-col gap-[14px] sm:flex-row sm:items-center">
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input
              id="nl-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="h-[52px] w-full rounded-[10px] border border-white bg-transparent px-[13px] font-sans text-[15px] leading-[1.5] tracking-[-0.3px] text-white outline-none placeholder:text-white focus:ring-2 focus:ring-white/60 sm:w-[374px]"
            />
            <button
              type="submit"
              className="group inline-flex cursor-pointer items-end justify-center gap-2 rounded-[8px] border-0 bg-white px-6 py-4 font-sans text-[16px] leading-5 tracking-[-0.32px] text-principal transition-colors hover:bg-white/90"
            >
              Subscribe
              <img src={arrowBlue} alt="" width="20" height="20" className="transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
