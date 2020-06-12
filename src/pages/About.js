import React from 'react'
import Link from 'gatsby-link'
import Wave from '../components/Wave'

const About = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Welcome to <br /> THE STAR BOY BLOG
        </h1>
        <p>Follow our journey</p>
        <p>As we build something great!</p>

        <Wave />
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default About
