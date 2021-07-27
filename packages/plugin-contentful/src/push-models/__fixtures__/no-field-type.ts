import { TypeData } from '@wheelroom/push/plain'

export const noFieldType: TypeData = {
  Topic: {
    interface: {
      fieldTags: {
        heading: {
          '@helpText': 'The topic heading',
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
}
