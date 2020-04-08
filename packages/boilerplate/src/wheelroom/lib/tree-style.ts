import { NcssProps } from '../elements/types'

export interface TreeStyle {
  [objectName: string]: NcssProps | TreeStyle
}

export const getStyles = (base: TreeStyle = {}, ...objectNames: string[]) => {
  const styles: NcssProps[] = []
  objectNames.forEach((name: string) => {
    const style = (base && base[name]) || {}
    styles.push(style)
  })
  return styles
}
