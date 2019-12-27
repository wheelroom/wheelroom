import { templates } from './templates'

const templateNames = [
  'componentBasicVar',
  'componentIndex',
  'componentNoVariations',
  'componentReadme',
  'componentVariations',
  'configReadme',
  'defaults',
  'fragment',
  'graphqlFragment',
  'graphqlFragmentQuery',
  'indexBlock',
  'indexSectionPart',
  'indexSubPageGlobal',
  'modelNoVariation',
  'modelVariation',
  'sectionProps',
]

test('All templates are exported', () => {
  expect(Object.keys(templates)).toStrictEqual(templateNames)
})

test('Template is a function', () => {
  Object.keys(templates).forEach((name) => {
    const template = (templates)[name]
    expect(typeof template).toBe('function')
  })
})
