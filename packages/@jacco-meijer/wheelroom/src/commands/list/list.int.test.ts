import { commandListArgv } from '../../fixtures/command-list-argv'
import { command } from './command'

test('List command', () => {
  const spy = jest.spyOn(console, 'log')
  command.handler(commandListArgv as any)
  expect(spy).toHaveBeenCalledTimes(7)
  spy.mockRestore()
})

test('List command with filter', () => {
  const commandListArgvWithFilter = Object.assign({}, commandListArgv)
  Object.assign(commandListArgvWithFilter, { filter: 'page' })

  const consoleSpy = jest.spyOn(console, 'log')
  command.handler(commandListArgvWithFilter as any)
  expect(consoleSpy).toHaveBeenCalledTimes(2)
  expect(consoleSpy.mock.calls[0][0]).toEqual(
    'Applying filter (componentName == page)'
  )
  consoleSpy.mockRestore()
})
