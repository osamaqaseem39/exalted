import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Brands from '@/components/Brands'
import Products from '@/components/Products'
import WhyChooseUs from '@/components/WhyChooseUs'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import ContactUs from '@/components/ContactUs'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <Products />
      <AboutUs />
      <Brands />
      <WhyChooseUs />
      <HowItWorks />
      <CTA />
      <ContactUs />
      <Footer />
    </main>
  )
}

