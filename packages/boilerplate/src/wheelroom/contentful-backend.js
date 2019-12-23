/**
 *
 * CONTENTFUL FIELD TYPE DEFINITIONS
 * =================================
 *
 * This file normally does not need any changes. It's here because you
 * ocassionally might add some project specific stuff.
 *
 *
 * Variables below are provided by Wheelroom and parsed by the
 * wheelroom-contentful-plugin.
 *
 * Name variables
 * ==============
 * - %Component name%
 * - %component name%
 * - %Field name%
 * - %field name%
 *
 * Initial content variables
 * =========================
 * - %firstVariation%    - can be used to set initialContent
 * - %demoAsset%         - can be used to set initialContent
 *
 * GraphQL variables
 * =================
 * - %pageSectionsArray% - array of all model names with graphQl.pageSection set
 * - %firstPageSection%  - first string in pageSectionsArray
 *
 */

export const contentfulBackend = {
  fieldDefinitions: {
    attributeMappings: {
      components: 'specs.items.validations.0.linkContentType',
      helpText: 'settings.helpText',
      initialContent: 'initialContent',
      localized: 'specs.localized',
      maxLength: 'specs.validations.0.size.max',
      required: 'specs.required',
      type: 'specs.type',
      unique: 'specs.validations.0.unique',
    },
    fieldDefaults: {
      helpText: '%Field name% for %component name%',
      initialContent: 'Demo content for %component name% %field name%',
      localized: false,
      required: false,
      type: 'shortText',
    },
    /** Base fields are present in all models */
    baseFields: {
      title: {
        initialContent: 'Demo %component name% title',
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          name: '%Component name% title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
      },
      variation: {
        initialContent: '%firstVariation%',
        settings: {
          helpText: 'Select a variation',
        },
        specs: {
          name: '%Component name% variation',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'dropdown',
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
      tags: {
        initialContent: ['one', 'two', 'three', 'four'],
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
  },
}
