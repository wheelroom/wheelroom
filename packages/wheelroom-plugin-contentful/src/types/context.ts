import { WheelroomComponents } from '@wheelroom/wheelroom'
import { ContentfulComponents } from './contentful-components'
import { ContentfulFieldDefinitions } from './contentful-field-definitions'

export interface Context {
  commandLineOptions: {
    /** Name of content set to use */
    contentSet?: string
    /** Non interactive mode, answers yes to all questions */
    yes?: boolean
  }
  contentfulApi: {
    /** Contentful Management Client */
    contentfulClient?: any
    /** Contentful asset object */
    asset?: any
    /** All Contentful contentType objects found in a space */
    allContentTypes?: any
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
    /** All defined Contentful locale objects */
    locales?: [] | null
    /** Default Contentful locale object */
    defaultLocale?: any
    /** Contentful space object */
    space?: any
    /** Contentful upload object */
    upload?: any
  }
  pluginOptions: {
    /** Field definitions */
    fieldDefinitions: ContentfulFieldDefinitions
  }
  /** Contentful components */
  contentfulComponents: ContentfulComponents
  /** Wheelroom components */
  wheelroomComponents: WheelroomComponents
}
