import { TypeData } from '@wheelroom/push/plain'

export const noInterfaceType: TypeData = {
  Topic: {
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
        '@plugin': '@wheelroom/plugin-contentful/plain',
      },
      typeName: 'Topic',
    },
    variables: [],
  },
}
