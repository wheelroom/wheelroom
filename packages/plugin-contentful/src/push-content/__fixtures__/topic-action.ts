import { TypeData } from '@wheelroom/push/plain'

export const topicAction: TypeData = {
  ContentfulAction: {
    interface: {
      fieldTags: {
        heading: {
          '@type': 'Symbol',
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
        fileName: '/__fixtures__/action.ts',
        name: 'myActions',
        type: 'ContentfulAction',
        value: `[
  {
    heading: 'My action heading #0',
  },
]`,
      },
    ],
  },
  ContentfulTopic: {
    interface: {
      fieldTags: {
        heading: {
          '@type': 'Symbol',
        },
        actionsCollection: {
          '@description': 'Action field, this is the description',
          '@itemsLinkType': 'Entry',
          '@itemsType': 'Link',
          '@type': 'Array',
          '@validation': 'action',
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
