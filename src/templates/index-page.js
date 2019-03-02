import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
// import tachyons from 'tachyons-components'
import Content, { HTMLContent } from '../components/Content'

// export const IndexPageTemplate = ({
//   title,
//   heading,
//   description,
//   intro,
//   main,
//   content,
//   contentComponent,
//   helmet,
// }) => {
// const PageContent = contentComponent || Content

export const IndexPageTemplate = ({
  title,
  description,
  content,
  contentComponent,
  primaryButton,
  secondaryButton,
  }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="wrap w-100 vh-100 dt z-1">
      <div className="cf v-mid dtc ph3 ph0-ns">
        <div className="dn db-ns fl w-100 w-50-ns tl">
          <h2 className="f3 fw6 dark-gray mb1 mt0">{title}</h2>
          <p className="mid-gray mt0 f6 f5-ns">{description}</p>
        </div>
        <div className="fl w-100 w-50-ns">
          <h1 className="f4 mt0 mb0 fw4">Hi, I‘m Ajmal <span role="img" aria-label="emoji">👋🏼</span></h1>
          <p className="lh-copy"><PageContent className="content" content={content} /></p>
          <Link to="/experience/" className="link br2 ph4 pv3 dib mr3-ns white bg-primary db w-100 w-auto-ns tc">{primaryButton}</Link>
          <Link to="/about/" className="link br2 ph4 pv3 mt2 dib blue bg-white w-100 tc w-auto-ns bg-secondary bs-secondary br-secondary">{secondaryButton}</Link>
        </div>
      </div>
    </section>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        primaryButton={frontmatter.primaryButton}
        secondaryButton={frontmatter.secondaryButton}
        content={post.html}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const IndexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
        primaryButton
        secondaryButton
      }
    }
  }
`
