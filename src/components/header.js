import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

class Header extends React.Component {
  constructor (props) {
      super();

      this.state = {
        hasScrolled: false
      }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img width="40" src={require('../images/logo-wandrlens.svg')} /></Link>
          <Link to="/stories">Stories</Link>
          <Link to="/galleries">Galleries</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
