const contentTypeMock = {
  publish: async () => contentTypeMock,
  update: async () => contentTypeMock,
  getEditorInterface: async () => contentTypeMock,
}
const getContentType = jest.fn(async () => contentTypeMock)
const createContentTypeWithId = jest.fn(async () => contentTypeMock)
const environmentMock = {
  createContentTypeWithId,
  getContentType,
}
const getEnvironment = jest.fn(async () => environmentMock)
const getSpace = jest.fn(async () => ({ getEnvironment }))
const createClient = jest.fn(() => ({ getSpace }))
jest.mock('contentful-management', () => ({ createClient }))

import { handler } from './handler'
import { topicPluginData } from './__fixtures__/topic-plugin-data'

describe('The handler should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  test('push model data', async () => {
    await handler(topicPluginData)
    expect(consoleSpy.mock.calls).toMatchSnapshot()
  })
  test('push model content', async () => {
    topicPluginData.callType = 'content'
    await handler(topicPluginData)
    expect(consoleSpy.mock.calls).toMatchSnapshot()
  })
})
