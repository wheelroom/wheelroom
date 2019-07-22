/**
 * Model definition
 *
 * Component type: article
 * Wheelroom type: subPage
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Article',
  displayField: 'title',
  fields: {
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
    // tslint:disable-next-line: object-literal-sort-keys
    subTitle: {
      initialContent: 'Demo content for article/subTitle',
      settings: {
        helpText: 'Sub title for the article',
      },
      specs: {
        name: 'Sub title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    author: {
      initialContent: 'D.E. Author',
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
      initialContent: '2019-06-03T00:00+01:00',
      settings: {
        helpText: 'Date displayed with the article',
      },
      specs: {
        name: 'Date',
        required: true,
        type: 'Date',
      },
      widgetId: 'datePicker',
    },
    image: {
      initialContent: 'asset',
      settings: {
        helpText: 'Opener image for the article',
      },
      specs: {
        linkType: 'Asset',
        name: 'Opener image',
        required: false,
        type: 'Link',
        validations: [
          {
            linkMimetypeGroup: ['image'],
          },
        ],
      },
      widgetId: 'assetLinkEditor',
    },
    slug: {
      initialContent: 'demo-slug-article',
      settings: {
        helpText: 'Slug for article',
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
    // tslint:disable-next-line: object-literal-sort-keys
    articleText: {
      initialContent: 'Demo content for article/articleText',
      settings: {
        helpText: 'Full text of the article',
      },
      specs: {
        name: 'Article text',
        required: true,
        type: 'RichText',
      },
      widgetId: 'richTextEditor',
    },
  },
  modelVersion: '1.0.0',
  name: 'Article',
  type: 'article',
  wheelroomType: 'subPage',
} as Model
