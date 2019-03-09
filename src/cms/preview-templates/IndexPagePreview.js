import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, widgetFor }) => (
  <IndexPageTemplate
      title={entry.getIn(['data', 'title'])}
      description={entry.getIn(['data', 'description'])}
      primaryButton={entry.getIn(['data', 'primaryButton'])}
      secondaryButton={entry.getIn(['data', 'secondaryButton'])}
      heading={entry.getIn(['data', 'heading'])}
      content={widgetFor('body')}
    />
)

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default IndexPagePreview
