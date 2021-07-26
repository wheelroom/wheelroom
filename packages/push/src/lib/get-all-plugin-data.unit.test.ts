import ts from 'typescript'
import { getAllPluginData } from './get-all-plugin-data'
import { getCompilerOptions } from './get-compiler-options'

describe('getAllPluginData should', () => {
  const compilerOptions = getCompilerOptions()

  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

  test('get data for topic.ts', async () => {
    const file = './src/lib/get-all-plugin-data.fixtures/topic.ts'
    const program = ts.createProgram([file], compilerOptions.options)
    const allPluginData = getAllPluginData({ program })
    expect(allPluginData).toMatchSnapshot()
    expect(consoleSpy).toHaveBeenCalledTimes(12)
  })
})
