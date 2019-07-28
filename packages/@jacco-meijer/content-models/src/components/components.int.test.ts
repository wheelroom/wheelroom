import { components } from './components'

const componentNames = [
  'article',
  'articleSection',
  'articlesSection',
  'authorSection',
  'bicycleMap',
  'bicycleSection',
  'bicycleText',
  'featuredPageSection',
  'footerSection',
  'globals',
  'navigation',
  'openerSection',
  'page',
]

test('All templates are exported', () => {
  expect(Object.keys(components)).toStrictEqual(componentNames)
})

test('Component contains a model', () => {
  Object.keys(components).forEach((name: string) => {
    const component = (components as any)[name]
    expect(typeof component).toBe('object')
    expect(typeof component.model).toBe('object')
  })
})

test('Component contains fragment and/or query', () => {
  Object.keys(components).forEach((name: string) => {
    const component = (components as any)[name]
    const wheelroomType = component.model.wheelroomType
    const subFields = Object.keys(component).sort()
    if (wheelroomType === 'section') {
      expect(subFields).toStrictEqual(['fragment', 'model'])
    }
    if (wheelroomType === 'part') {
      expect(subFields).toStrictEqual(['fragment', 'model'])
    }
    if (wheelroomType === 'block') {
      expect(subFields).toStrictEqual(['model'])
    }
    if (wheelroomType === 'page') {
      expect(subFields).toStrictEqual(['model', 'query'])
    }
    if (wheelroomType === 'global') {
      expect(subFields).toStrictEqual(['fragment', 'model', 'query'])
    }
    if (wheelroomType === 'subPage') {
      expect(subFields).toStrictEqual(['fragment', 'model', 'query'])
    }
  })
})
