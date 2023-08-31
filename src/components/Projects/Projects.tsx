import Link from 'next/link'
import './Projects.scss'

const Projects = () => {
  return (
    <section className="projects">
      <h3 className="projects__title">/Projects</h3>
      <div className="projects__grid">
        <Link
          href="https://harmony-estates.vercel.app/"
          className="projects__grid-item harmony"
        >
          <h4 className="projects__name">Harmony Estates</h4>
        </Link>

        <Link
          href="https://nissan-dashboard.vercel.app/"
          className="projects__grid-item nissan"
        >
          <h4 className="projects__name">Nissan Dashboard</h4>
        </Link>
        <Link
          href="https://therapist-webpage.vercel.app/"
          className="projects__grid-item therapy"
        >
          <h4 className="projects__name">John Doe Therapyst</h4>
        </Link>
      </div>
    </section>
  )
}

export default Projects
