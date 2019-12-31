import { commandArgv } from '../../fixtures/command-argv'
import { command } from './command'

test('Command: list', () => {
  const spy = jest.spyOn(console, 'log')
  command.handler(commandArgv as any)
  expect(spy).toHaveBeenCalledTimes(7)
  spy.mockRestore()
})

test('Command: list with filter', () => {
  const commandArgvWithFilter = Object.assign({}, commandArgv, {
    filter: 'page',
  })

  const consoleSpy = jest.spyOn(console, 'log')
  command.handler(commandArgvWithFilter as any)
  expect(consoleSpy).toHaveBeenCalledTimes(2)
  expect(consoleSpy.mock.calls[0][0]).toEqual(
    'Applying filter (componentName == page)'
  )
  consoleSpy.mockRestore()
})
