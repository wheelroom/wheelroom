import { NcssProps } from '../wheels/types'

export const getStyles = (base: any = {}, ...objectNames: string[]) => {
  const styles: NcssProps[] = []
  objectNames.forEach((name: string) => {
    const style = (base && base[name] && base[name].ncss) || {}
    styles.push(style)
  })
  return styles
}
