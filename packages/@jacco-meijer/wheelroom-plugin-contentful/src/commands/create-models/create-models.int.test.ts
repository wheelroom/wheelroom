import { commandArgv } from '../../fixtures/command-argv'
import { command } from './command'

test('Command: create models', async () => {
  const spy = jest.spyOn(console, 'log')
  await command.handler(commandArgv as any)
  expect(spy).toHaveBeenCalledTimes(7)
  spy.mockRestore()
})
