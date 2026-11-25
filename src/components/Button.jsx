import arrowWhite from '../assets/figma/arrow-white.svg'
import arrowBlue from '../assets/figma/arrow-blue.svg'

// Figma "Buttons" component: 16/20 Geist, px-24 py-16, radius 8.
const variants = {
  primary: 'bg-principal text-white hover:bg-[#0074b0]',
  outlineWhite: 'border border-white text-white hover:bg-white/10',
  outlineBlue: 'border border-principal text-principal hover:bg-principal/5',
  white: 'bg-white text-principal hover:bg-white/90',
  link: 'text-principal underline underline-offset-[3px] hover:no-underline',
}

export default function Button({ as: Tag = 'a', variant = 'primary', arrow = false, className = '', children, ...props }) {
  const arrowSrc = variant === 'primary' || variant === 'outlineWhite' ? arrowWhite : arrowBlue
  return (
    <Tag
      className={`group inline-flex items-end justify-center gap-2 rounded-[8px] px-6 py-4 text-[16px] leading-[20px] tracking-[-0.32px] whitespace-nowrap transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <img src={arrowSrc} alt="" width="20" height="20" className="transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Tag>
  )
}
