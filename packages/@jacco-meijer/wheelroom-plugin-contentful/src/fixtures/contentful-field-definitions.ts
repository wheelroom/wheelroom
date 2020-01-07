/**
 *
 * CONTENTFUL FIELD TYPE DEFINITIONS
 * =================================
 *
 * This file normally does not need any changes. It's here because you
 * ocassionally might add some project specific stuff.
 *
 * Initial content variables
 * =========================
 * - %firstItem%
 * - %firstComponent%
 * - %demoAsset%
 *
 */

import { ContentfulFieldDefinitions } from '../types/contentful-field-definitions'

export const contentfulFieldDefinitions: ContentfulFieldDefinitions = {
  fieldDefaults: {
    initialContent: 'Demo content for %field name%',
    settings: {
      helpText: '%Field name% for %component name%',
    },
    specs: {
      name: '%Field name%',
      type: 'Symbol',
    },
  },
  /** Wheelroom field types, these are different from Contentful types */
  fieldTypes: {
    date: {
      initialContent: '2019-06-03T00:00+01:00',
      specs: {
        name: '%Field name%',
        type: 'Date',
      },
      widgetId: 'datePicker',
    },
    dropdown: {
      initialContent: '%firstItem%',
      specs: {
        name: '%Field name%',
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    image: {
      initialContent: '%demoAsset%',
      specs: {
        linkType: 'Asset',
        name: '%Field name%',
        type: 'Link',
        validations: [
          {
            linkMimetypeGroup: ['image'],
          },
        ],
      },
      widgetId: 'assetLinkEditor',
    },
    multipleComponents: {
      initialContent: ['%firstComponent%'],
      specs: {
        items: {
          linkType: 'Entry',
          type: 'Link',
        },
        name: '%Field name%',
        type: 'Array',
      },
      widgetId: 'entryLinksEditor',
    },
    number: {
      initialContent: 5,
      specs: {
        name: '%Field name%',
        type: 'Integer',
      },
      widgetId: 'numberEditor',
    },
    richText: {
      specs: {
        name: '%Field name%',
        type: 'RichText',
      },
      widgetId: 'richTextEditor',
    },
    shortText: {
      specs: {
        name: '%Field name%',
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    singleComponent: {
      initialContent: '%firstComponent%',
      specs: {
        linkType: 'Entry',
        name: '%Field name%',
        type: 'Link',
      },
      widgetId: 'entryLinkEditor',
    },
    tags: {
      initialContent: ['tag me', 'tag you', 'tag us'],
      specs: {
        items: {
          type: 'Symbol',
        },
        name: '%Field name%',
        type: 'Array',
      },
      widgetId: 'tagEditor',
    },
  },
}
