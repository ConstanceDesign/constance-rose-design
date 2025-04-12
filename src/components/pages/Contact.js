import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../../assets/styles/index.scss'
import AnimatedLetters2 from '../AnimatedLetters2'
import Avatar from '../../assets/images/avatar-2.png'

export default function Contact() {
  const [letterClass] = useState('text-animate-special')
  const [messageStatus, setMessageStatus] = useState('')
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
  
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_KEY
      )
      .then(
        () => {
          setMessageStatus('Message sent successfully!')
          e.target.reset()
        },
        () => {
          setMessageStatus('Sorry, your message failed to send. Try again.')
        }
      )
  }

  return (
    <div className="container contact-page responsive-cont">
      <div className="text-zone-contact">
        <img className="responsive-img" src={Avatar} alt="Constance" />
        <p className="contact-text">Like how I dev & design?</p>
        <p className="contact-text">Feel free to drop me a line!</p>
        <h3>
          <AnimatedLetters2
            letterClass={letterClass}
            strArray={[
              'C', 'o', 'n', 's', 't', 'a', 'n', 'c', 'e', ' ',
              'R', 'o', 's', 'e',
            ]}
            index={11}
          />
        </h3>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li className="first-name">
              <input
                placeholder="First Name"
                type="text"
                name="first_name"
                required
              />
            </li>
            <li className="half">
              <input
                placeholder="Last Name"
                type="text"
                name="last_name"
                required
              />
            </li>
            <li className="half">
              <input
                placeholder="Email"
                type="email"
                name="reply_to"
                required
              />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input
                type="submit"
                className="btnn-hover2 color-8"
                value="SEND"
              />
            </li>
          </ul>
        </form>
        {messageStatus && <p className="message-status">{messageStatus}</p>}
      </div>
    </div>
  )
}

