import React from 'react'
import '../assets/styles/index.scss'

export default function SignatureBar({ signatureSrc }) {
  return (
    <div className="signature-bar" aria-hidden="true">
      <div className="signature-bar__lineWrap">
        <span className="signature-bar__line" />
        <img src={signatureSrc} alt="" className="signature-bar__mark" />
      </div>
    </div>
  )
}