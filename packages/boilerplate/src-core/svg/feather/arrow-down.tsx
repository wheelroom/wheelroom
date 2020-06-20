import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
  wheel: Wheel;
}
const componentId = 'svg-arrow-down'
export const SvgArrowDown = (props: IconProps) => {
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
      className="arrow-down_svg__feather arrow-down_svg__feather-arrow-down"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  )
}
