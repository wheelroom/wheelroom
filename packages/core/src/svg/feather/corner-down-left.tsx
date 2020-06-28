import React, { SVGProps } from 'react'
const componentId = 'svg-corner-down-left'
export const SvgCornerDownLeft = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="corner-down-left_svg__feather corner-down-left_svg__feather-corner-down-left"
      id={componentId}
      width="100%"
    >
      <path d="M9 10l-5 5 5 5" />
      <path d="M20 4v7a4 4 0 01-4 4H4" />
    </svg>
  )
}
