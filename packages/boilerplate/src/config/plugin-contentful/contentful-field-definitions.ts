/**
 *
 * CONTENTFUL FIELD TYPE DEFINITIONS
 * =================================
 *
 * This file normally does not need any changes. It's here because you
 * occasionally might add some project specific stuff.
 *
 *
 */

import { ContentfulFieldDefinitions } from '@wheelroom/wheelroom-plugin-contentful'

export const contentfulFieldDefinitions: ContentfulFieldDefinitions = {
  /** Wheelroom field types, these are different from Contentful types */
  fieldTypes: {
    checkbox: {
      specs: {
        items: {
          type: 'Symbol',
        },
        type: 'Array',
      },
      widgetId: 'checkbox',
    },
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
    media: {
      specs: {
        linkType: 'Asset',
        type: 'Link',
        validations: [
          {
            linkMimetypeGroup: ['image', 'video'],
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
      specs: {
        type: 'Integer',
      },
      widgetId: 'numberEditor',
    },
    richText: {
      specs: {
        type: 'RichText',

        validations: [
          {
            nodes: {},
          },
          {
            enabledMarks: ['bold', 'italic', 'underline', 'code'],
            message: 'Only bold, italic, and underline marks are allowed',
          },
          {
            enabledNodeTypes: [
              'heading-1',
              'heading-2',
              'heading-3',
              'heading-4',
              'heading-5',
              'heading-6',
              'ordered-list',
              'unordered-list',
              'embedded-asset-block',
              'hyperlink',
              'entry-hyperlink',
              'blockquote',
              'hr',
            ],
            message:
              'Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, asset, link to Url, and link to entry nodes are allowed',
          },
        ],
      },
      widgetId: 'richTextEditor',
    },
    shortText: {
      specs: {
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    shortTextCamelCase: {
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
    shortTextPath: {
      specs: {
        type: 'Symbol',
        validations: [
          {
            message: 'Please use a valid path: /this/is/a/valid/path',
            regexp: {
              pattern: '^\\/[a-z0-9\\._/~%\\-\\+&\\#\\?!=\\(\\)@]*$',
            },
          },
        ],
      },
      widgetId: 'singleLine',
    },
    shortTextUrl: {
      specs: {
        type: 'Symbol',
        validations: [
          {
            message: 'Please use a valid url: https://this/is/a/valid/url',
            regexp: {
              pattern:
                '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$',
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
