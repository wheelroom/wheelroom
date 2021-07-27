import { TypeData } from '@wheelroom/push/plain'

export const ignoreInterface: TypeData = {
  Topic: {
    interface: {
      fieldTags: {
        heading: {
          '@helpText': 'The topic heading',
          '@type': 'Symbol',
        },
      },
      interfaceTags: {
        '@ignore': '',
        '@plugin': '@wheelroom/plugin-contentful/plain',
        '@type': 'topic',
      },
      typeName: 'Topic',
    },
    variables: [],
  },
}
