export interface CoreSiteMetadata {
  siteVersion: string
  siteUrl: string
  legal: {
    version: string
    description: string
    url: string
  }
  secrets: {
    spaceId: string
    previewToken: string
    environment: string
  }
}
