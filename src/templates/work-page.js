import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import tachyons from 'tachyons-components'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const Section = tachyons("section")`
  w-100 mt4 pt5-ns
`

const Article = tachyons("article")`
  db wrap
`

const SectionAside = tachyons("div")`
  fl w-100 w-50-ns tc tl-ns pb0 pb4-ns
`

const SectionSubTitle = tachyons("p")`
  gray mt0
`

const SectionTitle = tachyons("h1")`
  mb1 mt0
`

const SectionContent = tachyons("div")`
  fl w-100 w-50-ns ph4 ph0-ns lh-copy mb6
`

export const WorkPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <Section>
      <Article>
        <SectionAside>
          <SectionTitle>{title}</SectionTitle>
          <SectionSubTitle>Featured work & past experiences</SectionSubTitle>
        </SectionAside>
        <SectionContent>
          <p>I have extensive working experience with diversed teammates in recent years, and worked with multiple startups & agencies for almost 6 years in the past.</p>
        </SectionContent>
        <PageContent className="content lh-copy" content={content} />
      </Article>
    </Section>
  )
}

WorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WorkPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorkPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

WorkPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkPage

export const WorkPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
