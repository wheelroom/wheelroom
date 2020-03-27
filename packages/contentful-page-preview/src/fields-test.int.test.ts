import { cfImageField } from './fixtures/cf-image-field'
import { createPagePreview } from './create-page-preview'
import { contentfulEntries } from './fixtures/contentful-entries'
import { contentModelByIds } from './content-model-by-ids'
import { contentTypes } from './fixtures/content-types'

jest.setTimeout(10000)

describe('Get gatsby field should', () => {
  const pagePreview = createPagePreview({
    previewSecrets: { previewToken: 'mock-token', spaceId: 'mock-spaceid' },
    entryId: 'mock',
  })
  const contentModel = contentModelByIds(contentTypes)
  pagePreview._cfEntry = contentfulEntries.items[0]
  pagePreview._contentModel = contentModel

  test('parse Symbol field', async () => {
    const gatsbyField = pagePreview._processCfField('page', 'title', 'home', 0)
    expect(gatsbyField).toStrictEqual('home')
  })
  test('parse Array field', async () => {
    const pageMock = { sys: { contentType: { sys: { id: 'page' } } } }
    const gatsbyField = pagePreview._processCfField(
      'page',
      'sections',
      [pageMock, pageMock],
      0
    )
    expect(gatsbyField).toStrictEqual([])
  })
  test('parse RichText field', async () => {
    const gatsbyField = pagePreview._processCfField(
      'textSection',
      'text',
      'Rich text',
      0
    )
    expect(gatsbyField).toStrictEqual({ json: 'Rich text' })
  })
  test('parse Text field', async () => {
    const gatsbyField = pagePreview._processCfField(
      'page',
      'abstract',
      'Some text',
      0
    )
    expect(gatsbyField).toStrictEqual({ abstract: 'Some text' })
  })
  test('parse Link/Asset field', async () => {
    const gatsbyField = pagePreview._processCfField(
      'page',
      'image',
      cfImageField,
      0
    )
    expect(gatsbyField).toStrictEqual({
      description: 'Demo asset with fixed id',
      file: {
        contentType: 'image/png',
        details: {
          image: {
            height: 1025,
            width: 1026,
          },
          size: 13154,
        },
        fileName: 'wheelroom',
        url:
          '//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom',
      },
      fluid: {
        sizes: '(max-width: 1024px) 100vw, 1024px',
        src:
          '//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom?w=1024&q=50',
        srcSet:
          '//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom?w=256&h=256&q=50 256w,\n\
//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom?w=512&h=512&q=50 512w,\n\
//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom?w=1024&h=1023&q=50 1024w,\n\
//images.ctfassets.net/jeb9ft1t2asv/demoAsset/95162fee3f8da29ed8c15182e62f2c98/wheelroom?w=1026&h=1025&q=50 1026w',
      },
      title: 'wheelroom',
    })
  })
})
