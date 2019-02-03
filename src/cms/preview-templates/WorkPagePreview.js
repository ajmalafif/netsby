import React from 'react'
import PropTypes from 'prop-types'
import { WorkPageTemplate } from '../../templates/work-page'

const WorkPagePreview = ({ entry, widgetFor }) => (
  <WorkPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkPagePreview
