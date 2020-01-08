import * as wheelroom from '@jacco-meijer/wheelroom'
import { argvCommand } from '../../../fixtures/argv-command'
import { command } from '../command'
import { expectCallWriteFiles } from './expect-call-write-files'

jest.setTimeout(10000)

describe('Command create graphql should', () => {
  test('call wheelroom.writeFiles correctly', async () => {
    const fseSpy = jest.spyOn(wheelroom, 'writeFiles')
    await command.handler(argvCommand as any)
    expect(fseSpy).toHaveBeenCalledTimes(2)
    expect(fseSpy).toHaveBeenNthCalledWith(1, {
      ...expectCallWriteFiles,
      dryRun: true,
    })
    expect(fseSpy).toHaveBeenNthCalledWith(2, {
      ...expectCallWriteFiles,
      dryRun: false,
    })
    fseSpy.mockRestore()
  })
})
