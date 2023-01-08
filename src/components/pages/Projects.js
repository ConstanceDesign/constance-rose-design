import React from 'react'
import ProjectTile from '../ProjectTile'
import '../../assets/styles/index.scss'

<meta content="width=device-width, initial-scale=1" name="viewport" />

export default function Projects() {
  // const [letterClass] = useState('text-animate')
  return (
    <div className="container projects-page responsive-cont">
              {/* <h1>
              <span className={`${letterClass} _13 responsive-text`}>Front-End, Back-End, and Full Stack Projects</span>
        </h1> */}
      <div className="project-text-zone">
      </div>

      <div className="project flex-zone">
        <ProjectTile />
      </div>
    </div>
  )
}
