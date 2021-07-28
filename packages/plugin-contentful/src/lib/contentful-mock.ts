import { Environment, Locale } from 'contentful-management/types'

const localeMock = {
  code: 'en-US',
  default: true,
  fallbackCode: 'en-US',
  name: 'English (United States)',
  optional: false,
} as Locale
export const contentTypeMock = {
  publish: async () => contentTypeMock,
  update: async () => contentTypeMock,
  getEditorInterface: async () => contentTypeMock,
}
export const getLocales = jest.fn(async () => [localeMock])
export const getContentType = jest.fn(async () => contentTypeMock)
export const createContentTypeWithId = jest.fn(async () => contentTypeMock)
export const environmentMock = {
  createContentTypeWithId,
  getContentType,
  getLocales,
} as unknown as Environment
export const getEnvironment = jest.fn(async () => environmentMock)
export const getSpace = jest.fn(async () => ({ getEnvironment }))
export const createClient = jest.fn(() => ({ getSpace }))
