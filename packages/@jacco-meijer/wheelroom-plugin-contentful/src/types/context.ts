import { WheelroomComponents } from '@jacco-meijer/wheelroom'
import { ContentfulComponents } from './contentful-components'

export interface Context {
  commandLineOptions: {
    /** Non interactive mode, answers yes to all questions */
    yes?: boolean
  }
  contentfulApi: {
    /** Contentful Management Client */
    contentfulClient?: any
    /** Contentful asset object */
    asset?: any
    /** Contentful contentType object */
    contentType?: any
    /** Contentful editorInterface object */
    editorInterface?: any
    /** Contentful environment object */
    environment?: any
    /** Contentful demo entry */
    entry?: any
    /** Contentful field data for demo entry */
    fields: any
    /** Contentful space object */
    space?: any
    /** Contentful upload object */
    upload?: any
  }
  pluginOptions: {
    /** default locale */
    defaultLocale: string
  }
  /** Wheelroom components */
  wheelroomComponents: WheelroomComponents
  /** Contentful components */
  contentfulComponents: ContentfulComponents
}
