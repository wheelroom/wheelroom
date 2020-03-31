import { NcssProps } from '../primary-elements/types'

export interface StyleTree {
  [objectName: string]: NcssProps | StyleTree
}

export const getStyles = (base: StyleTree = {}, ...objectNames: string[]) => {
  const styles: NcssProps[] = []
  objectNames.forEach((name: string) => {
    const style = (base && base[name]) || {}
    styles.push(style)
  })
  return styles
}
