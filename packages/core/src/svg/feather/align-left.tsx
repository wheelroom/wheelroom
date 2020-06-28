import React, { SVGProps } from 'react'
const componentId = 'svg-align-left'
export const SvgAlignLeft = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="align-left_svg__feather align-left_svg__feather-align-left"
      id={componentId}
      width="100%"
    >
      <path d="M17 10H3M21 6H3M21 14H3M17 18H3" />
    </svg>
  )
}
