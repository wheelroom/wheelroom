import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description:
    'A page defines routes and references to components on the page.',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo page title',
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
    // tslint:disable-next-line: object-literal-sort-keys
    image: {
      initialContent: 'asset',
      settings: {
        helpText: 'Page image',
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
    navigationTitle: {
      initialContent: 'Demo navigation title',
      settings: {
        helpText: "Title used for buttons and in navigation menu's",
      },
      specs: {
        name: 'Navigation title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    path: {
      initialContent: '/',
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
      initialContent: 'demo',
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
      initialContent: 'initialPageSection',
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
      initialContent: 'Demo SEO description',
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
      initialContent: 'Demo SEO title',
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
  },
  modelVersion: '1.0.0',
  name: 'Page',
  type: 'page',
  wheelroomType: 'page',
} as Model
