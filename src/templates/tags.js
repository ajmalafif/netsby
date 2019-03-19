import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import tachyons from 'tachyons-components'

const Section = tachyons('section')`
blog w-100 ph3 ph0-ns pt3-ns mt4 mt5-ns
`
const PageWrapper = tachyons('div')`
w-70-ns mb4
`
const ArticleHeader = tachyons('h3')`
lh-title mb1 blue mt0
`
const HeaderLink = tachyons(Link)`
fw6 link
`
const ArticleExcerpt = tachyons('p')`
lh-copy mt1 mb2
`
const ArticleLink = tachyons(Link)`
link mid-gray
`

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <PageWrapper key={post.node.fields.slug}>
        <ArticleHeader>
        <HeaderLink to={post.node.fields.slug}>
        {post.node.frontmatter.title}
        </HeaderLink>
        </ArticleHeader>
          <ArticleExcerpt>{post.node.excerpt}</ArticleExcerpt>
          <p className='mb2 mt3'>
          <ArticleLink to={post.node.fields.slug}>
          Continue reading →
          </ArticleLink>
          </p>
          <small className="mid-gray lh-copy">{post.node.frontmatter.date}</small>
      </PageWrapper>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} article${
    totalCount === 1 ? '' : 's'
    } with`
    const tagTopic = `related topic`

    return (
      <Layout>
        <div className="wrap">
        <Section>
          <h1 className="f3 mb4">{tagHeader} <span className="fw6">“{tag}”</span> {tagTopic}</h1>
          <Helmet title={`${totalCount === 1 ? 'Article' : 'Articles'} on “${tag}”`} />
          {postLinks}
          <p className="w-70-ns mb5 mb6-ns bt pt3 pt4-ns bt bl-0 br-0 bb-0 b--dotted b--black-30">
            <Link className="link fw6 f4" to="/tags/">Or browse all topics →</Link>
          </p>
        </Section>
        </div>
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
