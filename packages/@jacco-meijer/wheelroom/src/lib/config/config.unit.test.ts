import { argvComponents } from '../../fixtures/argv-components'
import { argvPluginOptions } from '../../fixtures/argv-plugin-options'
import { config } from '../../fixtures/wheelroom-config'
import { getAppDir } from '../get-app-dir'
import { getComponents } from './get-components'
import { getPluginOptions } from './get-plugin-options'
import { readConfig } from './read-config'

/**
 *  This test needs the compiled fixture in dist/fictures. To compile run
 *
 *  npm run build:compile
 */

describe('Readig config should provide', () => {
  test('the whole config', async () => {
    const configRead = await readConfig(
      getAppDir(),
      'dist/fixtures/wheelroom-config.js'
    )
    expect(configRead).toStrictEqual(config)
  })

  test('the configured components', async () => {
    const components = await getComponents(config)
    expect(components).toStrictEqual(argvComponents)
  })

  test('the configured plugin options', async () => {
    const options = getPluginOptions(config)
    expect(options).toStrictEqual(argvPluginOptions)
  })
})
