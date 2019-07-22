/**
 * Model definition
 *
 * Component type: authorSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Author section',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo authorSection title',
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
        name: 'Author section variation',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    heading: {
      initialContent: 'Demo author heading',
      settings: {
        helpText: 'Name of the author',
      },
      specs: {
        name: 'Section heading',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    image: {
      initialContent: 'demoAsset',
      settings: {
        helpText: 'Image of the author',
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
      initialContent: 'Demo line about the author',
      settings: {
        helpText: 'About the author',
      },
      specs: {
        name: 'Text',
        required: true,
        type: 'Text',
        validations: [
          {
            size: {
              max: 50000,
              min: 0,
            },
          },
        ],
      },
      widgetId: 'multipleLine',
    },
  },
  modelVersion: '1.0.0',
  name: 'Author section',
  type: 'authorSection',
  wheelroomType: 'section',
} as Model
