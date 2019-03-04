import React from "react"
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'
import Layout from '../../components/Layout'

const BackLink = tachyons(Link)`
link fw6
`

const NotFoundPage = () => (
  <Layout>
    <section className="blog w-100 wrap mt4 mt5-ns ph3 ph0-ns pt3-ns">
      <h1 className="f3 fw6 mb2">Error 404</h1>
      <p>The page you're looking for is no longer exist.</p>
      <BackLink to="/">← Back to Home</BackLink>
    </section>
  </Layout>
)

export default NotFoundPage
