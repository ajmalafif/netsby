import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import tachyons from 'tachyons-components'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import '../styles/main.scss'


const StyledBody = tachyons("div")`
ph4-ns
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Inter UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 36px;
    font-weight: normal;
  }

  h3 {
    font-size: 20px;
    font-weight: normal;
  }

  ul {
    padding: 0;
  }

  .bg-primary {
    background-color: #0055ff;
  }

  .bg-secondary {
    background-color: rgba(0, 85, 255, 0.03);
  }

  .br-secondary {
    border: 1px solid #0055ff;
  }

  .bs-secondary {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  }

  .wrap {
    position: relative;
    margin: 0 auto;
    max-width: 980px;
  }

  .blog article .link,
  .blog article .link:visited {
    color: #000;
    background-color: rgba(0, 0, 0, 0.03);
  }

  .logo {
    font-size: 1rem;
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    box-shadow: 0 0 2px rgba(0, 85, 255, 0.5);
    border: 1px solid rgba(0, 85, 255, 0.03);
    outline: none;
  }

  a.active {
    color: #05f;
    font-weight: 600;
    background-color: rgba(0,85,255,.03);
    border-bottom: 1px solid rgba(0,85,255, 0.1);
    text-decoration: none;
  }

  a.bg-primary:focus,
  a.bg-primary:hover,
  button:focus,
  button:hover {
    background-color: #04c;
  }

  a.bg-secondary {
    color: #04c;
  }

  a.bg-secondary:focus,
  a.bg-secondary:hover {
    background-color: rgba(0, 85, 255, 0.09);
  }

  nav li:last-child {
    margin-right: 0;
  }

  .blog a.link:hover,
  .blog a:hover,
  .post a:hover,
  nav a:hover {
    color: #05f;
  }

  .blog .link,
  .blog .link:visited {
    color: #222;
    background-color: rgba(0,0,0,.03);
  }

  footer .link,
  footer .link:visited {
    color: #555 !important;
    background-color: transparent !important;
  }

  footer a.link:hover,
  footer a:hover {
    color: #05f !important;
  }

  .blog .link-primary,
  .blog .link-primary:visited {
    color: #05f;
    background-color: rgba(0, 85, 255, 0.03);
    border-bottom: 1px solid rgba(0, 85, 255, 0.1);
  }

  @media screen and (min-width: 30em) {
    .btn-paginate + .btn-paginate {
      margin-left: 1.125rem;
    }
  }

  @media screen and (max-width: 30em) {
    nav li:last-child {
      margin-right: 0.5rem;
    }
    .logo {
      font-size: 1.125rem;
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
	
	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#0055ff" />
	        <meta name="theme-color" content="#0055ff" />

	        <meta property="og:type" content="website" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:title" content={data.site.siteMetadata.description} />
          <meta property="og:url" content={data.site.siteMetadata.siteURL} />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </StyledBody>
    )}
  />
)

export default TemplateWrapper
