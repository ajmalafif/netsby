import React from 'react'
import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="wrap w-100 vh-100 dt z-1">
          <div className="cf v-mid dtc ph3 ph0-ns">
            <div className="dn db-ns fl w-100 w-50-ns tl">
              <h2 className="f3 fw6 dark-gray mb1 mt0">Welcome</h2>
              <p className="mid-gray mt0 f6 f5-ns">Ajmal Afif's personal website</p>
            </div>
            <div className="fl w-100 w-50-ns">
            </div>

          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
