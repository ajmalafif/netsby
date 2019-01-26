import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import tachyons from 'tachyons-components'
import Content, { HTMLContent } from '../components/Content'

const SectionTitle = tachyons("h1")`
  mb1 mt0
`

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="w-100 mt4 mt5-ns">
      <article className="mt6 db wrap">
        <div className="fl w-100 w-50-ns tc tl-ns pb0 pb4-ns">
          <SectionTitle>{title}</SectionTitle>
          <p className="moon-gray mt0">Ajmal Afif</p>
        </div>
        <div className="fl w-100 w-50-ns ph4 ph0-ns lh-copy mb6">
          <PageContent className="content" content={content} />
        </div>
      </article>
    </section>
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
