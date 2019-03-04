import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <section className="blog w-100 wrap mt4 mt5-ns ph3 ph0-ns pt3-ns">
      <Helmet title={`Topics | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="f3 fw6 mb4">All topics</h1>
              {group.map(tag => (
                <p key={tag.fieldValue}>
                  <span className="dark-gray">{tag.totalCount === 1 ? 'There is' : 'There are'} <span className="fw6">{tag.totalCount} {tag.totalCount === 1 ? 'article' : 'articles'}</span> with <Link className="link fw6" to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag.fieldValue} →</Link> related {tag.totalCount === 1 ? 'topic' : 'topics'}.</span>
                  
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
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
