import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-down-left'
export const SvgArrowDownLeft = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-down-left_svg__feather arrow-down-left_svg__feather-arrow-down-left"
      id={componentId}
      width="100%"
    >
      <path d="M17 7L7 17M17 17H7V7" />
    </svg>
  )
}
