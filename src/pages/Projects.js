import React from 'react'
import Link from 'gatsby-link'
import Wave from '../components/Wave'
import Card from '../components/Card'

const Projects = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Projects</h1>
        <p>Learning is a journey</p>

        <div className="CardGroup">
          <Card
            title=" Music during the Quaratine"
            image={require('../images/wallpaper9.jpg')}
          />
        </div>

        <Wave />
      </div>
    </div>
  </div>
)

export default Projects
