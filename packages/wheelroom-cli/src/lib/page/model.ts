export const pageModel = {
  description:
    'A page defines routes and references to components on the page.',
  displayField: 'title',
  fields: {
    navigationTitle: {
      settings: {
        helpText: "Title used for buttons and in navigation menu's",
      },
      specs: {
        localized: true,
        name: 'Navigation title',
        required: false,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    path: {
      settings: {
        helpText: 'Used for named routes togehter with path name',
      },
      specs: {
        name: 'Path',
        required: true,
        type: 'Symbol',
        validations: [
          {
            unique: true,
          },
        ],
      },
      widgetId: 'slugEditor',
    },
    pathName: {
      settings: {
        helpText: 'Used for named routes togehter with path',
      },
      specs: {
        name: 'Path name',
        required: true,
        type: 'Symbol',
        validations: [
          {
            unique: true,
          },
        ],
      },
      widgetId: 'slugEditor',
    },
    sections: {
      settings: {
        helpText: 'Select sections',
      },
      specs: {
        items: {
          linkType: 'Entry',
          type: 'Link',
        },
        name: 'Sections',
        required: true,
        type: 'Array',
      },
      widgetId: 'entryLinksEditor',
    },
    seoDescription: {
      settings: {
        helpText: 'Description used by search engines',
      },
      specs: {
        name: 'SEO Description',
        required: true,
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
    seoTitle: {
      settings: {
        helpText: 'Title used by search engines',
      },
      specs: {
        name: 'SEO Title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    title: {
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
  },
  modelVersion: '1.0.0',
  name: 'Page',
  type: 'page',
}
