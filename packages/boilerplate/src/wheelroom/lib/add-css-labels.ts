export const addCssLabels = (prefix: string, treeStyle: any) => {
  Object.entries(treeStyle).forEach(([name, value]) => {
    if (value instanceof Object && !Array.isArray(value) && name !== 'ncss') {
      addCssLabels(`${prefix}-${name}`, value)
    }
  })

  if (name === 'ncss' && !treeStyle.label) {
    treeStyle.label = prefix
  }
}
