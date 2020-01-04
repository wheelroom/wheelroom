import { templateParser } from '../template-parser'
import {
  articleFragmentInput,
  articlesSectionFragmentInput,
  featuredPageSectionFragmentInput,
  globalQueryInput,
  pageQueryInput,
  subPageQueryInput,
} from './input'
import {
  articleFragmentOutput,
  articlesSectionFragmentOutput,
  featuredPageSectionFragmentOutput,
  globalQueryOutput,
  pageQueryOutput,
  subPageQueryOutput,
} from './output'

jest.setTimeout(10000)

describe('Template parser should parse', () => {
  test('article fragment', async () => {
    expect(templateParser(articleFragmentInput)).toStrictEqual(
      articleFragmentOutput
    )
  })
  test('articles sections fragment', async () => {
    expect(templateParser(articlesSectionFragmentInput)).toStrictEqual(
      articlesSectionFragmentOutput
    )
  })
  test('featured page section', async () => {
    expect(templateParser(featuredPageSectionFragmentInput)).toStrictEqual(
      featuredPageSectionFragmentOutput
    )
  })
  test('global query', async () => {
    expect(templateParser(globalQueryInput)).toStrictEqual(globalQueryOutput)
  })
  test('page query', async () => {
    expect(templateParser(pageQueryInput)).toStrictEqual(pageQueryOutput)
  })
  test('sub page query', async () => {
    expect(templateParser(subPageQueryInput)).toStrictEqual(subPageQueryOutput)
  })
})
