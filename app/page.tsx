import About from './_components/About'
import Hero from './_components/Hero'
import Reviews from './_components/Reviews'
import Services from './_components/Services'

export default function Home() {
  return (
    <main>
      <div className="bg-white h-screen w-screen z-[-2] fixed" />
      <Hero />
      <About />
      <Services />
      <Reviews />
    </main>
  )
}
