import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-slash'
export const SvgSlash = (props: IconProps) => {
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
      className="slash_svg__feather slash_svg__feather-slash"
      css={css}
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M4.93 4.93l14.14 14.14" />
    </svg>
  )
}
