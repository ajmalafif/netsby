import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import tachyons from 'tachyons-components'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Navbar.js'

const StyledBody = tachyons("div")`
ph4-ns
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }
  .wrap {
    position: relative;
    margin: 0 auto;
    max-width: 980px;
  }
  h1 {
    font-size: 36px;
    font-weight: 400;
    margin: 0;
  }
  section {
    @media screen and (min-width: 30em) {
    margin-top: 4rem;
    }
    margin-top: 2rem;
  }
  header {
    max-height: 85px;
  }
  nav {
    @media screen and (min-width: 30em) {
      padding-top: 16px;
      padding-bottom: 16px;
      width: 100%;
      max-height: 53px;
    }
  }
  nav h1 {
    @media screen and (min-width: 30em) {
      text-align: left;
      display: inline-block;
      font-size: 1.25rem;
      margin-top: 1rem;
      margin-bottom: 0;
      max-height: 22px;
      line-height: 20px;
      width: 25%;
    }
  }
  nav ul {
    @media screen and (min-width: 30em) {
      padding: 0;
      margin-top: 0;
      display: inline-block;
      text-align: right;
      width: 75%;
      max-height: 19px;
    }
  }
  nav li {
    @media screen and (min-width: 30em) {
      display: inline-block;
      margin-right: 32px;
      text-align: right;
    }
  }
  nav li a {
    @media screen and (min-width: 30em) {
      font-size: 16px;
    }
  }
  .w-50-ns {
    @media screen and (min-width: 30em) {
      width: 50%;
      float: left;
    }
  }
`;

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <StyledBody>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <GlobalStyle />
        <Navbar />
        <div>{children}</div>
      </StyledBody>
    )}
  />
)

export default TemplateWrapper
