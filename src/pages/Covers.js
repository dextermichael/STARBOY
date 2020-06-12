import React from 'react'
import Link from 'gatsby-link'
import Wave from '../components/Wave'

const Covers = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Coming</h1>
        <p>
          Each Blog post Will have different comic book cover of that specific
          adventure!
        </p>

        <Wave />
      </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Covers
