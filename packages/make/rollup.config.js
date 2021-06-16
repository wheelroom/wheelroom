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
  '@npmcli/arborist': 'Arborist',
  fs: 'fs',
  'fs/promises': 'mkdir',
  path: 'path',
  child_process: 'child_process',
  '@octokit/rest': 'Octokit',
  'conventional-changelog': 'conventionalChangelog',
  'conventional-changelog-conventionalcommits': 'conventionalChangelogConventionalcommits',
  'conventional-recommended-bump': 'conventionalRecommendedBump',
  deepmerge: 'deepmerge',
  inquirer: 'inquirer',
  semver: 'semver',
  yargs: 'yargs',
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
  pluginTypescript({ tsconfig: 'tsconfig.packages.json' }),
  json(),
]

export default [
  {
    external,
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
]
