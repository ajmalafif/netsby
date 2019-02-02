import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import PreviewFixedImage from '../components/PreviewFixedImage'
import tachyons from 'tachyons-components'

const SectionHeader = tachyons('h2')`
f2
`

const SectionSubHeader = tachyons('p')`
  gray mt0
`

const SectionIntro = tachyons('article')`
db wrap pt4 pt5-ns
`

const SectionIntroHeadings = tachyons('div')`
fl w-100 w-50-ns tc tl-ns pb0 pb4-ns
`

const SectionIntroDescriptions = tachyons('div')`
fl w-100 w-50-ns ph4 ph0-ns lh-copy mb3 mb0-ns
`

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
}) => (
  <div className="w-100">
    <SectionIntro>
      <SectionIntroHeadings>
        <SectionHeader>
          {title}
        </SectionHeader>
        <SectionSubHeader>
        {heading}
        </SectionSubHeader>
      </SectionIntroHeadings>
      <SectionIntroDescriptions>
        <SectionSubHeader>
          {description}
        </SectionSubHeader>
      </SectionIntroDescriptions>
    </SectionIntro>
    
    <Features gridItems={intro.blurbs} />

    <h1>{main.heading}</h1>
    <p>{main.description}</p>

    {/* <div className="tile is-parent is-vertical">
      <article className="tile is-child">
        <PreviewCompatibleImage imageInfo={main.image1} />
      </article>
    </div>
    <div className="tile is-parent">
      <article className="tile is-child">
        <PreviewCompatibleImage imageInfo={main.image2} />
      </article>
    </div> */}
    
    {/* <article className="tile is-child">
      <PreviewCompatibleImage imageInfo={main.image3} />
    </article> */}
    </div>

)

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
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
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
      frontmatter {
        title
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fixed(width: 200, height: 200) {
                  ...GatsbyImageSharpFixed
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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
