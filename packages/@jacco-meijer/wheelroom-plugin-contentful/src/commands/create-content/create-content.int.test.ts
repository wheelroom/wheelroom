import { argvCommand } from '../../fixtures/argv-command'
import { command } from './command'

test('Command: create content', () => {
  const spy = jest.spyOn(console, 'log')
  command.handler(argvCommand as any)
  expect(spy).toHaveBeenCalledTimes(7)
  spy.mockRestore()
})
