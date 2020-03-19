import { createPagePreview } from './create-page-preview'
import dotenv from 'dotenv'
import { PreviewSecrets } from './types/preview-secrets'

jest.setTimeout(10000)

const dotEnvResult = dotenv.config()
if (dotEnvResult.error) {
  throw dotEnvResult.error
}

describe('Get contentful page preview with real secrets should', () => {
  const previewSecrets = {
    previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    environment: process.env.CONTENTFUL_ENVIRONMENT,
  } as PreviewSecrets
  if (!previewSecrets.previewToken) {
    console.log('Missing env: CONTENTFUL_PREVIEW_TOKEN')
    return
  }
  if (!previewSecrets.spaceId) {
    console.log('Missing env: CONTENTFUL_SPACE_ID')
    return
  }
  if (!previewSecrets.environment) {
    console.log('Missing env: CONTENTFUL_ENVIRONMENT')
    return
  }

  const pagePreview = createPagePreview({
    previewSecrets,
    entryId: 'page',
    // locale: 'nl',
  })

  test('get real gatsby fields', async () => {
    const gatsbyFields = await pagePreview.getGatbsyFields()

    expect(gatsbyFields).toMatchSnapshot()
  })
})
