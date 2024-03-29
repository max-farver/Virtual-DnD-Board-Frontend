import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <SEO title="Home" />
      <div id="home-logo"></div>
      <div id="home-nav">
        <ul>
          <li>
            <Link>My Games</Link>
          </li>
          <li>
            <Link>Create a Game</Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
        </ul>
      </div>

      {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/example-page/">Go to page 2</Link> */}
    </>
  )
}

export default IndexPage
