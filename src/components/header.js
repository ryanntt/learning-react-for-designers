import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img width="40" src={require('../images/logo-wandrlens.svg')} /></Link>
      <Link to="/stories">Stories</Link>
      <Link to="/galleries">Galleries</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
