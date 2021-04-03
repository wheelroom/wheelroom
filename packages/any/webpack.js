const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  target: 'es5',
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.join(__dirname, './build'),
    // filename: `[name].js`,
  },
  entry: {
    'umd/Any': {
      filename: `[name].js`,
      import: './src/Any.tsx',
      library: { type: 'umd', umdNamedDefine: true },
    },
    'cjs/Any': {
      filename: `[name].js`,
      import: './src/Any.tsx',
      library: { type: 'commonjs', umdNamedDefine: true },
    },
    'umd/elements': {
      filename: `[name].js`,
      import: './src/elements.tsx',
      library: { type: 'umd', umdNamedDefine: true },
    },
    'cjs/elements': {
      filename: `[name].js`,
      import: './src/elements.tsx',
      library: { type: 'commonjs', umdNamedDefine: true },
    },
    'umd/resets/any-reset': {
      filename: `[name].js`,
      import: './src/resets/any-reset.ts',
      library: { type: 'umd', umdNamedDefine: true },
    },
    'cjs/resets/any-reset': {
      filename: `[name].js`,
      import: './src/resets/any-reset.ts',
      library: { type: 'commonjs', umdNamedDefine: true },
    },
    'umd/resets/element-reset-map': {
      filename: `[name].js`,
      import: './src/resets/element-reset-map.ts',
      library: { type: 'umd', umdNamedDefine: true },
    },
    'cjs/resets/element-reset-map': {
      filename: `[name].js`,
      import: './src/resets/element-reset-map.ts',
      library: { type: 'commonjs', umdNamedDefine: true },
    },
    'umd/resets/global-reset': {
      filename: `[name].js`,
      import: './src/resets/global-reset.ts',
      library: { type: 'umd', umdNamedDefine: true },
    },
    'cjs/resets/global-reset': {
      filename: `[name].js`,
      import: './src/resets/global-reset.ts',
      library: { type: 'commonjs', umdNamedDefine: true },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              [
                '@babel/preset-react',
                { runtime: 'automatic', importSource: '@emotion/react' },
              ],
            ],
            plugins: [
              '@emotion/babel-plugin',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },
}
