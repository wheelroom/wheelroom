import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-up-left'
export const SvgArrowUpLeft = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-up-left_svg__feather arrow-up-left_svg__feather-arrow-up-left"
      id={componentId}
      width="100%"
    >
      <path d="M17 17L7 7M7 17V7h10" />
    </svg>
  )
}
