/**
 * Rollup build package
 * See: https://github.com/rollup/rollup-starter-lib
 *
 */
import pluginTypescript from '@rollup/plugin-typescript'
import pluginCommonjs from '@rollup/plugin-commonjs'
import pluginNodeResolve from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import pkg from './package.json'
import rootPkg from '../../package.json'

const moduleName = pkg.name.replace(/^@.*\//, '')
const author = rootPkg.author
const globals = {
  fs: '*',
  path: '*',
  typescript: '*',
  '@microsoft/tsdoc': '*',
  yargs: '*',
}

const external = Object.keys(globals)

const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName} v${pkg.version}
   * Released under the ${rootPkg.license} license.
   */
  `

const plugins = [
  // so Rollup can find node modules
  pluginNodeResolve({
    preferBuiltins: true,
  }),
  // so Rollup can convert node modules to ES modules
  pluginCommonjs({
    extensions: ['.js', '.ts'],
  }),
  // so Rollup can convert TypeScript to JavaScript
  pluginTypescript({ tsconfig: 'tsconfig.json' }),
  json(),
]

export default [
  {
    external,
    inlineDynamicImports: true,
    input: './src/plain.ts',
    output: [
      {
        banner,
        exports: 'named',
        file: `./build/plain.mjs`,
        format: 'es',
        globals,
        sourcemap: false,
      },
      {
        banner,
        exports: 'named',
        file: `./build/plain.cjs`,
        format: 'cjs',
        globals,
        sourcemap: false,
      },
    ],
    plugins,
  },
  {
    external,
    inlineDynamicImports: true,
    input: './src/cli.ts',
    output: [
      {
        banner: `#!/usr/bin/env node\n${banner}`,
        exports: 'named',
        file: `./build/cli.mjs`,
        format: 'es',
        globals,
        sourcemap: false,
      },
      {
        banner: `#!/usr/bin/env node\n${banner}`,
        exports: 'named',
        file: `./build/cli.cjs`,
        format: 'cjs',
        globals,
        sourcemap: false,
      },
    ],
    plugins,
  },
  {
    external,
    inlineDynamicImports: true,
    input: './src/research/poc.ts',
    output: [
      {
        banner: `#!/usr/bin/env node\n${banner}`,
        exports: 'named',
        file: `./build/poc.mjs`,
        format: 'es',
        globals,
        sourcemap: false,
      },
      {
        banner: `#!/usr/bin/env node\n${banner}`,
        exports: 'named',
        file: `./build/poc.cjs`,
        format: 'cjs',
        globals,
        sourcemap: false,
      },
    ],
    plugins,
  },
]
