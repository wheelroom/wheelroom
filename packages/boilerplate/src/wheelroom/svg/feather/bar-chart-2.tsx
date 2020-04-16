import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-bar-chart2'
export const SvgBarChart2 = (props: IconProps) => {
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
      className="bar-chart-2_svg__feather bar-chart-2_svg__feather-bar-chart-2"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M18 20V10M12 20V4M6 20v-6" />
    </svg>
  )
}
