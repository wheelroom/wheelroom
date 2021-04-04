import pluginTypescript from '@rollup/plugin-typescript'
import pluginCommonjs from '@rollup/plugin-commonjs'
import { babel } from '@rollup/plugin-babel'
import * as path from 'path'
import pkg from './package.json'
// import pluginNodeResolve from '@rollup/plugin-node-resolve'
// import { terser } from 'rollup-plugin-terser'

const moduleName = pkg.name.replace(/^@.*\//, '')
const dir = './build'
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

export default [
  {
    input: {
      Any: 'src/Any.tsx',
      elements: 'src/elements.tsx',
      'resets/any-reset': 'src/resets/any-reset.ts',
      'resets/element-reset-map': 'src/resets/element-reset-map.ts',
      'resets/global-reset': 'src/resets/global-reset.ts',
    },
    output: [
      {
        entryFileNames: '[name].mjs',
        dir,
        format: 'es',
        banner,
        exports: 'named',
        globals,
      },
      {
        entryFileNames: '[name].cjs',
        dir,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'named',
        globals,
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
  },
]
