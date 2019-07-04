/**
 * Model definition
 *
 * Component type: featuredPageSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom'
import { variations } from './variations'

export const model = {
  contentBackend: 'contentful',
  description: 'Featured page section',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo featuredPageSection title',
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
        name: 'Featured page section variation',
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
    featuredPage: {
      initialContent: 'page',
      settings: {
        helpText: 'Page to link to',
      },
      specs: {
        linkType: 'Entry',
        name: 'Featured page',
        required: true,
        type: 'Link',
        validations: [
          {
            linkContentType: ['page'],
          },
        ],
      },
      widgetId: 'entryLinkEditor',
    },
    heading: {
      initialContent: 'Demo content for featuredPageSection/heading',
      settings: {
        helpText: 'Heading for the featured page section',
      },
      specs: {
        localized: true,
        name: 'Section heading',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    image: {
      initialContent: 'asset',
      settings: {
        helpText: 'Image for the featured page',
      },
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
      widgetId: 'assetLinkEditor',
    },
    text: {
      initialContent: 'Demo content for featuredPageSection/text',
      settings: {
        helpText: 'About the featured page',
      },
      specs: {
        localized: true,
        name: 'About page',
        required: true,
        type: 'Text',
      },
      widgetId: 'multipleLine',
    },
  },
  modelVersion: '1.0.0',
  name: 'Featured page section',
  type: 'featuredPageSection',
  wheelroomType: 'section',
} as Model
