import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

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
          <small className="mid-gray lh-copy">{post.node.frontmatter.date}</small>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="w-100 wrap mt4 mt5-ns ph3 ph0-ns pt3-ns">
          <h1 className="f3 fw6 mb4">{tagHeader}</h1>
          <Helmet title={`${tag} | ${title}`} />
          {postLinks}
          <p>
            <Link to="/tags/">Browse all tags</Link>
          </p>
        </section>
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
          excerpt(pruneLength: 400)
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
