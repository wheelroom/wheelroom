/**
 * Model definition
 *
 * Component type: myNewSubPage
 * Wheelroom type: subPage
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'My new sub page',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo myNewSubPage title',
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
    // tslint:disable-next-line: object-literal-sort-keys
    author: {
      initialContent: 'Demo content for myNewSubPage/author',
      settings: {
        helpText: 'Describe how to use the field author',
      },
      specs: {
        localized: false,
        name: 'author',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    bodyText: {
      initialContent: 'Demo content for myNewSubPage/bodyText',
      settings: {
        helpText: 'Describe how to use the field bodyText',
      },
      specs: {
        localized: false,
        name: 'bodyText',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    heading: {
      initialContent: 'Demo content for myNewSubPage/heading',
      settings: {
        helpText: 'Describe how to use the field heading',
      },
      specs: {
        localized: false,
        name: 'heading',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
  },
  modelVersion: '1.0.0',
  name: 'My new sub page',
  type: 'myNewSubPage',
  wheelroomType: 'subPage',
} as Model
