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

import { ContentfulFieldDefinitions } from '@jacco-meijer/wheelroom-plugin-contentful'

export const contentfulFieldDefinitions: ContentfulFieldDefinitions = {
  /** Wheelroom field types, these are different from Contentful types */
  fieldTypes: {
    date: {
      createContentData: '2019-06-03T00:00+01:00',
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
        name: '%Field name%',
        type: 'Array',
      },
      widgetId: 'entryLinksEditor',
    },
    number: {
      createContentData: 5,
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
    singleComponent: {
      specs: {
        linkType: 'Entry',
        type: 'Link',
      },
      widgetId: 'entryLinkEditor',
    },
    tags: {
      createContentData: ['tag me', 'tag you', 'tag us'],
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
