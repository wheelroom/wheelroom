export type Ncss = any

export interface NcssNode {
  ncss: Ncss
}

export interface NcssNodeSwitch {
  ncssSwitch: Record<string, Ncss>
}

export const getNcssSwitch = (
  style: NcssNodeSwitch,
  switchName: string
): NcssNode => {
  const emptyNcss = { ncss: {} }
  if (!style || !switchName) {
    return emptyNcss
  }

  if (switchName in style.ncssSwitch) {
    return { ncss: style.ncssSwitch[switchName] }
  }
  return emptyNcss
}
