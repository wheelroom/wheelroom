import { TypeData } from '@wheelroom/push/plain'

export const topicTypeData: TypeData = {
  ContentfulAction: {
    interface: {
      fieldTags: {
        anchor: {
          '@helpText': 'Voorbeeld: mijn-anchor',
          '@type': 'Symbol',
        },
        description: {
          '@helpText': 'Omschrijving van de actie, voor zoekmachines',
          '@type': 'Symbol',
        },
        eventId: {
          '@type': 'Symbol',
        },
        heading: {
          '@type': 'Symbol',
        },
        query: {
          '@type': 'Symbol',
        },
        url: {
          '@type': 'Symbol',
        },
      },
      interfaceTags: {
        '@plugin': '@wheelroom/plugin-contentful/plain',
        '@type': 'testAction',
      },
      typeName: 'ContentfulAction',
    },
    variables: [],
  },
  ContentfulTopic: {
    interface: {
      fieldTags: {
        abstract: {
          '@type': 'Symbol',
          '@validation': 'shortString',
        },
        actionsCollection: {
          '@description': 'Action field, this is the description',
          '@itemsLinkType': 'Entry',
          '@itemsType': 'Link',
          '@type': 'Array',
          '@validation': 'action',
        },
        heading: {
          '@type': 'Symbol',
        },
        icon: {
          '@type': 'Symbol',
        },
        mediaCollection: {
          '@itemsLinkType': 'Asset',
          '@itemsType': 'Link',
          '@type': 'Array',
        },
        poster: {
          '@linkType': 'Asset',
          '@type': 'Link',
        },
      },
      interfaceTags: {
        '@description':
          'Topic model, a heading, an abstract and a call to action',
        '@displayField': 'heading',
        '@plugin': '@wheelroom/plugin-contentful/plain',
        '@type': 'testTopic',
      },
      typeName: 'ContentfulTopic',
    },
    variables: [
      {
        fileName:
          '/Users/jacco/Development/wheelroom/packages/push/src/lib/get-all-plugin-data/__fixtures__/topic.ts',
        isArray: true,
        isExported: true,
        isObject: false,
        isTyped: true,
        name: 'myTopics',
        type: 'ContentfulTopic',
        value: `[
  {
    abstract: 'This is the abstract',
    actionsCollection: {
      items: [
        {
          heading: 'Hello',
          anchor: 'anchor',
        },
      ],
    },
    heading: 'Heres the heading',
  },
]`,
      },
    ],
  },
}
