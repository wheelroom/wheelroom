/**
 * Model definition
 *
 * Component type: myNewComponent
 * Wheelroom type: global
 *
 */

import { Model } from '@jacco-meijer/wheelroom'

export const model = {
  contentBackend: 'contentful',
  description: 'My new component',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo myNewComponent title',
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
      initialContent: 'Demo content for myNewComponent/author',
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
      initialContent: 'Demo content for myNewComponent/bodyText',
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
      initialContent: 'Demo content for myNewComponent/heading',
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
  name: 'My new component',
  type: 'myNewComponent',
  wheelroomType: 'global',
} as Model
