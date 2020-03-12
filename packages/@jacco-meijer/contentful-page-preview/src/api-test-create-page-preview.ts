import { createPagePreview } from './create-page-preview'
import dotenv from 'dotenv'

jest.setTimeout(10000)

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

describe('Get contentful page preview with real secrets should', () => {
  const previewSecrets = {
    previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
  }
  if (!previewSecrets.previewToken) {
    console.log('Missing env: CONTENTFUL_PREVIEW_TOKEN')
    return
  }
  if (!previewSecrets.spaceId) {
    console.log('Missing env: CONTENTFUL_SPACE_ID')
    return
  }

  const pagePreview = createPagePreview({
    previewSecrets: {
      previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN || '',
      spaceId: process.env.CONTENTFUL_SPACE_ID || '',
    },
    entryId: '78Jd0tSe8deq3HzDXVwLAd',
    // locale: 'nl',
  })

  test('get real gatsby fields', async () => {
    const gatsbyFields = await pagePreview.getGatbsyFields()

    expect(gatsbyFields).toMatchSnapshot()
  })
})
