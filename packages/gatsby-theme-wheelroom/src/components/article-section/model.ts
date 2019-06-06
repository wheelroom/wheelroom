import { Model } from '../../lib/types/model'
import { variations } from './variations'

export default {
  contentBackend: 'contentful',
  description: 'Article section',
  displayField: 'title',
  fields: {
    articleText: {
      initialContent: 'Demo article text',
      specs: {
        localized: true,
        name: 'Article text',
        required: false,
        type: 'RichText',
      },
    },
    title: {
      initialContent: 'Demo article title',
      settings: {
        helpText: 'Never displayed, only used for listing within Contentful',
      },
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
        validations: [{ size: { min: 0, max: 255 } }],
      },
      widgetId: 'singleLine',
    },
    variation: {
      initialContent: 'Inline article text, specific to this section',
      settings: {
        helpText: 'Select section-opener',
      },
      specs: {
        name: 'Article variation',
        required: true,
        type: 'Symbol',
        validations: [
          {
            in: Object.keys(variations),
          },
        ],
      },
      widgetId: 'dropdown',
    },
  },
  modelVersion: '1.0.0',
  name: 'Article section',
  type: 'articleSection',
  wheelroomType: 'page',
} as Model
