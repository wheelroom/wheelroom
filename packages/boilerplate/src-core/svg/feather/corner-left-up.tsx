import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
  wheel: Wheel;
}
const componentId = 'svg-corner-left-up'
export const SvgCornerLeftUp = (props: IconProps) => {
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
      className="corner-left-up_svg__feather corner-left-up_svg__feather-corner-left-up"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M14 9L9 4 4 9" />
      <path d="M20 20h-7a4 4 0 01-4-4V4" />
    </svg>
  )
}