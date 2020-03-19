import { ContentfulComponents } from '../types/contentful-components'

export const componentsFound = (components: ContentfulComponents) => {
  if (components.length === 0) {
    console.log('Aborting: no components to process')
    return false
  }
  return true
}
