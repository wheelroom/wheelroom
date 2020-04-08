import { TreeStyle } from './tree-style'

const addLabel = (prefix: string, treeStyle: TreeStyle): TreeStyle => {
  let trail = prefix
  Object.entries(treeStyle).forEach(([name, value]) => {
    trail = `${prefix}-${name}`.replace(':', '')

    if (typeof value === 'object') {
      addLabel(trail, value)
    }
  })
  treeStyle.label = trail
  return treeStyle
}

export const addCssLabels = (
  prefix: string,
  treeStyle: TreeStyle
): TreeStyle => {
  return addLabel(prefix, treeStyle)
}
