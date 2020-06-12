import React from 'react'
import Link from 'gatsby-link'
import Wave from '../components/Wave'

const Projects = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Projects</h1>
        <p>Follow our journey</p>
        <p>As we build something great!</p>

        <Wave />
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Projects
