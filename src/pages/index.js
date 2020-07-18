import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from '../components/card'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Travel the world <br />with a new perspective</h1>
        <p>Read travel stories crafted with love from the Land Down Under. Embrace an adventure of mind without buying plane tickets.</p>
        <Link to="/video">Watch the video</Link>
        <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none">
          <path fill="white">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" 
          
            values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
            
            M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;
            
            M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
            
            M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z"/>
          </path>
        </svg>
      </div>
    </div>
    <div className='Cards'>
      <h2>Travel stories, more to come</h2>
      <div className='CardGroup'>
        <Card
          title='🇻🇳 Vietnam'
          text='2 stories'
          image={require('../images/wallpaper.jpg')}/>
        <Card
          title='🇸🇬 Singapore'
          text='2 stories'
          image={require('../images/wallpaper.jpg')}/>
        <Card
          title='🍣 Japan'
          text='3 stories'
          image={require('../images/wallpaper.jpg')}/>
        <Card
          title='🦘 Australia'
          text='2 stories'
          image={require('../images/wallpaper.jpg')}/>
        <Card
          title='🇮🇩 Indonesia'
          text='1 story'
          image={require('../images/wallpaper.jpg')}/>
        <Card
          title='💭 Thought'
          text='2 stories'
          image={require('../images/wallpaper.jpg')}/>
      </div>
    </div>
  </Layout>
)

export default IndexPage

