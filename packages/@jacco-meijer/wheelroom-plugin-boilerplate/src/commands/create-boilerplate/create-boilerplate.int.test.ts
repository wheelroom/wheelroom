import * as wheelroom from '@jacco-meijer/wheelroom'
import { argvCommand } from '../../fixtures/argv-command'
import { resultWriteFiles } from '../../fixtures/result-write-files'
import { command } from './command'

test('Command: create files', async () => {
  const fseSpy = jest.spyOn(wheelroom, 'writeFiles')
  await command.handler(argvCommand as any)
  expect(fseSpy).toHaveBeenCalledTimes(2)
  expect(fseSpy).toHaveBeenNthCalledWith(1, {
    ...resultWriteFiles,
    dryRun: true,
  })
  expect(fseSpy).toHaveBeenNthCalledWith(2, {
    ...resultWriteFiles,
    dryRun: false,
  })
  fseSpy.mockRestore()
})
