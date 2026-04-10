import React from 'react'
import SignatureBar from './SignatureBar'
import signatureMark from '../assets/images/signature-mark.svg'
import '../assets/styles/index.scss'

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__inner">
        <SignatureBar signatureSrc={signatureMark} />
        <p className="site-footer__copyright">© 2026 constance.design</p>
      </div>
    </footer>
  )
}