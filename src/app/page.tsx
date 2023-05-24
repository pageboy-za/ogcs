import Image from 'next/image'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Newsletter />
      <Footer />
    </main>
  )
}
