/**
 * Rollup build package
 * See: https://github.com/rollup/rollup-starter-lib
 *
 */
import pluginTypescript from '@rollup/plugin-typescript'
import pluginCommonjs from '@rollup/plugin-commonjs'
import pluginNodeResolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import rootPkg from '../../package.json'

const moduleName = pkg.name.replace(/^@.*\//, '')
const author = rootPkg.author
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@emotion/css': 'css',
  '@emotion/react': 'Interpolation, jsx. Theme',
  'react/jsx-runtime': 'jsx',
}
const external = Object.keys(globals)

const inputFiles = [
  { name: 'Any', ext: 'tsx', id: 'Any' },
  { name: 'elements', ext: 'tsx', id: 'elements' },
  { name: 'resets/any-reset', ext: 'ts', id: 'anyReset' },
  { name: 'resets/element-reset-map', ext: 'ts', id: 'elementResetMap' },
  { name: 'resets/global-reset', ext: 'ts', id: 'globalReset' },
]

export default inputFiles.map((file) => {
  const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}/${file.name} v${pkg.version}
   * Released under the ${rootPkg.license} license.
   */
`

  return {
    external,
    input: `./src/${file.name}.${file.ext}`,
    output: [
      {
        banner,
        exports: 'named',
        file: `./build/${file.name}.mjs`,
        format: 'es',
        globals,
        sourcemap: false,
      },
      {
        banner,
        exports: 'named',
        file: `./build/${file.name}.js`,
        format: 'cjs',
        globals,
        sourcemap: false,
      },
    ],
    plugins: [
      // so Rollup can find node modules
      pluginNodeResolve(),
      // so Rollup can convert node modules to ES modules
      pluginCommonjs({
        extensions: ['.js', '.ts'],
      }),
      // so Rollup can convert TypeScript to JavaScript
      pluginTypescript(),
    ],
  }
})
