import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-monitor'
export const SvgMonitor = (props: IconProps) => {
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
      className="monitor_svg__feather monitor_svg__feather-monitor"
      css={css}
      id={componentId}
      width="100%"
    >
      <rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}
