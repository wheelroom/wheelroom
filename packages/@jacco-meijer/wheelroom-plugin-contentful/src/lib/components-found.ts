import { ContentfulComponents } from '../types/contentful-components'

export const componentsFound = (components: ContentfulComponents) => {
  if (Object.keys(components).length === 0) {
    console.log('Aborting because there are no components to process')
    return false
  }
  return true
}
