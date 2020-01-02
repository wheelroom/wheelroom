import { argvCommand } from '../../fixtures/argv-command'
import { command } from './command'

test('Command: create files', async () => {
  await command.handler(argvCommand as any)
  expect(true).toBe(true)
})
