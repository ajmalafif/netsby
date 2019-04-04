import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import ArticleList from '../components/ArticleList'
import tachyons from 'tachyons-components'
import Helmet from 'react-helmet'

const PageContainer = tachyons('div')`
blog ph3 ph0-ns pv4-ns
`
const PageHeaderContainer = tachyons('div')`
wrap dt bb b--light-gray pb4 pt4 pt5-ns
`
const PageHeadingsContainer = tachyons('div')`
fl w-100 w-50-ns tl
`
const PageHeadings = tachyons('h2')`
f3 fw6 dark-gray mb1 mt0
`
const PageSubHeadings = tachyons('p')`
mid-gray mt0
`
const PageDescriptions = tachyons('div')`
fl w-100 w-50-ns lh-copy mb0
`
const SectionArticles = tachyons('div')`
w-100 dt mt4
`
const ArticleWrapper = tachyons('div')`
wrap
`
const ButtonSecondary = tachyons(Link)`
w-100 w-auto-ns no-underline br2 ph4 pv3 mt3 mt0-ns dib blue bg-white tc bg-secondary bs-secondary br-secondary btn-paginate
`
const ButtonDisabled = tachyons('div')`
w-100 w-auto-ns no-underline br2 ph4 pv3 mt3 mt0-ns dib bg-white tc bg-secondary bs-secondary ba b--silver o-40 btn-paginate
`
const Pagination = tachyons('div')`
mb5 bt b--light-gray pt3
`

const PaginationLink = props => {
  if (!props.test) {
    return (
      <ButtonSecondary to={`/blog/${props.url}`}>
        {`${props.text}`}
      </ButtonSecondary>
    )
  } else {
    return (
      <ButtonDisabled disabled>
        {props.text}
      </ButtonDisabled>
    )
  }
}

export default class IndexPage extends React.Component {
  render() {
    const {pageContext} = this.props
    const {group, index, first, last} = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    return (
      <Layout>
        <Helmet
          titleTemplate="Blog · Ajmal Afif">
          <meta name='description' content='I enjoy writing down and reflect on my experience. My goal is to write more about design, frontend and anything in between.' />
      </Helmet>
        <PageContainer>
          <PageHeaderContainer>
            <PageHeadingsContainer>
              <PageHeadings>
                Blog
              </PageHeadings>
              <PageSubHeadings>
                Personal learnings & thoughts
              </PageSubHeadings>
            </PageHeadingsContainer>
            <PageDescriptions>
              I enjoy writing down and reflect on my experience. My goal is to write more about design, frontend and anything in between.
            </PageDescriptions>
          </PageHeaderContainer>
          <SectionArticles>
            <ArticleWrapper>
              <ArticleList posts={group} />
                <Pagination>
                  <PaginationLink className="fr fl-ns" test={first} url={previousUrl} text='← Previous page' />
                <PaginationLink className="fl fr-ns" test={last} url={nextUrl} text='Next page →' />
                </Pagination>
            </ArticleWrapper>
          </SectionArticles>
        </PageContainer>
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
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
