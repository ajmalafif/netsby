import CMS from 'netlify-cms'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ExperiencePagePreview from './preview-templates/ExperiencePagePreview'

CMS.registerPreviewTemplate('homepage', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('experience', ExperiencePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
