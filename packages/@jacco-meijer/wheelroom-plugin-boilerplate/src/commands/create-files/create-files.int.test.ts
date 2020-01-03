import * as wheelroom from '@jacco-meijer/wheelroom'
import { argvCommand } from '../../fixtures/argv-command'
import { writeFilesOutput } from '../../fixtures/write-files-output'
import { command } from './command'

test('Command: create files', async () => {
  const fseSpy = jest.spyOn(wheelroom, 'writeFiles')
  await command.handler(argvCommand as any)
  expect(fseSpy).toHaveBeenCalledTimes(2)
  expect(fseSpy).toHaveBeenNthCalledWith(1, {
    ...writeFilesOutput,
    dryRun: true,
  })
  expect(fseSpy).toHaveBeenNthCalledWith(2, {
    ...writeFilesOutput,
    dryRun: false,
  })
})
