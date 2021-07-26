const contentTypeMock = {
  publish: async () => contentTypeMock,
  update: async () => contentTypeMock,
  getEditorInterface: async () => contentTypeMock,
}

jest.mock('contentful-management', () => ({
  createClient: () => ({
    getSpace: async () => ({
      getEnvironment: async () => ({
        createContentTypeWithId: async () => contentTypeMock,
        getContentType: async () => contentTypeMock,
      }),
    }),
  }),
}))

import { createClient } from 'contentful-management'
import { handler } from './main'
import { topicPluginData } from './__fixtures__/topic-plugin-data'

describe('The handler should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  test('run with topic data', async () => {
    await handler(topicPluginData)
    expect(consoleSpy).toHaveBeenCalledWith('todoA')
    expect(createClient).toHaveBeenCalledWith('todoB')
  })
})
