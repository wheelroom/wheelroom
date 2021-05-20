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
  '@emotion/react': 'Interpolation, jsx. Theme',
  'react/jsx-runtime': 'jsx',
}
const external = Object.keys(globals)

const inputFiles = [
  { name: 'camel-to-dash', ext: 'ts', id: 'camelToDash' },
  { name: 'css-obj-to-vars', ext: 'ts', id: 'cssObjToVars' },
  { name: 'style-element', ext: 'tsx', id: 'styleElement' },
  { name: 'set-css-vars', ext: 'ts', id: 'setCssVars' },
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
      pluginTypescript({ tsconfig: 'tsconfig.packages.json' }),
    ],
  }
})
