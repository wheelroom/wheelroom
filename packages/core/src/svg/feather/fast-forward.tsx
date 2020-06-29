import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '@wheelroom/core'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-fast-forward'
export const SvgFastForward = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(
    props.wheel.wrSystemConfig,
    props.wheel.wrSystemTheme,
    {
      ncss: props.ncss,
    }
  )
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="fast-forward_svg__feather fast-forward_svg__feather-fast-forward"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z" />
    </svg>
  )
}
