/**
 *
 * CONTENTFUL FIELD TYPE DEFINITIONS
 * =================================
 *
 * This file normally does not need any changes. It's here because you
 * ocassionally might add some project specific stuff.
 *
 *
 */

import { ContentfulFieldDefinitions } from '../types/contentful-field-definitions'

export const contentfulFieldDefinitions: ContentfulFieldDefinitions = {
  /** Wheelroom field types, these are different from Contentful types */
  fieldTypes: {
    date: {
      specs: {
        type: 'Date',
      },
      widgetId: 'datePicker',
    },
    dropdown: {
      specs: {
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    image: {
      specs: {
        linkType: 'Asset',
        type: 'Link',
        validations: [
          {
            linkMimetypeGroup: ['image'],
          },
        ],
      },
      widgetId: 'assetLinkEditor',
    },
    longText: {
      specs: {
        type: 'Text',
      },
      widgetId: 'multipleLine',
    },
    multipleComponents: {
      specs: {
        items: {
          linkType: 'Entry',
          type: 'Link',
        },
        type: 'Array',
      },
      widgetId: 'entryLinksEditor',
    },
    number: {
      specs: {
        type: 'Integer',
      },
      widgetId: 'numberEditor',
    },
    richText: {
      specs: {
        type: 'RichText',
      },
      widgetId: 'richTextEditor',
    },
    shortText: {
      specs: {
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    shortTextExtended: {
      specs: {
        type: 'Symbol',
        validations: [
          {
            message: 'Please use camel case: onlyCamelCaseAllowed',
            regexp: {
              pattern: '^[a-z]+([A-Z][a-z0-9]+)*$',
            },
          },
        ],
      },
      widgetId: 'singleLine',
    },
    singleComponent: {
      specs: {
        linkType: 'Entry',
        type: 'Link',
      },
      widgetId: 'entryLinkEditor',
    },
    tags: {
      specs: {
        items: {
          type: 'Symbol',
        },
        type: 'Array',
      },
      widgetId: 'tagEditor',
    },
  },
}
