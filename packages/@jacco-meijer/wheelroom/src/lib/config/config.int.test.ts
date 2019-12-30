import { componentsOutput } from '../../fixtures/components-output'
import { pluginOptionsOutput } from '../../fixtures/plugin-options-output'
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
test('Read config', async () => {
  const path = getAppDir() + '/dist/fixtures'
  const configRead = await readConfig(path)
  expect(configRead).toStrictEqual(config)
})

test('Get components', async () => {
  const components = await getComponents(config)
  expect(components).toStrictEqual(componentsOutput)
})

test('Get plugin options', async () => {
  const options = getPluginOptions(config)
  expect(options).toStrictEqual(pluginOptionsOutput)
})
