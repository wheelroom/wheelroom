import chalk from 'chalk'
import { environmentMock } from '../lib/contentful-mock'
import { pushModels } from './push-models'
import { allTags } from './__fixtures__/all-tags'
import { badValidation } from './__fixtures__/bad-validation'
import { ignoreField } from './__fixtures__/ignore-field'
import { ignoreInterface } from './__fixtures__/ignore-interface'
import { noFieldType } from './__fixtures__/no-field-type'
import { noInterfaceType } from './__fixtures__/no-interface-type'

const headingResponse = [
  [chalk.bold.underline('\nTopic')],
  [chalk.underline('heading')],
]

const pushingResponse = [
  [chalk.bold('\nPushing to Contentful')],
  [chalk('- pushing content type')],
  [chalk('- pushing editor interface')],
]

const notPusingResponse = [
  [chalk.bold('\nPushing to Contentful')],
  [chalk.red('- no valid fields found, skipping')],
]

describe('Push models should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  test('process allTags correctly', async () => {
    await pushModels({
      contentfulEnvironment: environmentMock,
      typeData: allTags,
      validationsMap: { mockedValidation: {} },
    })
    expect(consoleSpy.mock.calls).toEqual([
      ...headingResponse,
      [chalk('- validation mockedValidation')],
      [chalk('- editor control singleLine')],
      [chalk('- help text')],
      ...pushingResponse,
    ])
  })

  test('process badValidation correctly', async () => {
    await pushModels({
      contentfulEnvironment: environmentMock,
      typeData: badValidation,
      validationsMap: { mockedValidation: {} },
    })
    expect(consoleSpy.mock.calls).toEqual([
      [chalk.bold.underline('\nTopic')],
      [chalk.underline('heading')],
      [chalk.red('- validation doesNotExist not found')],
      ...notPusingResponse,
    ])
  })

  test('process ignoreField correctly', async () => {
    await pushModels({
      contentfulEnvironment: environmentMock,
      typeData: ignoreField,
      validationsMap: { mockedValidation: {} },
    })
    expect(consoleSpy.mock.calls).toEqual([
      [chalk.bold.underline('\nTopic')],
      [chalk.underline('heading')],
      [chalk('- ignoring field')],
      ...notPusingResponse,
    ])
  })

  test('process ignoreInterface correctly', async () => {
    await pushModels({
      contentfulEnvironment: environmentMock,
      typeData: ignoreInterface,
      validationsMap: { mockedValidation: {} },
    })
    expect(consoleSpy.mock.calls).toEqual([
      [chalk.bold.underline('\nTopic')],
      [chalk('- ignoring interface')],
    ])
  })

  test('process noFieldType correctly', async () => {
    await pushModels({
      contentfulEnvironment: environmentMock,
      typeData: noFieldType,
      validationsMap: { mockedValidation: {} },
    })
    expect(consoleSpy.mock.calls).toEqual([
      [chalk.bold.underline('\nTopic')],
      [chalk.underline('heading')],
      [chalk.red('- no @type inline tag')],
      ...notPusingResponse,
    ])
  })

  test('process noInterfaceType correctly', async () => {
    await pushModels({
      contentfulEnvironment: environmentMock,
      typeData: noInterfaceType,
      validationsMap: { mockedValidation: {} },
    })
    expect(consoleSpy.mock.calls).toEqual([
      [chalk.bold.underline('\nTopic')],
      [chalk.red('- no @type inline tag')],
    ])
  })
})
