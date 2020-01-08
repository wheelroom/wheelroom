import { ContentfulComponents } from '../../../types/contentful-components'

export const output: ContentfulComponents = {
  allFieldTypes: {
    description: 'All field types',
    displayField: 'title',
    fields: {
      dateField: {
        settings: {
          helpText: 'Date field for all field types',
        },
        specs: {
          localized: false,
          name: 'Date field',
          required: false,
          type: 'Date',
        },
        widgetId: 'datePicker',
        createContentData: '2019-06-03T00:00+01:00',
      },
      dropdownField: {
        settings: {
          helpText: 'Dropdown field for all field types',
        },
        specs: {
          localized: false,
          name: 'Dropdown field',
          required: false,
          type: 'Symbol',
          validations: [
            {
              in: ['item A', 'item B', 'item C'],
            },
          ],
        },
        widgetId: 'dropdown',
        createContentData: 'item A',
      },
      imageField: {
        settings: {
          helpText: 'Image field for all field types',
        },
        specs: {
          localized: false,
          name: 'Image field',
          required: false,
          type: 'Link',
          linkType: 'Asset',
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
        },
        widgetId: 'assetLinkEditor',
        createContentData: 'demoAsset',
      },
      longTextField: {
        settings: {
          helpText: 'Long text field for all field types',
        },
        specs: {
          localized: false,
          name: 'Long text field',
          required: false,
          type: 'Text',
        },
        widgetId: 'multipleLine',
        createContentData: 'Demo content for long text field',
      },
      multipleComponentsField: {
        settings: {
          helpText: 'Multiple components field for all field types',
        },
        specs: {
          localized: false,
          name: 'Multiple components field',
          required: false,
          type: 'Array',
          items: {
            linkType: 'Entry',
            type: 'Link',
            validations: [
              {
                linkContentType: ['pageModel', 'firstSection', 'secondSection'],
              },
            ],
          },
        },
        widgetId: 'entryLinksEditor',
        createContentData: ['firstSection', 'secondSection'],
      },
      numberField: {
        settings: {
          helpText: 'Number field for all field types',
        },
        specs: {
          localized: false,
          name: 'Number field',
          required: false,
          type: 'Integer',
        },
        widgetId: 'numberEditor',
        createContentData: 5,
      },
      richTextField: {
        settings: {
          helpText: 'Rich text field for all field types',
        },
        specs: {
          localized: false,
          name: 'Rich text field',
          required: false,
          type: 'RichText',
        },
        widgetId: 'richTextEditor',
        createContentData: 'Demo content for rich text field',
      },
      shortTextField: {
        settings: {
          helpText: 'Short text field for all field types',
        },
        specs: {
          localized: false,
          name: 'Short text field',
          required: false,
          type: 'Symbol',
          validations: [
            {
              size: {
                max: 155,
                min: 0,
              },
            },
          ],
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for short text field',
      },
      singleComponentField: {
        settings: {
          helpText: 'Single component field for all field types',
        },
        specs: {
          localized: false,
          name: 'Single component field',
          required: false,
          type: 'Link',
          linkType: 'Entry',
          validations: [
            {
              linkContentType: ['pageModel'],
            },
          ],
        },
        widgetId: 'entryLinkEditor',
        createContentData: 'pageModel',
      },
      tagsField: {
        settings: {
          helpText: 'Tags field for all field types',
        },
        specs: {
          localized: false,
          name: 'Tags field',
          required: false,
          type: 'Array',
          items: {
            type: 'Symbol',
          },
        },
        widgetId: 'tagEditor',
        createContentData: ['tag me', 'tag you', 'tag us'],
      },
      title: {
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for title',
      },
    },
    modelVersion: '1.0.0',
    type: 'allFieldTypes',
  },
  firstSection: {
    description: 'First section',
    displayField: 'title',
    fields: {
      defaultField: {
        settings: {
          helpText: 'Default field for first section',
        },
        specs: {
          localized: false,
          name: 'Default field',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for default field',
      },
      title: {
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for title',
      },
    },
    modelVersion: '1.0.0',
    type: 'firstSection',
  },
  globalModel: {
    description: 'Global model',
    displayField: 'title',
    fields: {
      heading: {
        settings: {
          helpText: 'Heading for global model',
        },
        specs: {
          localized: false,
          name: 'Heading',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for heading',
      },
      title: {
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for title',
      },
    },
    modelVersion: '1.0.0',
    type: 'globalModel',
  },
  noFragment: {
    description: 'No fragment',
    displayField: 'title',
    fields: {
      heading: {
        settings: {
          helpText: 'Heading for no fragment',
        },
        specs: {
          localized: false,
          name: 'Heading',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for heading',
      },
      title: {
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for title',
      },
    },
    modelVersion: '1.0.0',
    type: 'noFragment',
  },
  pageModel: {
    description: 'Page model',
    displayField: 'title',
    fields: {
      heading: {
        settings: {
          helpText: 'Heading for page model',
        },
        specs: {
          localized: false,
          name: 'Heading',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for heading',
      },
      title: {
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for title',
      },
    },
    modelVersion: '1.0.0',
    type: 'pageModel',
  },
  secondSection: {
    description: 'Second section',
    displayField: 'title',
    fields: {
      heading: {
        settings: {
          helpText: 'Heading for second section',
        },
        specs: {
          localized: false,
          name: 'Heading',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for heading',
      },
      title: {
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for title',
      },
    },
    modelVersion: '1.0.0',
    type: 'secondSection',
  },
  subPageModel: {
    description: 'Sub page model',
    displayField: 'title',
    fields: {
      heading: {
        settings: {
          helpText: 'Heading for sub page model',
        },
        specs: {
          localized: false,
          name: 'Heading',
          required: false,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for heading',
      },
      title: {
        settings: {
          helpText: 'Never displayed, only used for listing within Contentful',
        },
        specs: {
          localized: false,
          name: 'Title',
          required: true,
          type: 'Symbol',
        },
        widgetId: 'singleLine',
        createContentData: 'Demo content for title',
      },
    },
    modelVersion: '1.0.0',
    type: 'subPageModel',
  },
}
