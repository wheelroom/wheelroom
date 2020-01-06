import { templateParser } from '../template-parser'
import {
  articleFragmentInput,
  articleQueryInput,
  articlesSectionFragmentInput,
  articlesSectionQueryInput,
  featuredPageSectionFragmentInput,
  featuredPageSectionQueryInput,
} from './input'
import {
  articleFragmentOutput,
  articleQueryOutput,
  articlesSectionFragmentOutput,
  articlesSectionQueryOutput,
  featuredPageSectionFragmentOutput,
  featuredPageSectionQueryOutput,
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
    expect(templateParser(articleQueryInput)).toStrictEqual(articleQueryOutput)
  })
  test('page query', async () => {
    expect(templateParser(articlesSectionQueryInput)).toStrictEqual(
      articlesSectionQueryOutput
    )
  })
  test('sub page query', async () => {
    expect(templateParser(featuredPageSectionQueryInput)).toStrictEqual(
      featuredPageSectionQueryOutput
    )
  })
})
