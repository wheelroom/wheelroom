import { Components } from '@jacco-meijer/wheelroom'

export const componentsFound = (components: Components) => {
  if (Object.keys(components).length === 0) {
    console.log('Aborting because there are no components to process')
    return false
  }
  return true
}
