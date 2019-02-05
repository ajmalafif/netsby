import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import tachyons from 'tachyons-components'
import Content, { HTMLContent } from '../components/Content'

const Section = tachyons("section")`
  w-100 mt4 pt5-ns
`

const Article = tachyons("article")`
  mt6 db wrap
`

const SectionAside = tachyons("div")`
  fl w-100 w-50-ns tc tl-ns pb0 pb4-ns
`

const SectionSubTitle = tachyons("p")`
  mid-gray mt0
`

const SectionTitle = tachyons("h1")`
f2 fw6 dark-gray mb1 mt0
`

const SectionContent = tachyons("div")`
  fl w-100 w-50-ns ph4 ph0-ns lh-copy mb6
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
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
