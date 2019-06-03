export default {
  description: 'Article section',
  displayField: 'title',
  fields: {
    articleText: {
      specs: {
        localized: true,
        name: 'Article text',
        required: false,
        type: 'RichText',
      },
    },
    title: {
      settings: {
        helpText: 'Never displayed, only used for listing within Contentful',
      },
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
        validations: [{ size: { min: 0, max: 255 } }],
      },
      widgetId: 'singleLine',
    },
    variation: {
      settings: {
        helpText: 'Select section-opener',
      },
      specs: {
        name: 'Article variation',
        required: true,
        type: 'Symbol',
        validations: [
          {
            in: [
              'Linked article text, derived from slug in url',
              'Inline article text, specific to this section',
            ],
          },
        ],
      },
      widgetId: 'dropdown',
    },
  },
  modelVersion: '1.0.0',
  name: 'Article section',
  type: 'articleSection',
}
