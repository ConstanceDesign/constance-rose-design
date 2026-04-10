import React from 'react'
import '../../assets/styles/Direction.scss'

// Suggested future image imports:
// import ProfilePhoto from '../../assets/images/constance-zonta-portrait.jpg'
// import ProcessImage from '../../assets/images/process-detail.jpg'

const strengths = [
  'Front-end development with React',
  'Design / UX / UI thinking',
  'Strong visual judgment and hierarchy',
  'Steady with complexity and ambiguity',
  'Digital production and marketing experience',
  'Polished client-facing execution',
]

const quickFacts = [
  {
    label: 'Approach',
    value: 'Thoughtful, structured, practical',
  },
  {
    label: 'Focus',
    value: 'Front-end build, UX/UI, digital experiences',
  },
  {
    label: 'Style',
    value: 'Clean, editorial, human',
  },
  {
    label: 'Strength',
    value: 'Turning complexity into something clear',
  },
]

export default function direction() {
  return (
    <main className="direction-page">
      <section className="direction-hero" aria-labelledby="direction-title">
        <div className="direction-hero__content">
          <p className="direction-hero__eyebrow">direction</p>

          <h1 id="direction-title" className="direction-hero__title">
            <span className="direction-hero__title-accent">Design-minded</span>
            <span className="direction-hero__title-main">developer</span>
          </h1>

          <p className="direction-hero__lede">
            I build digital experiences that combine front-end development,
            strong visual judgment, and a practical understanding of how real
            projects need to work.
          </p>

          <div className="direction-hero__intro">
            <p>
              My background spans design, digital production, marketing, and
              front-end development. That range allows me to think beyond
              visuals alone. I care direction whether something feels clear,
              credible, and well made.
            </p>

            <p>
              I naturally step into leadership when it is needed. When others
              hesitate around complexity, I move toward it. I like sorting
              things out, bringing structure to the mess, and following
              through.
            </p>

            <p>
              I’m often brought into situations that others have struggled to
              resolve. Whether it is a challenging client or a problem that has
              stalled, I stay steady, work through it, and move things forward.
              I care direction getting to real outcomes, not just good intentions.
            </p>

            <p>
              I also genuinely like encouraging others and helping them see
              what is possible. I see myself as a creative-tech hybrid: someone
              who can think visually, build thoughtfully, and stay steady when
              the work gets complicated.
            </p>
          </div>
        </div>

        <aside
          className="direction-hero__media"
          aria-label="Portrait and supporting visual"
        >
          <figure className="media-card media-card--portrait">
            <div className="media-card__placeholder" aria-hidden="true">
              Add professional portrait here
            </div>
            {/*
            <img
              src={ProfilePhoto}
              alt="Portrait of Constance Zonta"
              className="media-card__image"
            />
            */}
            <figcaption>
              Suggested: a clean portrait with natural light, neutral styling,
              and a calm, confident expression.
            </figcaption>
          </figure>

          <figure className="media-card media-card--detail">
            <div className="media-card__placeholder" aria-hidden="true">
              Add workspace, process, sketch, or code image here
            </div>
            {/*
            <img
              src={ProcessImage}
              alt="Workspace detail showing design and development process"
              className="media-card__image"
            />
            */}
            <figcaption>
              Suggested: a supporting image that shows process — screen, notes,
              workspace detail, or a subtle branded visual.
            </figcaption>
          </figure>
        </aside>
      </section>

      <section className="direction-section" aria-labelledby="strengths-title">
        <div className="direction-section__heading">
          <p className="direction-section__eyebrow">Strengths</p>
          <h2 id="strengths-title">What I bring</h2>
        </div>

        <div className="strength-pill-grid" role="list" aria-label="Core strengths">
          {strengths.map((item) => (
            <div className="strength-pill" key={item} role="listitem">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        className="direction-section direction-section--split"
        aria-labelledby="working-style-title"
      >
        <div className="direction-copy">
          <p className="direction-section__eyebrow">Working Style</p>
          <h2 id="working-style-title">
            Steady under pressure. Strong with complexity.
          </h2>

          <p>
            Throughout my education and career, I have often been the person who
            steps forward when a project needs direction. Not because I need the
            spotlight, but because I am wired to organize, solve, and keep
            moving.
          </p>

          <p>
            I do some of my best work where design and development need to
            support each other closely. Product interfaces, marketing sites,
            content systems, and polished client-facing tools all appeal to me
            for the same reason: they demand both judgment and execution.
          </p>

          <p>
            I am resilient, capable, and comfortable finding my way through hard
            things. That has shaped how I lead, how I build, and how I show up.
          </p>
        </div>

        <div className="facts-panel" aria-label="Quick facts">
          {quickFacts.map((fact) => (
            <div className="fact-row" key={fact.label}>
              <span className="fact-row__label">{fact.label}</span>
              <span className="fact-row__value">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="direction-section" aria-labelledby="personality-title">
        <div className="direction-section__heading">
          <p className="direction-section__eyebrow">A Little More Personally</p>
          <h2 id="personality-title">The human side</h2>
        </div>

        <div className="personality-grid">
          <article className="personality-card">
            <h3>Leadership</h3>
            <p>
              In college, I was voted president of the Graphic Design Club by my
              peers. I did not campaign for it. People trusted me to lead.
            </p>
          </article>

          <article className="personality-card">
            <h3>Precision</h3>
            <p>
              An employer once noted my strong visual-spatial test score. That
              made sense to me. I have always had a sharp eye for detail,
              proportion, and structure.
            </p>
          </article>

          <article className="personality-card">
            <h3>Curiosity</h3>
            <p>
              My interests have never fit neatly into one box. Design, code,
              communication, systems, aesthetics, and problem-solving have
              always pulled together for me.
            </p>
          </article>

          <article className="personality-card">
            <h3>Perspective</h3>
            <p>
              I have been through enough to know that resilience is not a
              buzzword. It is a practice. It has made me stronger, steadier, and
              more resourceful.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}