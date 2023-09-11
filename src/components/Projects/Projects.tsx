import Link from 'next/link'
import Image from 'next/image'

import harmony from '@/assets/images/harmony.png'
import nissan from '@/assets/images/nissan_frame2.png'
import therapist from '@/assets/images/therapist22_2.png'
import { ArrowUpRightIcon } from '@/assets/icons/ArrowUpRightIcon'

import './Projects.scss'

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h3 className="projects__title">/Projects</h3>

      <div className="projects__grid">
        <article className="card card--harmony">
          <Image src={harmony} alt="harmony-preview" className="card__image" />

          <div className="card__content">
            <Link
              href="https://harmony-estates.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="card__content-link"
            >
              <ArrowUpRightIcon className="card__content-icon" />
            </Link>

            <main>
              <h4 className="card__content-name">Harmony Estates</h4>
              <p className="card__content-description">
                Harmony is a web application developed for a real estate
                company, providing a platform for property listings and related
                services.
              </p>
            </main>
          </div>
        </article>

        <article className="card card--nissan">
          <Image src={nissan} alt="harmony-preview" className="card__image" />

          <div className="card__content">
            <Link
              href="https://nissan-dashboard.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="card__content-link"
            >
              <ArrowUpRightIcon className="card__content-icon" />
            </Link>

            <main>
              <h4 className="card__content-name">Nissan Dashboard</h4>
              <p className="card__content-description">
                Dashboard created for a test
              </p>
            </main>
          </div>
        </article>

        <article className="card card--therapist">
          <Image
            src={therapist}
            alt="harmony-preview"
            className="card__image"
          />

          <div className="card__content">
            <Link
              href="https://therapist-webpage.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="card__content-link"
            >
              <ArrowUpRightIcon className="card__content-icon" />
            </Link>

            <main>
              <h4 className="card__content-name">John Doe therapist</h4>
              <p className="card__content-description">
                Web designed to promote the services of a therapist. It provides
                information about the offered services, contact details, and
                additional resources related to therapy
              </p>
            </main>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects
