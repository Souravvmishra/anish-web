import { AboutSection } from '@/components/main/about-anish'
import { ContactForm } from '@/components/main/contact-form'
import { LandingPage } from '@/components/main/landing'
import ProductsSection from '@/components/main/products-we-offer'
import { TestimonialsSection } from '@/components/main/testimonial'
import LogoWall from '@/components/ui/logo-wall'

const brands = [
  {
    altText: "Hindware Home",
    url: "http://www.hindwarehomes.com/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Hindware.jpg"
  },
  {
    altText: "Hindware Atlantic",
    url: "https://www.hindwareappliances.com/water-heaters/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Atlantis.jpg"
  },
  {
    altText: "Utkarsh India",
    url: "https://utkarshindia.in/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Utkarsh.jpg"
  },
  {
    altText: "Ajay Pipes",
    url: "http://www.ajaypipes.com/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Ajay.jpg"
  },
  {
    altText: "Water Tec India",
    url: "http://watertecindia.com/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Water_Tech.jpg"
  },
  {
    altText: "Sunsilk Ceramic Pvt. Ltd.",
    url: "http://www.suncera.com/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Suncera.jpg"
  },
  {
    altText: "Scud",
    url: "http://www.scud.in/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Scud.jpg"
  },
  {
    altText: "Pidilite",
    url: "http://www.pidilite.com/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Pidilite.jpg"
  },
  {
    altText: "Neon Poly Plast",
    url: "http://neonpolyplast.com/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Neon.jpg"
  },
  {
    altText: "Sinter Himgiri",
    url: "http://www.himgiritank.com/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Himgiri.jpg"
  },
  {
    altText: "Gupta",
    url: "#",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Gupta.jpg"
  },
  {
    altText: "Crompton",
    url: "http://www.crompton.co.in/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/Crompton.jpg"
  },
  {
    altText: "Futures Bath Product Pvt. Ltd.",
    url: "https://corsabath.in/",
    imgUrl: "https://www.anishenterprises.in/wp-content/uploads/2018/08/corsa.jpg"
  }
];


const page = () => {
  return (
    <>
      <div className='container px-4 mx-auto max-w-7xl py-8'>
        <LandingPage />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Brands we deal
        </h2>
        <LogoWall items={brands} />
        <AboutSection />
        <ProductsSection />
        <TestimonialsSection />
        <ContactForm />
      </div>
    </>
  )
}

export default page
