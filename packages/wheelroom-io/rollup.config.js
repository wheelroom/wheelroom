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
  '@emotion/react': 'CSSObject, jsx',
  'react/jsx-runtime': 'jsx',
}
const external = Object.keys(globals)

const inputFiles = [{ name: 'static/set-css-vars', ext: 'ts' }]

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
        file: `./${file.name}.js`,
        format: 'umd',
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
      pluginTypescript({ tsconfig: 'tsconfig.static.json' }),
    ],
  }
})
