import React from 'react'
import Link from 'gatsby-link'
import Wave from '../components/Wave'
import Card from '../components/Card'

const Projects = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Projects</h1>
        <p>Follow our journey</p>
        <p>As we build something great!</p>

        <Card
          title=" Getting Started"
          image={require('../images/wallpaper8.jpg')}
        />

        <Wave />
      </div>
    </div>
  </div>
)

export default Projects
