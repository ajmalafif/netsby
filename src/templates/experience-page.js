import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import tachyons from 'tachyons-components'
import Content, { HTMLContent } from '../components/Content'

const ArticleContainer = tachyons('article')`
dt wrap pt4 pt5-ns pb4
`

const ArticleContainerHeadings = tachyons('div')`
fl w-100 w-50-ns tc tl-ns
`

const ArticleContainerDescriptions = tachyons('div')`
fl w-100 w-50-ns ph4 ph0-ns lh-copy
`

const SectionDivider = tachyons('section')`
w-100 dt
`

const Divider = tachyons('div')`
wrap bt b--light-gray
`

const SectionHeader = tachyons('h2')`
f2 f3-ns fw6 dark-gray mb1 mt0
`

const SectionSubHeader = tachyons('div')`
  mid-gray mt0
`

const SectionContainer = tachyons('section')`
w-100 mt4
`

const MainContentHeader = tachyons('h1')`
fw6 lh-solid mb0 mt0 f3 f2-ns
`

const ContainerMainContent = tachyons('div')`
dt-ns dt--fixed-ns wrap ph4 ph0-ns
`

const ContainerIntro = tachyons('div')`
wrap pt4 pb6-ns bt b--light-gray
`

const ContainerIntroHeading = tachyons('div')`
fl w-100 w-50-ns tc tl-ns pb4 mid-gray
`

const ContainerIntroDescription = tachyons('div')`
w-100 w-50-ns ph4 ph0-ns fl lh-copy
`

const IntroHeading = tachyons('h2')`
mb1 mt0 fw4
`

const IntroDescription = tachyons('p')`
mt0
`

export const ExperiencePageTemplate = ({
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
    <ArticleContainer>
      <ArticleContainerHeadings>
        <SectionHeader>
          {title}
        </SectionHeader>
        <SectionSubHeader>
        {heading}
        </SectionSubHeader>
      </ArticleContainerHeadings>
      <ArticleContainerDescriptions>
        {description}
      </ArticleContainerDescriptions>
    </ArticleContainer>

    <SectionDivider>
      <Divider />
    </SectionDivider>

    <SectionContainer>
      <ContainerMainContent>
      <MainContentHeader>
        {main.heading}
      </MainContentHeader>
      <PageContent className="content lh-copy" content={content} />
      </ContainerMainContent>
    </SectionContainer>

    <SectionContainer>
      <ContainerIntro>
        <ContainerIntroHeading>
          <IntroHeading>
            {intro.heading}
          </IntroHeading>
        </ContainerIntroHeading>
        <ContainerIntroDescription>
          <IntroDescription>
            <IntroDescription>
              {intro.description}
            </IntroDescription>
          </IntroDescription>
        </ContainerIntroDescription>
      </ContainerIntro>
    </SectionContainer>
    <Features gridItems={intro.blurbs} />
    </div>
  )
}
ExperiencePageTemplate.propTypes = {
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

const ExperiencePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ExperiencePageTemplate
        contentComponent={HTMLContent}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        content={post.html}
      />
    </Layout>
  )
}

ExperiencePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ExperiencePage

export const ExperiencePageQuery = graphql`
  query ExperiencePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        description
        intro {
          blurbs {
            heading
            text
            alt
            image {
              childImageSharp {
                fixed(width: 200, height: 200, quality: 90) {
                  ...GatsbyImageSharpFixed_tracedSVG
                }
              }
            }
          }
          heading
          description
        }
        main {
          heading
          description
          image3 {
            alt
            image
          }
        }
      }
    }
  }
`
