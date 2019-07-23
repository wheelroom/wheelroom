/**
 * Model definition
 *
 * Component type: openerSection
 * Wheelroom type: section
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Opener section',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo openerSection title',
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
        name: 'Opener section variation',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    image: {
      initialContent: 'asset',
      settings: {
        helpText: 'Opener hero image',
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
    infoLine: {
      initialContent: 'Demo content for openerSection/infoLine',
      settings: {
        helpText: 'Information line shown in the opener like author and date',
      },
      specs: {
        name: 'Info line',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    navigation: {
      initialContent: 'navigation',
      settings: {
        helpText: 'Select a navigation for the opener',
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
    preHeading: {
      initialContent: 'Demo content for openerSection/preHeading',
      settings: {
        helpText: 'Heading shown before the main heading',
      },
      specs: {
        name: 'Pre heading',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    heading: {
      initialContent: 'Demo content for openerSection/heading',
      settings: {
        helpText: 'Main heading for this opener',
      },
      specs: {
        name: 'Heading',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    lightHeading: {
      initialContent: true,
      settings: {
        helpText: 'Set to true when a dark hero image is used',
      },
      specs: {
        name: 'Light heading',
        required: false,
        type: 'Boolean',
      },
      widgetId: 'boolean',
    },
    subHeading: {
      initialContent: 'Demo content for openerSection/subHeading',
      settings: {
        helpText: 'Heading shown after the main heading',
      },
      specs: {
        name: 'Sub heading',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
  },
  modelVersion: '1.0.0',
  name: 'Opener section',
  type: 'openerSection',
  wheelroomType: 'section',
} as Model
