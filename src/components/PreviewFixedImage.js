import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewFixedImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fixed={image.childImageSharp.fixed} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fixed={childImageSharp.fixed} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

PreviewFixedImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }),
}

export default PreviewFixedImage
