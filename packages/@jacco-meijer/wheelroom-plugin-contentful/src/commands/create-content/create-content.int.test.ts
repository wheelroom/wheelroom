import { argvCommand } from '../../fixtures/argv-command'
import { command } from './command'

/**
 * Creating content takes longer than the default 5 seconds max
 */
jest.setTimeout(60000)

test('Command: create models', async () => {
  const spy = jest.spyOn(console, 'log')
  await command.handler(argvCommand as any)
  expect(spy).toBeCalled()
  spy.mockRestore()
})
