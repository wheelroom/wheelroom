import { TypeData } from '@wheelroom/push/plain'

export const ignoreField: TypeData = {
  Topic: {
    interface: {
      fieldTags: {
        heading: {
          '@helpText': 'The topic heading',
          '@ignore': '',
          '@type': 'Symbol',
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
