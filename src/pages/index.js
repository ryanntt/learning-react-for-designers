import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Travel the world <br />with a new perspective</h1>
        <p>Read travel stories crafted with love from the Land Down Under. Embrace an adventure of mind without buying plane tickets.</p>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
