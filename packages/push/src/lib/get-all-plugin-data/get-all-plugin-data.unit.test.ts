import chalk from 'chalk'
import ts from 'typescript'
import { getCompilerOptions } from '../get-compiler-options/get-compiler-options'
import { getAllPluginData } from './get-all-plugin-data'

// jest.setTimeout(20000)

describe('getAllPluginData should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  const compilerOptions = getCompilerOptions()

  test('get data for topic.ts', async () => {
    const file = './src/lib/get-all-plugin-data/__fixtures__/topic.ts'
    const program = ts.createProgram([file], compilerOptions.options)
    const allPluginData = getAllPluginData({ program })
    expect(allPluginData).toMatchSnapshot()
  })

  test('get data for all-tags.ts', async () => {
    const file = './src/lib/get-all-plugin-data/__fixtures__/all-tags.ts'
    const program = ts.createProgram([file], compilerOptions.options)
    const allPluginData = getAllPluginData({ program })
    expect(allPluginData).toMatchSnapshot()
  })

  test('report processing file for no-tags.ts', async () => {
    const file = './src/lib/get-all-plugin-data/__fixtures__/no-tags.ts'
    const program = ts.createProgram([file], compilerOptions.options)
    getAllPluginData({ program })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      chalk.underline('src/lib/get-all-plugin-data/__fixtures__/no-tags.ts')
    )
  })

  test('report warnings for no-tags.ts (parse-wr-interface)', async () => {
    const file = './src/lib/get-all-plugin-data/__fixtures__/no-tags.ts'
    const program = ts.createProgram([file], compilerOptions.options)
    getAllPluginData({ program })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      chalk.red('- no TSDoc tags (Topic)')
    )
  })

  test('report warnings for no-plugin-tag (parse-wr-interface)', async () => {
    const file = './src/lib/get-all-plugin-data/__fixtures__/no-plugin-tag'
    const program = ts.createProgram([file], compilerOptions.options)
    getAllPluginData({ program })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      chalk.red('- no @plugin inline tag (Topic)')
    )
  })

  test('report warnings for no-wheelroom-field-tag (parse-wr-interface)', async () => {
    const file =
      './src/lib/get-all-plugin-data/__fixtures__/no-wheelroom-field-tag'
    const program = ts.createProgram([file], compilerOptions.options)
    getAllPluginData({ program })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      chalk.red('- no @wheelroom block tag for field (Topic/heading)')
    )
  })

  test('report warnings for no-wheelroom-interface-tag (parse-wr-interface)', async () => {
    const file =
      './src/lib/get-all-plugin-data/__fixtures__/no-wheelroom-interface-tag'
    const program = ts.createProgram([file], compilerOptions.options)
    getAllPluginData({ program })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      chalk.red('- no @wheelroom block tag for interface (Topic)')
    )
  })
})
