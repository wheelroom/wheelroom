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
    author: {
      initialContent: 'Demo myNewComponent author',
      settings: {
        helpText: 'Generated field',
      },
      specs: {
        name: 'author',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    bodyText: {
      initialContent: 'Demo myNewComponent bodyText',
      settings: {
        helpText: 'Generated field',
      },
      specs: {
        name: 'bodyText',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    heading: {
      initialContent: 'Demo myNewComponent heading',
      settings: {
        helpText: 'Generated field',
      },
      specs: {
        name: 'heading',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },

    title: {
      initialContent: 'Demo myNewComponent title',
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

    
  },
  modelVersion: '1.0.0',
  name: 'My new component',
  type: 'myNewComponent',
  wheelroomType: 'global',
} as Model
