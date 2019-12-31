import { WheelroomComponents } from '@jacco-meijer/wheelroom'
import { ContentfulComponents } from '../types/contentful-components'

/**
 *
 * @param argv Take argv.options
 */
export const generateContentfulComponents = (
  wheelroomComponents: WheelroomComponents,
  fieldDefinitions: object
): ContentfulComponents => {
  console.log('merging', wheelroomComponents)
  console.log('and', fieldDefinitions)
  const components: ContentfulComponents = {}
  return components
}
