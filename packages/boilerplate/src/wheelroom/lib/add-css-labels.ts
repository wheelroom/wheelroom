import { TreeStyle } from './tree-style'

export const addCssLabels = (prefix: string, treeStyle: TreeStyle) => {
  Object.entries(treeStyle).forEach(([name, value]) => {
    if (value instanceof Object && !Array.isArray(value)) {
      addCssLabels(`${prefix}-${name}`, value)
    }
  })

  const regexp = /[:&<>]/g
  if (prefix.search(regexp) === -1) {
    treeStyle.label = prefix
  }
}
