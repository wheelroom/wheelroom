import { Model } from '../../lib/types/model'
import { variations } from './variations'

export default {
  contentBackend: 'contentful',
  description: 'Article content',
  displayField: 'title',
  fields: {
    articleText: {
      initialContent: 'Demo article text',
      specs: {
        name: 'Article text',
        required: true,
        type: 'RichText',
      },
    },
    author: {
      initialContent: 'Demo article author',
      settings: {
        helpText: 'Author of the article',
      },
      specs: {
        name: 'Author',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    date: {
      initialContent: '1-1-2019',
      specs: {
        name: 'Date',
        required: true,
        type: 'Date',
      },
    },
    image: {
      initialContent: null,
      specs: {
        linkType: 'Asset',
        name: 'Image',
        required: false,
        type: 'Link',
        validations: [
          {
            linkMimetypeGroup: ['image'],
          },
        ],
      },
    },
    slug: {
      initialContent: 'demo-slug',
      settings: {
        helpText: 'Slug for the article',
      },
      specs: {
        name: 'Slug',
        required: true,
        type: 'Symbol',
        validations: [
          {
            unique: true,
          },
        ],
      },
      widgetId: 'slugEditor',
    },
    subTitle: {
      initialContent: 'Demo article sub title',
      settings: {
        helpText: 'Sub title of the article',
      },
      specs: {
        name: 'Sub title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    title: {
      initialContent: 'Demo article title',
      settings: {
        helpText: 'Title of the article',
      },
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    variation: {
      initialContent: 'No variations yet',
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: 'Article content variation',
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
  name: 'Article content',
  type: 'articleContent',
  wheelroomType: 'page',
} as Model
