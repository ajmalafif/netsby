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
w-100 w-auto-ns no-underline br2 ph4 pv3 mt3 mt0-ns dib blue bg-white tc bg-secondary bs-secondary br-secondary btn-paginate 
`

export const BlogPostTemplate = ({
  content,
  contentComponent,
  hero,
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
          <BackLink to="/blog/">← Back to Blog</BackLink>
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
  hero: PropTypes.shape({
    alt: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
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
        hero={post.frontmatter.hero}
        image={post.frontmatter.hero.image}
        alt={post.frontmatter.hero.alt}
        helmet={
          <Helmet
            titleTemplate="%s | Ajmal Afif"
            bodyAttributes={{
                class: 'blog'
            }}
          >
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
            <meta property="og:image" content={`${post.frontmatter.hero.image}`} />
            <meta property="og:image:alt" content={`${post.frontmatter.hero.alt}`} />
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
        hero {
          alt
        }
        tags
      }
    }
  }
`
