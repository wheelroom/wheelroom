import * as fse from 'fs-extra'
import { argvCommand } from '../../fixtures/argv-command'
import { command } from './command'

test('Command: create files', async () => {
  const writeFileSpy = jest.spyOn(fse, 'outputFile');
  await command.handler(argvCommand as any)
  expect(writeFileSpy).toHaveBeenCalledTimes(7)
  writeFileSpy.mockRestore()
})
