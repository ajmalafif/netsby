import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import tachyons from 'tachyons-components'
import Content, { HTMLContent } from '../components/Content'

const SectionHeader = tachyons('h2')`
f2 fw6 dark-gray mb1 mt0
`

const SectionSubHeader = tachyons('p')`
  gray mt0
`

const SectionIntro = tachyons('article')`
db wrap pt4 pt5-ns
`

const ContainerIntroHeadings = tachyons('div')`
fl w-100 w-50-ns tc tl-ns pb0 pb4-ns
`

const ContainerIntroDescriptions = tachyons('div')`
fl w-100 w-50-ns ph4 ph0-ns lh-copy mb3 mb0-ns
`

const SectionMainContent = tachyons('section')`
w-100 mt4
`

const ContainerMainContent = tachyons('div')`
dt-ns dt--fixed-ns wrap ph4 ph0-ns
`

const MainContentHeader = tachyons('h1')`
lh-solid mb0
`

const MainContent = tachyons('p')`
lh-solid mb0
`

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  content,
  contentComponent,
}) => {
const PageContent = contentComponent || Content

return (
  <div className="w-100">
    <SectionIntro>
      <ContainerIntroHeadings>
        <SectionHeader>
          {title}
        </SectionHeader>
        <SectionSubHeader>
        {heading}
        </SectionSubHeader>
      </ContainerIntroHeadings>
      <ContainerIntroDescriptions>
        {description}
      </ContainerIntroDescriptions>
    </SectionIntro>

    <SectionMainContent>
      <ContainerMainContent>
      <MainContentHeader>
        {main.heading}
      </MainContentHeader>
      <MainContent>
      {main.description}
      <PageContent className="content" content={content} />
      </MainContent>
      </ContainerMainContent>
    </SectionMainContent>

    <Features gridItems={intro.blurbs} />

    <div className="tile is-parent is-vertical">
      <article className="tile is-child">
        <PreviewCompatibleImage imageInfo={main.image1} />
      </article>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child">
        <PreviewCompatibleImage imageInfo={main.image2} />
      </article>
    </div>
    <article className="tile is-child">
      <PreviewCompatibleImage imageInfo={main.image3} />
    </article>
    </div>
  )
}
ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        content={frontmatter.html}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
            heading
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
