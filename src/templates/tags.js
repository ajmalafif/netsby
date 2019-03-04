import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import tachyons from 'tachyons-components'

const Section = tachyons('section')`
blog mt5-ns mt4 w-100 ph3 ph0-ns pt3-ns
`

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <div className="w-70-ns mb4" key={post.node.fields.slug}>
        <h3 className="lh-title mb1 blue mt0">
        <Link className="link fw6" to={post.node.fields.slug}>
        {post.node.frontmatter.title}
        </Link>
          </h3>
          <p className="lh-copy mt1 mb2">{post.node.excerpt}</p>
          <p className='mb2 mt3'>
          <Link className="fw6 link mid-gray" to={post.node.fields.slug}>
          Continue reading →
          </Link>
          </p>
          <small className="mid-gray lh-copy">{post.node.frontmatter.date}</small>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} article${
    totalCount === 1 ? '' : 's'
    } with`
    const tagTopic = `related topic`

    return (
      <Layout className="wrap">
        <Section>
          <h1 className="f3 mb4">{tagHeader} <span className="fw6">“{tag}”</span> {tagTopic}</h1>
          <Helmet title={`${totalCount === 1 ? 'Article' : 'Articles'} on “${tag}” | ${title}`} />
          {postLinks}
          <p>
            <Link className="link fw6 f4" to="/tags/">Browse all topics →</Link>
          </p>
        </Section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 150)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
