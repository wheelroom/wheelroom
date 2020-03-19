import { contentfulEntries } from './fixtures/contentful-entries'
import { contentTypes } from './fixtures/content-types'
import { createPagePreview } from './create-page-preview'
import { contentModelByIds } from './content-model-by-ids'

jest.setTimeout(10000)

describe('Get contentful page preview should', () => {
  const contentModel = contentModelByIds(contentTypes)

  test('create content model by id', async () => {
    expect(contentModel).toMatchSnapshot()
  })

  const pagePreview = createPagePreview({
    previewSecrets: { previewToken: 'mock-token', spaceId: 'mock-spaceid' },
    entryId: 'homePage',
  })
  pagePreview._cfEntry = contentfulEntries.items[0]
  pagePreview._contentModel = contentModel

  test('get gatsby fields', async () => {
    const gatsbyFields = pagePreview._processCfEntry(pagePreview._cfEntry, 0)

    expect(gatsbyFields).toMatchSnapshot()
  })
})
