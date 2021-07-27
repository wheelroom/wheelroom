import { TypeData } from '@wheelroom/push/plain'

export const noInterfaceType: TypeData = {
  Topic: {
    interface: {
      fieldTags: {
        heading: {
          '@type': 'Symbol',
        },
      },
      interfaceTags: {
        '@plugin': '@wheelroom/plugin-contentful/plain',
      },
      typeName: 'Topic',
    },
    variables: [],
  },
}
