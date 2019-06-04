import { variations } from './variations'

export default {
  description: 'Article content',
  displayField: 'title',
  fields: {
    articleText: {
      specs: {
        name: 'Article text',
        required: true,
        type: 'RichText',
      },
    },
    author: {
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
      specs: {
        name: 'Date',
        required: true,
        type: 'Date',
      },
    },
    image: {
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
}
