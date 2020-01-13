import { createParser, replaceFunctions } from '@jacco-meijer/wheelroom'
import { replaceFunctions as localReplaceFunction } from '../replace-functions'
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

describe('Graphql parser should parse', () => {
  const parser = createParser({})
  parser.addReplaceFunctions([...replaceFunctions, ...localReplaceFunction])

  test('article fragment', async () => {
    parser.updateVars(articleFragmentInput.replaceVars)
    expect(parser.parse(articleFragmentInput.unparsed)).toStrictEqual(
      articleFragmentOutput
    )
  })
  test('articles sections fragment', async () => {
    parser.updateVars(articlesSectionFragmentInput.replaceVars)
    expect(parser.parse(articlesSectionFragmentInput.unparsed)).toStrictEqual(
      articlesSectionFragmentOutput
    )
  })
  test('featured page section fragment', async () => {
    parser.updateVars(featuredPageSectionFragmentInput.replaceVars)
    expect(
      parser.parse(featuredPageSectionFragmentInput.unparsed)
    ).toStrictEqual(featuredPageSectionFragmentOutput)
  })
  test('global query', async () => {
    parser.updateVars(articleQueryInput.replaceVars)
    expect(parser.parse(articleQueryInput.unparsed)).toStrictEqual(
      articleQueryOutput
    )
  })
  test('page query', async () => {
    parser.updateVars(articlesSectionQueryInput.replaceVars)
    expect(parser.parse(articlesSectionQueryInput.unparsed)).toStrictEqual(
      articlesSectionQueryOutput
    )
  })
  test('sub page query', async () => {
    parser.updateVars(featuredPageSectionQueryInput.replaceVars)
    expect(parser.parse(featuredPageSectionQueryInput.unparsed)).toStrictEqual(
      featuredPageSectionQueryOutput
    )
  })
})
