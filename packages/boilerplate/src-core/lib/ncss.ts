export type NcssProps = any

export interface NcssObjectProps {
  ncss: NcssProps
}

export interface NcssSwitchProps {
  ncssSwitch: Record<string, NcssProps>
}

export const getNcssSwitch = (
  style: NcssSwitchProps,
  switchName: string
): NcssObjectProps => {
  const emptyNcss = { ncss: {} }
  if (!style || !switchName) {
    return emptyNcss
  }

  if (switchName in style) {
    return { ncss: style.ncssSwitch[switchName] }
  }
  return emptyNcss
}
