import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Welcome to <br /> STAR BOY!!
        </h1>
        <p>Follow our journey</p>
        <p>As we build something great!</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
