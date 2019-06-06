module.exports = {
  components: 'src/components/**/*.{js,jsx,ts,tsx}',
  propsParser: require('react-docgen-typescript').parse,
  ignore: [
    '**/__tests__/**',
    '**/*-graphql.tsx',
    '**/*-var.tsx',
    '**/*.d.ts',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/model.ts',
    '**/query.ts',
    '**/variations.ts',
  ],
}
