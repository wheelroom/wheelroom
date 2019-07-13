/**
 * Model definition
 *
 * Component type: footerSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'
import { variations } from './variations'

export const model = {
  contentBackend: 'contentful',
  description: 'Footer section',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo footerSection title',
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
      initialContent: variations[0],
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: 'Footer section variation',
        required: true,
        type: 'Symbol',
        validations: [
          {
            in: variations,
          },
        ],
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    navigation: {
      initialContent: 'navigation',
      settings: {
        helpText: 'Select a navigation for this footer',
      },
      specs: {
        linkType: 'Entry',
        name: 'Navigation',
        required: false,
        type: 'Link',
        validations: [
          {
            linkContentType: ['navigation'],
          },
        ],
      },
      widgetId: 'entryLinkEditor',
    },
  },
  modelVersion: '1.0.0',
  name: 'Footer section',
  type: 'footerSection',
  wheelroomType: 'section',
} as Model
