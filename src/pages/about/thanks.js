import React from 'react'
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'
import Layout from '../../components/Layout'
import Helmet from 'react-helmet'

const BackLink = tachyons(Link)`
link fw6
`

const PageWrapper = tachyons(`div`)`
wrap ph3 ph0-ns
`

const PageSection = tachyons(`section`)`
blog w-100 pt3-ns mt4 mt5-ns
`

const PageHeader = tachyons(`h1`)`
f3 fw6 mb2
`


export default () => (
  <Layout>
    <Helmet
      titleTemplate="Thank you for reaching out | Ajmal Afif">
      <meta name='robots' content='noindex' />
      </Helmet>
    <PageWrapper>
    <PageSection>
      <PageHeader>Thank you!</PageHeader>
      <p>I'll get back to you when I have the chance. You can also reach me on twitter, <a rel="noopener noreferrer" target="_blank" className="link" href="https://twitter.com/ajmalafif">@ajmalafif</a>.</p>
      <p className="lh-copy">
      <BackLink to="/about/">← Back</BackLink>
      </p>
      <p className="lh-copy">
      <BackLink to="/blog/">← Check out my articles</BackLink>
      </p>
    </PageSection>
    </PageWrapper>
  </Layout>
)