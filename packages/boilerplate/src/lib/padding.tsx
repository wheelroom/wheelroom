import { scales } from '../styled-system/scales'

export interface Padding {
  bottom: number
  left: number
  right: number
  top: number
}

export type BreakpointName = 'desktop' | 'mobile' | 'tablet' | 'widescreen'
export type PaddingBrakepoints = Record<BreakpointName, Padding | number>

export type PaddingType = 'top' | 'right' | 'bottom' | 'left'

const getBreakpoint = (
  padding: Padding | number,
  type: PaddingType
): string => {
  // Get space scale from theme
  const spaceScale = scales.spaceScale as number[]
  if (typeof padding === 'number') {
    const all = spaceScale[padding]
    return `${all}px`
  } else if (typeof padding === 'object') {
    const fromScale = {
      bottom: spaceScale[padding.bottom],
      left: spaceScale[padding.left],
      right: spaceScale[padding.right],
      top: spaceScale[padding.top],
    }
    return `${fromScale[type]}px`
  }
  return 'bug'
}

type GlobalPadding = Record<
  string,
  PaddingBrakepoints | number[] | number | Padding
>

export const parsePadding = (
  name: string,
  type: PaddingType,
  globalPadding: GlobalPadding
) => {
  const bpArray: string[] = Array(4)
  const breakpoints = globalPadding[name]
  if (typeof breakpoints === 'number') {
    bpArray[0] = getBreakpoint(breakpoints, type)
    bpArray[1] = getBreakpoint(breakpoints, type)
    bpArray[2] = getBreakpoint(breakpoints, type)
    bpArray[3] = getBreakpoint(breakpoints, type)
  } else if (Array.isArray(breakpoints)) {
    bpArray[0] = getBreakpoint(breakpoints[0], type)
    bpArray[1] = getBreakpoint(breakpoints[1], type)
    bpArray[2] = getBreakpoint(breakpoints[2], type)
    bpArray[3] = getBreakpoint(breakpoints[3], type)
  } else if (typeof breakpoints === 'object') {
    // What object do we have?
    if ('mobile' in breakpoints) {
      bpArray[0] = getBreakpoint(breakpoints.mobile, type)
      bpArray[1] = getBreakpoint(breakpoints.tablet, type)
      bpArray[2] = getBreakpoint(breakpoints.desktop, type)
      bpArray[3] = getBreakpoint(breakpoints.widescreen, type)
    } else if ('top' in breakpoints) {
      bpArray[0] = getBreakpoint(breakpoints, type)
      bpArray[1] = getBreakpoint(breakpoints, type)
      bpArray[2] = getBreakpoint(breakpoints, type)
      bpArray[3] = getBreakpoint(breakpoints, type)
    }
  }
  return bpArray
}
