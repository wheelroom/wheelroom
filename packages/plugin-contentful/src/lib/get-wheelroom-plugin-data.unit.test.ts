import { getWheelroomPluginData } from './get-wheelroom-plugin-data'

const dataVar = {
  fileName: '/__fixtures__/topic.ts',
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
        camelCase: {
          regexp: { pattern: '^[a-z]+([A-Z][a-z0-9]+)*$', flags: '' },
        },
      },
    },
  }`,
}

describe('getWheelroomPluginData should', () => {
  test('get data correctly', async () => {
    const data = getWheelroomPluginData({ dataVar })
    expect(data).toMatchSnapshot()
  })
})
