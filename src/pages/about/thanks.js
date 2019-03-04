import React from "react"
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'
import Layout from '../../components/Layout'

const BackLink = tachyons(Link)`
link fw6
`

export default () => (
  <Layout>
    <section className="blog w-100 wrap mt4 mt5-ns ph3 ph0-ns pt3-ns">
      <h1 className="f3 fw6 mb2">Thank you!</h1>
      <p>I'll get back to you when I have the chance. You can also reach me on twitter, <a without rel="noopener noreferrer" target="_blank" className="link" href="https://twitter.com/ajmalafif">@ajmalafif</a>.</p>
      <BackLink to="/about/">← Back</BackLink>
    </section>
  </Layout>
);