import { TypeData } from '@wheelroom/push/plain'

export const topicAction: TypeData = {
  ContentfulAction: {
    interface: {
      fields: {
        heading: {
          tags: {
            '@type': 'Symbol',
          },
          type: 'string | undefined',
        },
      },
      interfaceTags: {
        '@displayField': 'heading',
        '@plugin': '@wheelroom/plugin-contentful/plain',
        '@type': 'testAction',
      },
      typeName: 'ContentfulAction',
    },
    variables: [
      {
        fileName: '/__fixtures__/topic-action.ts',
        isArray: true,
        isExported: true,
        isObject: false,
        isTyped: true,
        name: 'myActions',
        type: 'ContentfulAction',
        value: `[
{
sys: {
  id: 'myContentAdtionId',
},
heading: 'Hello',
anchor: 'anchor',
},
]`,
      },
    ],
  },
  ContentfulTopic: {
    interface: {
      fields: {
        heading: {
          tags: {
            '@type': 'Symbol',
          },
          type: 'string | undefined',
        },
        actionsCollection: {
          tags: {
            '@description': 'Action field, this is the description',
            '@itemsLinkType': 'Entry',
            '@itemsType': 'Link',
            '@type': 'Array',
            '@validation': 'action',
          },
          type: '{ items: ContentfulAction[]; } | undefined',
        },
      },
      interfaceTags: {
        '@displayField': 'heading',
        '@plugin': '@wheelroom/plugin-contentful/plain',
        '@type': 'testTopic',
      },
      typeName: 'ContentfulTopic',
    },
    variables: [
      {
        fileName: '/__fixtures__/topic.ts',
        isArray: true,
        isExported: true,
        isObject: false,
        isTyped: true,
        name: 'myTopics',
        type: 'ContentfulTopic',
        value: `[
  {
    heading: 'My topic heading #0',
    actionsCollection: {
      items: [
        {
          heading: 'Action inline',
        },
        {
          sys: {
            id: 'myActions0',
          }
        },
      ],
    },
  },
]`,
      },
    ],
  },
}
