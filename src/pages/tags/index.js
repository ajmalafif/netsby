import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import tachyons from 'tachyons-components'
import Layout from '../../components/Layout'

const Container = tachyons('div')`
wrap
`
const SectionContainer = tachyons('section')`
blog w-100 ph3 ph0-ns pt3-ns mt4 mt5-ns
`
const Heading = tachyons('h1')`
f3 fw6 mb4
`

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <Container>
    <SectionContainer>
      <Helmet 
        title={`All topics · ${title}`}>
        <meta name="description" content={`All the topics for the blog.`} />
        <meta name="twitter:title" content={`All topics · ${title}`} />
        <meta name="twitter:description" content={`All the topics for the blog.`} />
        <meta property="og:title" content={`All topics · ${title}`} />
            <meta property="og:description" content={`All the topics for the blog.`} />
      </Helmet>
      <Heading>All topics</Heading>
        {group.map(tag => (
          <p key={tag.fieldValue}>
            <span className="dark-gray">{tag.totalCount === 1 ? 'There is' : 'There are'} <span className="fw6">{tag.totalCount} {tag.totalCount === 1 ? 'article' : 'articles'}</span> with <Link className="link fw6" to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag.fieldValue} →</Link> related {tag.totalCount === 1 ? 'topic' : 'topics'}.</span>
            
          </p>
        ))}
    </SectionContainer>
    </Container>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
