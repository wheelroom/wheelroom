import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
  wheel: Wheel;
}
const componentId = 'svg-zap'
export const SvgZap = (props: IconProps) => {
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
      className="zap_svg__feather zap_svg__feather-zap"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}
