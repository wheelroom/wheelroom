/**
 * Model definition
 *
 * Component type: articlesSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Articles section',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo articlesSection title',
      settings: {
        helpText: 'Never displayed, only used for listing within Contentful',
      },
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    variation: {
      initialContent: 'firstVariation',
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: 'Articles section variation',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    articles: {
      initialContent: 'article',
      settings: {
        helpText: 'Select (three) articles for this section or set a maximum',
      },
      specs: {
        items: {
          linkType: 'Entry',
          type: 'Link',
          validations: [
            {
              linkContentType: ['article'],
            },
          ],
        },
        name: 'Articles',
        required: false,
        type: 'Array',
      },
      widgetId: 'entryLinksEditor',
    },
    heading: {
      initialContent: 'Demo content for articlesSection/heading',
      settings: {
        helpText: 'Section heading above article tiles',
      },
      specs: {
        name: 'Section heading',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    maxArticles: {
      initialContent: 5,
      settings: {
        helpText:
          'Set a limit to the articles shown or choose specific articles',
      },
      specs: {
        name: 'Recent articles limit',
        required: false,
        type: 'Integer',
      },
      widgetId: 'numberEditor',
    },
  },
  modelVersion: '1.0.0',
  name: 'Articles section',
  type: 'articlesSection',
  wheelroomType: 'section',
} as Model
