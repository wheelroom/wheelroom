import { TypeData } from '@wheelroom/push/plain'

export const badValidation: TypeData = {
  Topic: {
    interface: {
      fieldTags: {
        heading: {
          '@type': 'Symbol',
          '@validation': 'doesNotExist',
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
