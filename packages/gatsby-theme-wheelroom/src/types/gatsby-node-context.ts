import { ComponentConfig, ThemeOptions } from '@jacco-meijer/wheelroom'
import { NamedPaths } from '@jacco-meijer/wheelroom'

export interface ContentfulNode {
  id: string
  [key: string]: string
}

export interface ContentfulObject {
  node: ContentfulNode
  node_locale: string
}

export interface GatsbyNodeContext {
  /** Array with all configured models */
  componentConfigs: ComponentConfig[]
  /** Contains for each named path: path: raw path, xx: localized xx path */
  namedPaths: NamedPaths
  /** The plugin configuration options */
  options: ThemeOptions
  /** Path to the page template used to generate each page */
  pageTemplate: string
  queries: {
    /** Each key contains the results of a global query */
    [modelWheelroomType: string]: {
      [componentId: string]: ContentfulObject[]
    }
  }
  createPage(params: object): Promise<any>
  graphql(query: string): Promise<any>
}

export interface PageContext {
  locale: string
  namedPaths: NamedPaths
  [componentTypeIdKey: string]: string | NamedPaths | ThemeOptions
}

export interface GetPageContext {
  context: GatsbyNodeContext
  page: ContentfulNode
  subPage?: ContentfulObject
  /** Contentful model type */
  pageType: string
}
