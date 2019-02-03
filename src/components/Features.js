import React from 'react'
import PropTypes from 'prop-types'
import PreviewFixedImage from '../components/PreviewFixedImage'
import tachyons from 'tachyons-components'

const SectionFeatures = tachyons('div')`
w-100 mt0
`
const ContainerFeature = tachyons('div')`
wrap pt4 pb5-ns cf
`
const ContainerFeatureImage = tachyons('div')`
fr w-100 w-50-ns tc
`

const ContainerFeatureContent = tachyons('div')`
fl w-100 w-50-ns ph4 ph0-ns
`

const FeatureTitle = tachyons('h3')`
f4 mt1 mb2 lh-solid mt4-ns pt3 fw6
`

const FeatureDescription = tachyons('p')`
mt0 lh-copy
`

const FeatureGrid = ({ gridItems }) => (
  <SectionFeatures>
    {gridItems.map(item => (
        <ContainerFeature key={item.text}>
          <ContainerFeatureImage>
            <PreviewFixedImage imageInfo={item} />
          </ContainerFeatureImage>
          <ContainerFeatureContent>
            <FeatureTitle>
              {item.heading}
            </FeatureTitle>
            <FeatureDescription>
              {item.text}
            </FeatureDescription>
          </ContainerFeatureContent>
        </ContainerFeature>
    ))}
  </SectionFeatures>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
