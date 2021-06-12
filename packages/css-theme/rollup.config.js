/**
 * Rollup build package
 * See: https://github.com/rollup/rollup-starter-lib
 *
 */
 import pluginTypescript from '@rollup/plugin-typescript'
 import pluginCommonjs from '@rollup/plugin-commonjs'
 import pluginNodeResolve from '@rollup/plugin-node-resolve'
 import multi from '@rollup/plugin-multi-entry'
 import json from '@rollup/plugin-json'
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
 
 const varsInputFiles = ['vars.ts']
 const elementsInputFiles = ['style-element.tsx']
 
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
   // Using multiple input files as entry points will yield a bundle with
   // exports for each
   multi(),
   json(),
 ]
 
 export default [
   {
     external,
     input: varsInputFiles.map((file) => `./src/${file}`),
     output: [
       {
         banner,
         exports: 'named',
         file: `./build/vars.mjs`,
         format: 'es',
         globals,
         sourcemap: false,
       },
       {
         banner,
         exports: 'named',
         file: `./build/vars.cjs`,
         format: 'cjs',
         globals,
         sourcemap: false,
       },
     ],
     plugins,
   },
   {
     external,
     input: elementsInputFiles.map((file) => `./src/${file}`),
     output: [
       {
         banner,
         exports: 'named',
         file: `./build/elements.mjs`,
         format: 'es',
         globals,
         sourcemap: false,
       },
       {
         banner,
         exports: 'named',
         file: `./build/elements.cjs`,
         format: 'cjs',
         globals,
         sourcemap: false,
       },
     ],
     plugins,
   },
 ]
 



