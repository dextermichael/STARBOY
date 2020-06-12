import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import logo from '../images/starboy.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageXOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }
  render() {
    return (
      <div
        className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}
      >
        <div className="HeaderGroup">
          <Link to="/">
            <img src={logo} width="30" />
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
  }
}

export default Header
