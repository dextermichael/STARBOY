import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src="" width="30/>" />
      </Link>
      <Link to="/About">About</Link>
      <Link to="/covers">Covers</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

export default Header
