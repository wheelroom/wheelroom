import { argvCommand } from '../../fixtures/argv-command'
import { command } from './command'

test('Command: list', () => {
  const spy = jest.spyOn(console, 'log')
  command.handler(argvCommand as any)
  expect(spy).toHaveBeenCalledTimes(7)
  spy.mockRestore()
})

test('Command: list with filter', () => {
  const argvCommandWithFilter = Object.assign({}, argvCommand, {
    filter: 'page',
  })

  const consoleSpy = jest.spyOn(console, 'log')
  command.handler(argvCommandWithFilter as any)
  expect(consoleSpy).toHaveBeenCalledTimes(2)
  expect(consoleSpy.mock.calls[0][0]).toEqual(
    'Applying filter (componentName == page)'
  )
  consoleSpy.mockRestore()
})
