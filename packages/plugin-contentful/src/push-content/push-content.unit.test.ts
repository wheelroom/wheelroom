import { environmentMock } from '../lib/contentful-mock'
import { getAndValidateEnv } from '../lib/get-and-validate-env'
import { pushContent } from './push-content'
import { topicAction } from './__fixtures__/topic-action'

describe('Push content should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  test('process topicAction correctly', async () => {
    process.env.NODE_ENV = 'development'
    getAndValidateEnv()

    await pushContent({
      contentfulEnvironment: environmentMock,
      typeData: topicAction,
    })
  })
})
