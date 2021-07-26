import { createClient, environmentMock } from '../lib/contentful-mock'

jest.mock('../push-content/push-content')
jest.mock('../push-models/push-models')
jest.mock('contentful-management', () => ({ createClient }))

import { pushContent } from '../push-content/push-content'
import { pushModels } from '../push-models/push-models'
import { handler } from './handler'

describe('The handler should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  test('call pushModels', async () => {
    await handler({
      callCommand: 'push',
      callType: 'models',
      pluginData: { types: {}, dataVar: {} },
    })
    expect(pushModels).toHaveBeenCalledWith({
      contentfulEnvironment: environmentMock,
      typeData: {},
      validationsMap: {},
    })
  })

  test('call pushContent', async () => {
    await handler({
      callCommand: 'push',
      callType: 'content',
      pluginData: { types: {}, dataVar: {} },
    })
    expect(pushContent).toHaveBeenCalledWith({
      contentfulEnvironment: environmentMock,
      typeData: {},
    })
  })
})
