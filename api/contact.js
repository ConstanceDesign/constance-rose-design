const nodemailer = require('nodemailer')
const LeoProfanity = require('leo-profanity')

LeoProfanity.loadDictionary()

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  try {
    const {
      first_name = '',
      last_name = '',
      reply_to = '',
      phone = '',
      message = '',
      company = '',
    } = req.body || {}

    const firstName = first_name.trim()
    const lastName = last_name.trim()
    const email = reply_to.trim()
    const phoneNumber = phone.trim()
    const userMessage = message.trim()
    const honeypot = company.trim()

    if (honeypot) {
      return res.status(200).json({ ok: true })
    }

    if (!firstName || !lastName || !email || !userMessage) {
      return res.status(400).json({ error: 'Missing required fields.' })
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address.' })
    }

    const hadProfanity = LeoProfanity.check(userMessage)
    const finalMessage = hadProfanity
      ? LeoProfanity.clean(userMessage)
      : userMessage

    console.log('SMTP config check', {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      user: process.env.EMAIL_SERVER_USER,
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
    })

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 10000,
    })

    console.log('About to send email...')

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Portfolio contact from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phoneNumber || 'Not provided'}

${hadProfanity ? '[Filtered language detected]' : 'Message:'}
${finalMessage}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 16px;">New portfolio contact</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 0 0 16px;"><strong>Phone:</strong> ${phoneNumber || 'Not provided'}</p>
          <p style="margin: 0 0 8px;"><strong>${hadProfanity ? 'Filtered message' : 'Message'}:</strong></p>
          <p style="margin: 0;">${finalMessage.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    })

    console.log('Email sent successfully')

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('API contact error:', error)
    return res.status(500).json({
      error: error && error.message ? error.message : 'Failed to send message.',
    })
  }
}