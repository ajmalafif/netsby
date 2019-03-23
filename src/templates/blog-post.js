import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import tachyons from 'tachyons-components'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const ArticleContainer = tachyons('article')`
mb5 ph3 ph0-ns pv4-ns
`
const TitleWrapper = tachyons('div')`
wrap tc
`
const ArticleTitle = tachyons('h1')`
f3 f2-ns fw6 tc pt4 pt5-ns mt0 mb3 lh-title
`
const ContentContainer = tachyons('div')`
wrap mw12
`
const BackLink = tachyons(Link)`
link fw6
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <ArticleContainer>
      {helmet || ''}
      <TitleWrapper>
      <ArticleTitle>
        {title}
      </ArticleTitle>
      <small className="gray">{date}</small>
      </TitleWrapper>
      {/* <p>{description}</p> */}
      <ContentContainer>
        <div className="center measure-wide lh-copy">
          <PostContent content={content} />
          {tags && tags.length ? (
            <p className="mv4">
              <span className="f5 fw6 mid-gray">{tags.length === 1 ? 'Related topic' : 'Related topics'}: </span>
                {tags.map(tag => (
                  <Link key={tag + `tag`} className="gray mr2 link" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                ))}
            </p>
          ) : null}
        <BackLink to="/blog/">← Back to blog</BackLink>
        </div>
      </ContentContainer>
    </ArticleContainer>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            titleTemplate="%s | Ajmal Afif"
            bodyAttributes={{
                class: 'blog'
            }}
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
            <meta name="twitter:title" content={`${post.frontmatter.title} | Ajmal Afif`} />
            <meta name="twitter:description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
