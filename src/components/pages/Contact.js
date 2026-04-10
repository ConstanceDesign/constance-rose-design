import { Helmet } from 'react-helmet-async'
import React, { useRef, useState } from 'react'
import '../../assets/styles/index.scss'
import Avatar from '../../assets/images/contact-portrait.jpg'

const initialErrors = {
  first_name: '',
  last_name: '',
  reply_to: '',
  message: '',
}

const bannedWords = [
  'fuck',
  'shit',
  'bitch',
  'asshole',
  'cunt',
  'motherfucker',
  'fucker',
]

function containsProfanity(text = '') {
  const lower = text.toLowerCase()
  return bannedWords.some((word) => lower.includes(word))
}

export default function Contact() {
  const form = useRef(null)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState(initialErrors)

  const validateForm = () => {
    const newErrors = { ...initialErrors }

    const firstName = form.current?.first_name?.value?.trim() || ''
    const lastName = form.current?.last_name?.value?.trim() || ''
    const email = form.current?.reply_to?.value?.trim() || ''
    const message = form.current?.message?.value?.trim() || ''

    if (!firstName) newErrors.first_name = 'Please enter your first name.'
    if (!lastName) newErrors.last_name = 'Please enter your last name.'

    if (!email) {
      newErrors.reply_to = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.reply_to = 'Please enter a valid email address.'
    }

    if (!message) {
      newErrors.message = 'Please enter a message.'
    } else if (containsProfanity(message)) {
      newErrors.message = 'Please keep your message professional.'
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    setStatus('idle')

    if (!validateForm()) {
      setStatus('error')
      return
    }

    const payload = {
      first_name: form.current?.first_name?.value?.trim() || '',
      last_name: form.current?.last_name?.value?.trim() || '',
      reply_to: form.current?.reply_to?.value?.trim() || '',
      phone: form.current?.phone?.value?.trim() || '',
      message: form.current?.message?.value?.trim() || '',
      company: form.current?.company?.value?.trim() || '',
    }

    try {
      setStatus('sending')

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Message could not be sent.')
      }

      setStatus('success')
      setErrors(initialErrors)
      form.current.reset()
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
    }
  }

  const handleClear = () => {
    if (form.current) {
      form.current.reset()
      setErrors(initialErrors)
      setStatus('idle')
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact | Constance Rose Zonta, RGD</title>
        <meta
          name="description"
          content="Contact Constance Rose Zonta, RGD, Full-Stack Developer and Registered Graphic Designer based in the Greater Toronto Area."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://constance.design/contact" />
      </Helmet>

      <main className="contact-page responsive-cont" id="main-content">
        <section className="contact-layout" aria-labelledby="contact-title">
          <div className="contact-layout__inner">
            <aside
              className="contact-portrait-wrap"
              aria-label="Portrait of Constance Rose Zonta"
            >
              <div className="contact-portrait-card">
                <img
                  className="contact-portrait"
                  src={Avatar}
                  alt="Portrait of Constance Rose Zonta"
                />
              </div>

              <div className="contact-portrait-meta">
                <p className="contact-portrait-meta__item">
                  <span className="contact-portrait-meta__label">Constance Zonta, RGD</span>
                  Full-stack developer with 20+ years in graphic design across print and web. Professionally published illustrator.
                </p>

                <p className="contact-portrait-meta__item">
                  <span className="contact-portrait-meta__label">Based in</span>
                  Greater Toronto Area, Ontario, Canada
                </p>

                <p className="contact-portrait-meta__item">
                  <span className="contact-portrait-meta__label">Work types</span>
                  Full-time and contract
                </p>
              </div>
            </aside>

            <div className="contact-primary">
              <p className="contact-kicker">Let&apos;s Work Together</p>

              <h1 id="contact-title" className="contact-title">
                Contact
                <br />
                Constance
              </h1>

              <h2 className="contact-subtitle">
                For roles, collaborations,
                <br />
                and select freelance projects
              </h2>

              <p className="contact-summary">
                I’m open to local and remote opportunities. If you think I could be a strong fit for your team, build, or any other type of creative gig, feel free to reach out.
              </p>
            </div>

            <div className="contact-secondary">
              <div className="contact-form-panel">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="contact-form"
                  noValidate
                  aria-describedby="contact-form-description"
                >
                  <p id="contact-form-description" className="sr-only">
                    Use this form to send a message to Constance Rose Zonta.
                  </p>

                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </div>

                  <div className="contact-form__grid">
                    <div className="form-field">
                      <label htmlFor="firstName">
                        First Name <span className="form-required" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="first_name"
                        autoComplete="given-name"
                        aria-required="true"
                        aria-invalid={errors.first_name ? 'true' : 'false'}
                        aria-describedby={errors.first_name ? 'firstName-error' : undefined}
                      />
                      {errors.first_name && (
                        <p id="firstName-error" className="field-error" role="alert">
                          {errors.first_name}
                        </p>
                      )}
                    </div>

                    <div className="form-field">
                      <label htmlFor="lastName">
                        Last Name <span className="form-required" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="last_name"
                        autoComplete="family-name"
                        aria-required="true"
                        aria-invalid={errors.last_name ? 'true' : 'false'}
                        aria-describedby={errors.last_name ? 'lastName-error' : undefined}
                      />
                      {errors.last_name && (
                        <p id="lastName-error" className="field-error" role="alert">
                          {errors.last_name}
                        </p>
                      )}
                    </div>

                    <div className="form-field form-field--full">
                      <label htmlFor="email">
                        Email <span className="form-required" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="reply_to"
                        autoComplete="email"
                        inputMode="email"
                        aria-required="true"
                        aria-invalid={errors.reply_to ? 'true' : 'false'}
                        aria-describedby={errors.reply_to ? 'email-error' : undefined}
                      />
                      {errors.reply_to && (
                        <p id="email-error" className="field-error" role="alert">
                          {errors.reply_to}
                        </p>
                      )}
                    </div>

                    <div className="form-field form-field--full">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                      />
                    </div>

                    <div className="form-field form-field--full">
                      <label htmlFor="message">
                        Message <span className="form-required" aria-hidden="true">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        autoComplete="off"
                        aria-required="true"
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      />
                      {errors.message && (
                        <p id="message-error" className="field-error" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="contact-form__actions">
                    <button
                      type="submit"
                      className="btnn-hover color-8"
                      disabled={status === 'sending'}
                      aria-disabled={status === 'sending'}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>

                    <button
                      type="button"
                      className="btnn-hover btnn-hover--secondary"
                      onClick={handleClear}
                    >
                      Clear
                    </button>
                  </div>

                  {status === 'success' && (
                    <p className="form-status form-status--success" role="status">
                      Thanks, your message has been sent. I typically respond within 1 to 2 business days.
                    </p>
                  )}

                  {status === 'error' && !Object.values(errors).some(Boolean) && (
                    <p className="form-status form-status--error" role="alert">
                      Sorry, your message could not be sent. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}