import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-corner-right-down'
export const SvgCornerRightDown = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: props.ncss,
  })
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="corner-right-down_svg__feather corner-right-down_svg__feather-corner-right-down"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M10 15l5 5 5-5" />
      <path d="M4 4h7a4 4 0 014 4v12" />
    </svg>
  )
}
