import { Environment } from 'contentful-management/types'

export const contentTypeMock = {
  publish: async () => contentTypeMock,
  update: async () => contentTypeMock,
  getEditorInterface: async () => contentTypeMock,
}
export const getContentType = jest.fn(async () => contentTypeMock)
export const createContentTypeWithId = jest.fn(async () => contentTypeMock)
export const environmentMock = {
  createContentTypeWithId,
  getContentType,
} as unknown as Environment
export const getEnvironment = jest.fn(async () => environmentMock)
export const getSpace = jest.fn(async () => ({ getEnvironment }))
export const createClient = jest.fn(() => ({ getSpace }))
