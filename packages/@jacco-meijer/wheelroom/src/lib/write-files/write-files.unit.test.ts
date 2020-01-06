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

test('Command: create files dry run', async () => {
  const fseSpy = jest.spyOn(fse, 'outputFile')
  await writeFiles({ ...context, dryRun: true })
  expect(fseSpy).toHaveBeenCalledTimes(0)
  fseSpy.mockRestore()
})

test('Command: create files', async () => {
  const fseSpy = jest.spyOn(fse, 'outputFile')
  await writeFiles({ ...context, dryRun: false })
  expect(fseSpy).toHaveBeenCalledTimes(1)
  fseSpy.mockRestore()
})
