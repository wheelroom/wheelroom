import { PushHandlerArgs } from '@wheelroom/push/plain'

export const topicPluginData: PushHandlerArgs = {
  callCommand: 'push',
  callType: 'models',
  pluginData: {
    dataVar: {
      fileName:
        '/Users/jacco/Development/wheelroom/packages/push/src/lib/get-all-plugin-data/__fixtures__/topic.ts',
      isArray: false,
      isExported: true,
      isObject: true,
      isTyped: true,
      name: 'wheelroomPluginData',
      type: 'WheelroomPluginData',
      value: `{
  '@wheelroom/plugin-contentful/plain': {
    validations: {
      dropdown: { in: ['item A', 'item B', 'item C'] },
      media: { linkMimetypeGroup: ['image', 'video'] },
      action: { linkContentType: ['action'] },
      shortString: { size: { max: 155, min: 0 } },
      camelCase: {
        regexp: { pattern: '^[a-z]+([A-Z][a-z0-9]+)*$', flags: '' },
      },
      path: {
        regexp: {
          pattern: '^\\\\\\\\/[a-z0-9:\\\\\\\\._/~%\\\\\\\\-\\\\\\\\+&\\\\\\\\#\\\\\\\\?!=\\\\\\\\(\\\\\\\\)@]*$',
          flags: '',
        },
      },
      url: {
        regexp: {
          pattern:
            '^(ftp|http|https|mailto):(\\\\\\\\/\\\\\\\\/)*(\\\\\\\\w+:{0,1}\\\\\\\\w*@)?(\\\\\\\\S+)(:[0-9]+)?(\\\\\\\\/|\\\\\\\\/([\\\\\\\\w#!:.?+=&%@!\\\\\\\\-/]))?$',
          flags: '',
        },
      },
    },
  },
}`,
    },
    types: {
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
    },
  },
}
