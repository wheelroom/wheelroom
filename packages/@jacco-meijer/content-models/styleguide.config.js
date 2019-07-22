module.exports = {
  components: 'src/components/*/*.{js,jsx,ts,tsx}',
  propsParser: require('react-docgen-typescript').parse,
  ignore: [
    '**/__tests__/**',
    '**/*-var.tsx',
    '**/*.d.ts',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/model.ts',
    '**/graphql.ts',
  ],
}
