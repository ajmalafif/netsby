import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ExperiencePagePreview from './preview-templates/ExperiencePagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('experience', ExperiencePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
