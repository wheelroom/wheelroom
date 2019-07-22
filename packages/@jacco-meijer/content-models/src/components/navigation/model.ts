/**
 * Model definition
 *
 * Component type: navigation
 * Wheelroom type: part
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Navigation',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo navigation title',
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
        name: 'Navigation variation',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    routes: {
      initialContent: 'page',
      settings: {
        helpText: 'Select the pages for the routes of this navigation',
      },
      specs: {
        items: {
          linkType: 'Entry',
          type: 'Link',
          validations: [
            {
              linkContentType: ['page'],
            },
          ],
        },
        name: 'Routes',
        required: true,
        type: 'Array',
      },
      widgetId: 'entryLinksEditor',
    },
  },
  modelVersion: '1.0.0',
  name: 'Navigation',
  type: 'navigation',
  wheelroomType: 'part',
} as Model
