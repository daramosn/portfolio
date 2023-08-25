import AboutMe from '@/components/AboutMe/AboutMe'
import Contact from '@/components/Contact/Contact'
import Hero from '@/components/Hero/Hero'
import Navbar from '@/components/Navbar/Navbar'
import Projects from '@/components/Projects/Projects'
import Stack from '@/components/Stack/Stack'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Stack />
      <AboutMe />
      <Contact />
    </>
  )
}
