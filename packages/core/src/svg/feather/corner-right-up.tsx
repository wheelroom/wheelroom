import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
  strokeWidth: number
}
const componentId = 'svg-corner-right-up'
export const SvgCornerRightUp = (props: IconProps) => {
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
      className="corner-right-up_svg__feather corner-right-up_svg__feather-corner-right-up"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M10 9l5-5 5 5" />
      <path d="M4 20h7a4 4 0 004-4V4" />
    </svg>
  )
}
