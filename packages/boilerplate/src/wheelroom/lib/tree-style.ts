import { NcssProps } from '../elements/types'

export const getStyles = (base: any = {}, ...objectNames: string[]) => {
  const styles: NcssProps[] = []
  objectNames.forEach((name: string) => {
    const style = (base && base[name]) || {}
    styles.push(style)
  })
  return styles
}
