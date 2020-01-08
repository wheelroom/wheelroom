import { ContentfulComponents } from '../../../types/contentful-components'

export const output: ContentfulComponents = {
  allFieldTypes: {
    description: 'All field types',
    displayField: 'title',
    fields: {
      dateField: {
        createContentData: '2019-06-03T00:00+01:00',
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
      },
      dropdownField: {
        createContentData: 'item A',
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
      },
      imageField: {
        createContentData: 'demoAsset',
        settings: {
          helpText: 'Image field for all field types',
        },
        specs: {
          linkType: 'Asset',
          localized: false,
          name: 'Image field',
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
      longTextField: {
        createContentData: 'Demo content for long text field',
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
      },
      multipleComponentsField: {
        createContentData: ['firstSection', 'secondSection'],
        settings: {
          helpText: 'Multiple components field for all field types',
        },
        specs: {
          items: {
            linkType: 'Entry',
            type: 'Link',
            validations: [
              {
                linkContentType: ['pageModel', 'firstSection', 'secondSection'],
              },
            ],
          },
          localized: false,
          name: 'Multiple components field',
          required: false,
          type: 'Array',
        },
        widgetId: 'entryLinksEditor',
      },
      numberField: {
        createContentData: 5,
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
      },
      richTextField: {
        createContentData: 'Demo content for rich text field',
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
      },
      shortTextField: {
        createContentData: 'Demo content for short text field',
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
      },
      singleComponentField: {
        createContentData: 'pageModel',
        settings: {
          helpText: 'Single component field for all field types',
        },
        specs: {
          linkType: 'Entry',
          localized: false,
          name: 'Single component field',
          required: false,
          type: 'Link',
          validations: [
            {
              linkContentType: ['pageModel'],
            },
          ],
        },
        widgetId: 'entryLinkEditor',
      },
      tagsField: {
        createContentData: ['tag me', 'tag you', 'tag us'],
        settings: {
          helpText: 'Tags field for all field types',
        },
        specs: {
          items: {
            type: 'Symbol',
          },
          localized: false,
          name: 'Tags field',
          required: false,
          type: 'Array',
        },
        widgetId: 'tagEditor',
      },
      title: {
        createContentData: 'Demo content for title',
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
        createContentData: 'Demo content for default field',
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
      },
      title: {
        createContentData: 'Demo content for title',
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
        createContentData: 'Demo content for heading',
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
      },
      title: {
        createContentData: 'Demo content for title',
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
        createContentData: 'Demo content for heading',
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
      },
      title: {
        createContentData: 'Demo content for title',
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
        createContentData: 'Demo content for heading',
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
      },
      title: {
        createContentData: 'Demo content for title',
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
        createContentData: 'Demo content for heading',
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
      },
      title: {
        createContentData: 'Demo content for title',
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
        createContentData: 'Demo content for heading',
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
      },
      title: {
        createContentData: 'Demo content for title',
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
      },
    },
    modelVersion: '1.0.0',
    type: 'subPageModel',
  },
}
