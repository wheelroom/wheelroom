import { config } from '../../fixtures/wheelroom-config'
import { getComponents } from '../../lib/config/get-components'
import { Components } from '../../types/components'
import { handler } from './handler'

const argv = {} as { components?: Components; filter?: string }

test('List command', async () => {
  const components = await getComponents(config)
  argv.components = components
  const spy = jest.spyOn(console, 'log')
  handler(argv)
  expect(spy).toHaveBeenCalledTimes(7)
  spy.mockRestore()
})

test('List command with filter', async () => {
  const components = await getComponents(config)
  argv.components = components
  argv.filter = 'page'
  const consoleSpy = jest.spyOn(console, 'log')
  handler(argv)
  expect(consoleSpy).toHaveBeenCalledTimes(2)

  expect(consoleSpy.mock.calls[0][0]).toEqual(
    'Applying filter (componentName == page)'
  )

  consoleSpy.mockRestore()
})
