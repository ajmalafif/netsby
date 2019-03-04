import React from "react"
import { Link } from 'gatsby'
import tachyons from 'tachyons-components'
import Layout from '../components/Layout'

const Wrapper = tachyons(`div`)`
wrap ph3 ph0-ns
`

const Section = tachyons(`section`)`
blog w-100 pt3-ns mt4 mt5-ns
`

const BackLink = tachyons(Link)`
link fw6
`

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
    <Section>
      <h1 className="f3 fw6 mb2">How did you end up here?</h1>
      <p className="lh-copy">Opsie, the page you're looking for isn't here anymore. Sorry about that <span role="img" aria-label="emoji">🙏🏻</span> If this page contains something important to you, please do <a without rel="noopener noreferrer" target="_blank" className="link" href="/about/">let me know here</a>.</p>
      <p className="lh-copy">
      <BackLink to="/about/">← Let me know</BackLink>
      </p>
      <p className="lh-copy">
      <BackLink to="/blog/">← Check out my articles</BackLink>
      </p>
    </Section>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
