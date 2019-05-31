module.exports = {
  propsParser: require('react-docgen-typescript').parse,
  ignore: [
    '**/__tests__/**',
    '**/*-gatsby.tsx',
    '**/*-var.tsx',
    '**/*.d.ts',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/model.ts',
    '**/variations.ts',
  ],
}
