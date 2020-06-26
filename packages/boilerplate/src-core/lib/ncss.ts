export type NcssProps = any
// export type Ncss = any

export interface NcssObjectProps {
  ncss: NcssProps
}
// export interface NcssNode {
//   ncss: Ncss
// }

export interface NcssSwitchProps {
  ncssSwitch: Record<string, NcssProps>
}
// export interface NcssNodeSwitch {
//   ncssSwitch: Record<string, Ncss>
// }

export const getNcssSwitch = (
  style: NcssSwitchProps,
  switchName: string
): NcssObjectProps => {
  const emptyNcss = { ncss: {} }
  if (!style || !switchName) {
    return emptyNcss
  }

  if (switchName in style.ncssSwitch) {
    return { ncss: style.ncssSwitch[switchName] }
  }
  return emptyNcss
}
