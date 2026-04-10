# Constance Rose Design

A React portfolio site for Constance Zonta, RGD, built to showcase design, front-end development, and project work in one place.

## Overview

This site is a personal portfolio and contact platform. It highlights visual design work, development capability, and a custom contact form powered by a serverless API route.

## Features

- React-based front end
- Custom portfolio and project pages
- Contact form with client-side validation
- Vercel serverless API endpoint for form submission
- Nodemailer email handling
- Profanity filtering
- Environment-variable-based SMTP configuration
- Responsive layout and custom SCSS styling
- Custom domain support

## Tech Stack

- React
- React Router
- SCSS
- React Helmet Async
- Nodemailer
- leo-profanity
- Vercel

## Project Structure

```bash
api/        # Serverless functions
public/     # Static assets
src/        # React app source

Contact Form

The contact form submits to a Vercel serverless function located at:

/api/contact.js

It includes:
	•	required field validation
	•	email format validation
	•	honeypot spam protection
	•	profanity filtering
	•	SMTP email delivery through Porkbun mail settings

Environment Variables

Set these in Vercel for production:

EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_FROM=
EMAIL_TO=

Do not commit private credentials to the repository.

Development

Install dependencies:

npm install

Run locally:

npm start

Build for production:

npm run build

Deployment

This project is deployed on Vercel and connected to a custom domain.

Author

Constance Zonta, RGD
Full-Stack Developer + Registered Graphic Designer
Greater Toronto Area, Ontario, Canada

A couple quick notes:
- add `.env` to your `.gitignore`
- do not leave your real password inside README or `.env` before pushing