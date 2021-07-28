jest.mock('../push-content/push-content')
jest.mock('../push-models/push-models')
jest.mock('contentful-management', () => ({ createClient }))

import chalk from 'chalk'
import { createClient, environmentMock } from '../lib/contentful-mock'
import { pushContent } from '../push-content/push-content'
import { pushModels } from '../push-models/push-models'
import { handler } from './handler'

const envMissingResponse = [
  [chalk.blue('- WHEELROOM_PROJECT_NAME env variable not found')],
  [chalk.red('- CONTENTFUL_SPACE_ID env variable is missing')],
  [chalk.red('- CONTENTFUL_CMA_TOKEN env variable is missing')],
  [chalk.red('- CONTENTFUL_ENVIRONMENT env variable is missing')],
]

const envOkResponse = [[chalk('- wheelroom project: ok')]]

// Make sure not to read .env.development
process.env.NODE_ENV = 'test'

const setEnv = (value?: string) => {
  if (value) {
    process.env.WHEELROOM_PROJECT_NAME = value
    process.env.CONTENTFUL_SPACE_ID = value
    process.env.CONTENTFUL_CMA_TOKEN = value
    process.env.CONTENTFUL_ENVIRONMENT = value
  } else {
    delete process.env.WHEELROOM_PROJECT_NAME
    delete process.env.CONTENTFUL_SPACE_ID
    delete process.env.CONTENTFUL_CMA_TOKEN
    delete process.env.CONTENTFUL_ENVIRONMENT
  }
}

describe('The handler should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  test('show environment warnings', async () => {
    setEnv()
    await handler({
      callCommand: 'push',
      callType: 'models',
      pluginData: { types: {}, dataVar: {} },
    })
    expect(consoleSpy.mock.calls).toEqual(envMissingResponse)
    expect(pushModels).toHaveBeenCalledTimes(0)
  })

  test('call pushModels', async () => {
    setEnv('ok')
    await handler({
      callCommand: 'push',
      callType: 'models',
      pluginData: { types: {}, dataVar: {} },
    })
    expect(consoleSpy.mock.calls).toEqual(envOkResponse)
    expect(pushModels).toHaveBeenCalledWith({
      contentfulEnvironment: environmentMock,
      typeData: {},
      validationsMap: {},
    })
  })

  test('call pushContent', async () => {
    setEnv('ok')
    await handler({
      callCommand: 'push',
      callType: 'content',
      pluginData: { types: {}, dataVar: {} },
    })
    expect(consoleSpy.mock.calls).toEqual(envOkResponse)
    expect(pushContent).toHaveBeenCalledWith({
      contentfulEnvironment: environmentMock,
      typeData: {},
    })
  })
})
