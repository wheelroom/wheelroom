// This is the current behaviour
// export type NcssProps = any
//
// interface CurrentBehaviour {
//   style: {
//     ncss: NcssProsp
//   }
// }
//
// We should change this everywhere into this new behaviour
// interface NewBehaviour {
//   style: NcssProsp                   <=== NOTE, no more ncss in the interface tree
//   switchingStyle: NcssSwitchProps    <=== NOTE, no ncssSwitchProps in the interface tree
// }

export interface NcssProps {
  ncss: any
}

export interface NcssSwitchProps {
  ncssSwitch: Record<string, any>
}

export const getNcssSwitch = (
  style: NcssSwitchProps,
  switchName: string
): NcssProps => {
  const emptyNcss = { ncss: {} }
  if (!style || !switchName) {
    return emptyNcss
  }

  if (switchName in style) {
    return { ncss: style.ncssSwitch[switchName] }
  }
  return emptyNcss
}
