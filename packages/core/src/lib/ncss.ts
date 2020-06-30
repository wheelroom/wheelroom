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
  if (!style) {
    console.log(`WARNING: getNcssSwitch: style has no value`)
    return emptyNcss
  }
  if (!switchName) {
    console.log(`WARNING: getNcssSwitch: switchName has no value`)
    return emptyNcss
  }
  if (!style.ncssSwitch) {
    console.log(`WARNING: style.ncssSwitch has no value`)
    return emptyNcss
  }
  if (switchName in style.ncssSwitch) {
    return { ncss: style.ncssSwitch[switchName] }
  }
  console.log(
    `WARNING: getNcssSwitch: switchName '${switchName}' not found in style.ncssSwitch `
  )
  return emptyNcss
}
