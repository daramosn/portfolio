import Link from 'next/link'

import './Hero.scss'

const Hero = () => {
  return (
    <main className="hero">
      <h3 className="hero__name">Hey, I'm Diego</h3>
      <h1 className="hero__title">Front-end developer</h1>
      <p className="hero__description">
        Code, create, captivate. Building user-centric experiences
      </p>

      <Link className="hero__button" href="#projects">
        See my work ⬇
      </Link>
    </main>
  )
}

export default Hero
