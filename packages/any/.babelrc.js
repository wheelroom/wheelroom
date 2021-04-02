module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      "@babel/preset-react",
      { "runtime": "automatic", "importSource": "@emotion/react" }
    ],
  ],
  plugins: [
    '@emotion/babel-plugin',
    '@babel/plugin-transform-runtime',
  ],
}
