import React from 'react'
import { Helmet } from 'react-helmet-async'
import images from '../../projectArray'
import '../../assets/styles/index.scss'

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Development | Constance Rose Zonta, RGD</title>
        <meta
          name="description"
          content="Selected development work by Constance Rose Zonta, RGD. Full-stack development with strong visual thinking, responsive structure, and polished front-end execution."
        />
        <link rel="canonical" href="https://constance.design/projects" />
      </Helmet>

      <main className="projects-page responsive-cont" id="main-content">
        <section className="projects-showcase" aria-label="Featured project">
          <div className="projects-showcase__inner">
            {images.map((project) => (
              <article className="project-feature" key={project.id}>
                <div className="project-feature__media">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-feature__image-link"
                    aria-label={`Open live project: ${project.name}`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.name} preview`}
                      className="project-feature__image"
                    />
                  </a>
                </div>

                <div className="project-feature__content">
                  <p className="project-feature__eyebrow">{project.category}</p>

                  <h1 className="project-feature__title">{project.name}</h1>

                  <p className="project-feature__summary">{project.summary}</p>

                  <p className="project-feature__stack">{project.stack}</p>

                  <div className="project-feature__actions">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btnn-hover color-8"
                      aria-label={`View live project: ${project.name}`}
                    >
                      View Live
                    </a>

                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="btnn-hover btnn-hover--secondary"
                      aria-label={`View GitHub repository for ${project.name}`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}