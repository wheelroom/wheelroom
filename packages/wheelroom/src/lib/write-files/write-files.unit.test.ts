import fse from 'fs-extra'
import { writeFiles } from './write-files'

const context = {
  fileList: [
    {
      basePath: 'test-output',
      content: '# Test content\n\n## Chapter',
      relPath: 'test-file.md',
    },
  ],
  yes: true,
}
describe('Writing files should', () => {
  test('not call fse.outputfil on a dry run', async () => {
    const fseSpy = jest.spyOn(fse, 'outputFile')
    await writeFiles({ ...context, dryRun: true })
    expect(fseSpy).toHaveBeenCalledTimes(0)
    fseSpy.mockRestore()
  })

  test('call fse.outputfile on a actual run', async () => {
    const fseSpy = jest.spyOn(fse, 'outputFile')
    await writeFiles({ ...context, dryRun: false })
    expect(fseSpy).toHaveBeenCalledTimes(1)
    fseSpy.mockRestore()
  })
})
