import { config } from './fixtures/wheelroom-config'
import { getAppDir } from '../get-app-dir'
import { getComponents } from './get-components'
import { getPluginOptions } from './get-plugin-options'
import { readConfig } from './read-config'
import { translateComponents } from './translate-components'

/**
 *  This test needs the compiled fixture in dist/lib/config/fixtures. To compile run
 *
 *  npm run build:compile
 */

describe('Readig config should provide', () => {
  test('the whole config from COMPILED! dist/lib/config/fixtures/wheelroom-config.js', async () => {
    const configRead = await readConfig(
      getAppDir(),
      'dist/lib/config/fixtures/wheelroom-config.js'
    )
    expect(configRead).toStrictEqual(config)
  })

  test('the configured plugin options', async () => {
    const options = getPluginOptions(config)
    expect(options).toMatchSnapshot()
  })

  test('the configured components for en locale', async () => {
    const components = await getComponents(config)
    translateComponents(components, 'en')
    expect(components).toMatchSnapshot()
  })

  test('the configured components for nl locale', async () => {
    const components = await getComponents(config)
    translateComponents(components, 'nl')
    expect(components).toMatchSnapshot()
  })
})
