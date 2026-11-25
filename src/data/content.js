import bizMagnets from '../assets/figma/biz-magnets.webp'
import bizChemicals from '../assets/figma/biz-chemicals.webp'
import bizRareMetals from '../assets/figma/biz-rare-metals.webp'
import newsFeatured from '../assets/figma/news-featured.webp'
import news2 from '../assets/figma/news-2.webp'
import news3 from '../assets/figma/news-3.webp'
import appVehicle from '../assets/figma/app-vehicle.webp'
import appEnergy from '../assets/figma/app-energy.webp'
import appRobotics from '../assets/figma/app-robotics.webp'
import appPollution from '../assets/figma/app-pollution.webp'
import appAerospace from '../assets/figma/app-aerospace.webp'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What we make', href: '#what-we-make' },
  { label: 'Applications', href: '#applications' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'Investors', href: '#investors' },
  { label: 'News', href: '#news' },
]

export const stats = [
  { value: '$603M', label: 'Revenue' },
  { value: '$133m', label: 'EBITDA' },
  { value: '100K', label: 'Magnet Capacity' },
  { value: '30+', label: 'Years of expertise' },
]

export const businesses = [
  {
    image: bizMagnets,
    title: 'Magnequench',
    text: 'Rare earth magnetic powders and permanent magnets powering electric vehicles, robotics and AI data centres, now made in Europe.',
  },
  {
    image: bizChemicals,
    title: 'Chemicals and Oxides',
    text: 'Separated rare earth oxides and advanced chemicals for auto catalysts, water treatment, electronics and clean energy.',
  },
  {
    image: bizRareMetals,
    title: 'Rare metals',
    text: 'Gallium, hafnium, tantalum and other rare metals for superalloys, semiconductors and medical technologies.',
  },
]

export const applications = [
  {
    image: appVehicle,
    title: 'Vehicle electrification',
    text: "Our magnets power the traction motors of hybrid and electric vehicles, including the world's first heavy rare earth free traction motor.",
  },
  {
    image: appEnergy,
    title: 'Energy transition',
    text: 'Permanent magnets and advanced materials that help wind turbines and high-efficiency motors generate and use energy more efficiently.',
  },
  {
    title: 'AI and server cooling',
    text: 'Neo supplied 12 million magnets to AI data centres in 2025, keeping the cooling fans of high-performance servers running.',
  },
  {
    image: appRobotics,
    title: 'Robotics and automation',
    text: 'Bonded and sintered magnets for the joints, actuators and sensors that give industrial and humanoid robots precise movement.',
  },
  {
    image: appPollution,
    title: 'Air and water pollution control',
    text: 'Environmental catalysts and specialty materials that reduce vehicle emissions and help treat water for cleaner communities.',
  },
  {
    image: appAerospace,
    title: 'Aerospace',
    text: 'Hafnium and other rare metals for the superalloys inside jet engines, where materials must perform under extreme heat.',
  },
]

export const investorLinks = [
  'Latest results',
  'Reports and filings',
  'Events and webcast',
  'Dividends and share information',
]

export const news = {
  featured: {
    image: newsFeatured,
    alt: 'Robotic arms assembling a car chassis on a factory line',
    title: 'Neo Performance Materials Reports Third Quarter 2026 Results',
    text: "Adjusted EBITDA reached $57 million, the highest quarterly result in Neo's history, with strong performance across all three business units.",
  },
  items: [
    {
      image: news2,
      alt: '',
      title: 'Media Advisory – Third Quarter 2026 Earnings Release & Conference C',
      text: 'Neo manufactures the building blocks of many modern technologies that enhance efficiency and sustainability.',
    },
    {
      image: news3,
      alt: '',
      title: 'Neo’s European Integrated Magnet Project Selected for €126 Million Grant Under EU Innovation Fund',
      text: 'Neo’s project, co-funded by the Innovation Fund, would support an expanded rare earth magnet value chain in Estonia',
    },
  ],
}

export const footerColumns = [
  { title: 'What we make', width: 160, links: ['Magnequench', 'Chemicals and Oxides', 'Rare Metals'] },
  { title: 'Company', width: 160, links: ['About Neo', 'Applications', 'Sustainability', 'News', 'Careers'] },
  { title: 'Investors', width: 170, links: ['Investor centre', 'Latest results', 'Reports and filings', 'Events and webcast'] },
  {
    title: 'Contact',
    width: 230,
    links: ['121 King Street West, Suite 1740', 'Toronto, ON, Canada M5H 3T9', 'ir@neomaterials.com', '(416) 367 8588'],
  },
]
