import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import '../../assets/styles/index.scss'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Constance Rose Zonta, RGD | Full-Stack Developer · UX/UI · Design + Development Hybrid</title>
        <meta
          name="description"
          content="Constance Rose Zonta, RGD is a full-stack developer with a background in design, UX/UI, publishing, ecommerce, and digital systems."
        />
        <link rel="canonical" href="https://constance.design/" />
      </Helmet>

      <main className="home-page responsive-cont" id="main-content">
        <section className="home-hero" aria-labelledby="home-title">
          <div className="home-hero__inner">
            <div className="home-hero__content">
              <p className="home-kicker">Constance Rose Zonta, RGD</p>

             <h1 id="home-title" className="home-title">
  Design <span className="home-title__plus">+</span> Development Hybrid
</h1>

              <h2 className="home-subtitle">
                Full-Stack Developer building refined digital experiences
              </h2>

              <p className="home-summary">
    Full-stack developer and Registered Graphic Designer with experience across
    eCommerce, web, UX/UI, and digital systems.
    I build clean, accessible, high-performing responsive applications using React and
    TypeScript, combining strong visual communication with technical precision.
              </p>

              {/* <p className="home-supporting-line">
                Selected work across financial platforms, eCommerce, and digital systems.
              </p> */}

              <div className="home-cta-group">
                <Link
                  to="/projects"
                  className="btnn-hover color-8"
                  aria-label="View selected work"
                >
                  Explore Work
                </Link>

                <Link
                  to="/contact"
                  className="btnn-hover btnn-hover--secondary"
                  aria-label="Click to start a project with Constance Rose Zonta"
                >
                  Start a Project
                </Link>
              </div>
            </div>

            <aside
              className="home-hero__art"
              aria-label="Illustration placeholder for rose in planter pot"
            >
              <div className="home-art-placeholder">
                <div className="home-art-placeholder__inner">
                  <span className="home-art-placeholder__label">Illustration Placeholder</span>
                  <p className="home-art-placeholder__text">
                    Beggarstaff / woodcut style rose in planter pot
                    <br />
                    with subtle design, code, and UX/UI references
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  )
}