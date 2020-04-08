import { TreeStyle } from './tree-style'

const addLabel = (prefix: string, treeStyle: TreeStyle): TreeStyle => {
  Object.entries(treeStyle).forEach(([name, value]) => {
    if (value instanceof Object && !Array.isArray(value)) {
      addLabel(`${prefix}-${name}`, value)
    }
  })
  treeStyle.label = prefix.replace(':', '')
  console.log(treeStyle)
  return treeStyle
}

export const addCssLabels = (
  prefix: string,
  treeStyle: TreeStyle
): TreeStyle => {
  console.log(treeStyle)
  return addLabel(prefix, treeStyle)
}
