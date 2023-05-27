import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'
import Vision from '@/components/Vision'
import { Metadata } from 'next';
import Spacer from '@/components/spacer'
 
export const metadata: Metadata = {
  title: 'Olive Grove Christian School',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Spacer/>
      <About />
      <Spacer/>
      <Vision />
      <Spacer/>
      <Newsletter />
      <Spacer/>
      <Footer />
    </main>
  )
}
