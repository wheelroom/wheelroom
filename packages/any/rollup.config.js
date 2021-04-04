import pluginTypescript from '@rollup/plugin-typescript'
import pluginCommonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import * as path from 'path'
import pkg from './package.json'
// import pluginNodeResolve from '@rollup/plugin-node-resolve'
// import { terser } from 'rollup-plugin-terser'

const moduleName = pkg.name.replace(/^@.*\//, '')
const author = pkg.author
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`
const external = [
  'react',
  'react-dom',
  '@emotion/css',
  '@emotion/react',
  'react/jsx-runtime',
]
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  '@emotion/react': ['Interpolation', 'jsx', 'Theme'],
}
const inputFiles = [
  { name: 'Any', ext: 'tsx' },
  { name: 'elements', ext: 'tsx' },
  { name: 'resets/any-reset', ext: 'ts' },
  { name: 'resets/element-reset-map', ext: 'ts' },
  { name: 'resets/global-reset', ext: 'ts' },
]

export default inputFiles.map((file) => ({
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
      file: `./build/${file.name}.cjs`,
      format: 'cjs',
      globals,
      sourcemap: 'inline',
      sourcemap: false,
    },
  ],
  plugins: [
    pluginTypescript(),
    pluginCommonjs({
      extensions: ['.js', '.ts'],
    }),
    babel({
      babelHelpers: 'bundled',
      configFile: path.resolve(__dirname, '.babelrc.js'),
    }),
  ],
}))
