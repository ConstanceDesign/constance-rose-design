import McNeilly from './assets/thumbnails/mcneilly-homepage.jpg'
import { v4 as uuidv4 } from 'uuid'

const images = [
  {
    id: uuidv4(),
    image: McNeilly,
    name: 'McNeilly Financial Group',
    category: 'Featured Build',
    summary:
      'Financial services website and calculator build shaped around trust, responsiveness, and polished front-end execution.',
    stack: 'React · Typescript · Vite · Tailwind CSS · Material UI',
    repo: 'https://github.com/ConstanceDesign/mcneilly-financial-group-app',
    link: 'https://mcneilly-financial-group.vercel.app/',
  },
]

export default images