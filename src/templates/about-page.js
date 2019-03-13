import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import tachyons from 'tachyons-components'
import Content, { HTMLContent } from '../components/Content'
import Contact from '../components/Contact'

const Section = tachyons("section")`
ph3 ph0-ns pv4-ns
`

const Article = tachyons("section")`
dt wrap pt4 pt5-ns
`

const SectionAside = tachyons("div")`
fl w-100 w-50-ns tl pb0 pb4-ns
`

const SectionSubTitle = tachyons("p")`
  mid-gray mt0
`

const SectionTitle = tachyons("h1")`
f3 fw6 dark-gray mb1 mt0
`

const SectionContent = tachyons("div")`
fl w-100 w-50-ns lh-copy mb3
`

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Section>
      <Article>
        <SectionAside>
          <SectionTitle>{title}</SectionTitle>
          <SectionSubTitle>Ajmal Afif</SectionSubTitle>
        </SectionAside>
        <SectionContent>
          <PageContent className="content" content={content} />
          <Contact />
        </SectionContent>
      </Article>
    </Section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
      <Helmet
        titleTemplate="%s | Ajmal Afif"
      >
        <title>{`${post.frontmatter.title}`}</title>
        <meta name="description" content={`${post.frontmatter.description}`} />
      </Helmet>
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
