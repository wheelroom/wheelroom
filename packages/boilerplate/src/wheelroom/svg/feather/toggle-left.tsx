import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-toggle-left'
export const SvgToggleLeft = (props: IconProps) => {
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
      className="toggle-left_svg__feather toggle-left_svg__feather-toggle-left"
      css={css}
      id={componentId}
      width="100%"
    >
      <rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
      <circle cx={8} cy={12} r={3} />
    </svg>
  )
}
