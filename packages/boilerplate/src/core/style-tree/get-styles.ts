import { NcssProps } from '../elements/types'
import { StyleTree } from './types'

export const getStyles = (base: StyleTree = {}, ...objectNames: string[]) => {
  const styles: NcssProps[] = []
  objectNames.forEach((name: string) => {
    const style = (base && base[name]) || {}
    styles.push(style)
  })
  return styles
}
