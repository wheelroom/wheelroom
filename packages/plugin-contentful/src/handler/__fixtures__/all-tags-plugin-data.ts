import { PushHandlerArgs } from '@wheelroom/push/plain'

export const allTagsPluginData: PushHandlerArgs = {
  callCommand: 'push',
  callType: 'models',
  pluginData: {
    dataVar: {},
    types: {
      Topic: {
        interface: {
          fieldTags: {
            heading: {
              '@helpText': 'The topic heading',
              '@itemsLinkType': 'Entry',
              '@itemsType': 'Link',
              '@linkType': 'Symbol',
              '@localized': '',
              '@name': 'Heading',
              '@required': '',
              '@type': 'Array',
              '@validation': 'unique',
              '@widget': 'singleLine',
            },
          },
          interfaceTags: {
            '@plugin': '@wheelroom/plugin-contentful/plain',
            '@type': 'topic',
          },
          typeName: 'Topic',
        },
        variables: [],
      },
    },
  },
}