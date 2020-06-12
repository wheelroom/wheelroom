import React, { SVGProps } from 'react'
import { Wheel } from '../..'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
  wheel: Wheel;
}
const componentId = 'svg-align-justify'
export const SvgAlignJustify = (props: IconProps) => {
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
      className="align-justify_svg__feather align-justify_svg__feather-align-justify"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
    </svg>
  )
}
