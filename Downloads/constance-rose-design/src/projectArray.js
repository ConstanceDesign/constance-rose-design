import marketMaestro from './assets/thumbnails/market-maestro.png'
import UFT from './assets/thumbnails/uft.png'
import companyDatabase from './assets/thumbnails/company-database.png'
import techInit from './assets/thumbnails/tech-init.png'
import doer from './assets/thumbnails/doer.png'
import securePassword from './assets/thumbnails/secure-password.png'
import noteTaker from './assets/thumbnails/note-taking-app.png'
import weatherApp from './assets/thumbnails/weather-app.png'
import socialOrbit from './assets/thumbnails/social-orbit.png'
import finishLine from './assets/thumbnails/finish-line.png'
import { v4 as uuidv4 } from 'uuid'

const images = [
  {
    id: uuidv4(),
    image: marketMaestro,
    name: 'Market Maestro',
    repo: 'https://github.com/ConstanceDesign/MarketMaestro',
    link: 'https://constancedesign.github.io/MarketMaestro',
  },
  {
    id: uuidv4(),
    image: UFT,
    name: 'UFT',
    repo: 'https://github.com/ConstanceDesign/final-project',
    link: 'https://frozen-inlet-62135.herokuapp.com',
  },
  {
    id: uuidv4(),
    image: techInit,
    name: 'Tech Init Easy',
    repo: 'https://github.com/ConstanceDesign/tech-init-easy',
    link: 'https://tech-init-easy.herokuapp.com/',
  },
  {
    id: uuidv4(),
    image: socialOrbit,
    name: 'Social Orbit',
    repo: 'https://github.com/ConstanceDesign/social-orbit',
  },
  {
    id: uuidv4(),
    image: doer,
    name: 'Doer',
    repo: 'https://github.com/ConstanceDesign/Doer',
    link: 'https://constancedesign.github.io/Doer/',
  },
  {
    id: uuidv4(),
    image: securePassword,
    name: 'Secure Password',
    repo: 'https://github.com/ConstanceDesign/secure-password-generator',
    link: 'https://constancedesign.github.io/secure-password-generator/',
  },
  {
    id: uuidv4(),
    image: noteTaker,
    name: 'Note Taker',
    repo: 'https://github.com/ConstanceDesign/note-taking-app',
    link: 'http://note-taking-app-32778.herokuapp.com/',
  },
  {
    id: uuidv4(),
    image: weatherApp,
    name: 'Weather App',
    repo: 'https://github.com/ConstanceDesign/sunnydayz-n-stormynightz',
    link: 'https://constancedesign.github.io/sunnydayz-n-stormynightz/',
  },
  {
    id: uuidv4(),
    image: finishLine,
    name: 'Finish Line',
    repo: 'https://github.com/ConstanceDesign/FinishLine',
    link: 'https://constancedesign.github.io/FinishLine/',
  },
  {
    id: uuidv4(),
    image: companyDatabase,
    name: 'Company DB',
    repo: 'https://github.com/ConstanceDesign/company-database',
    link: 'https://constancedesign.github.io/company-database/',
  },
]

export default images
