import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-corner-up-left'
export const SvgCornerUpLeft = (props: IconProps) => {
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
      className="corner-up-left_svg__feather corner-up-left_svg__feather-corner-up-left"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M9 14L4 9l5-5" />
      <path d="M20 20v-7a4 4 0 00-4-4H4" />
    </svg>
  )
}
