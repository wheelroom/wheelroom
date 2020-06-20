import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
  wheel: Wheel;
}
const componentId = 'svg-more-vertical'
export const SvgMoreVertical = (props: IconProps) => {
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
      className="more-vertical_svg__feather more-vertical_svg__feather-more-vertical"
      css={css}
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={1} />
      <circle cx={12} cy={5} r={1} />
      <circle cx={12} cy={19} r={1} />
    </svg>
  )
}
