import React, { SVGProps } from 'react'
const componentId = 'svg-corner-down-right'
export const SvgCornerDownRight = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="corner-down-right_svg__feather corner-down-right_svg__feather-corner-down-right"
      id={componentId}
      width="100%"
    >
      <path d="M15 10l5 5-5 5" />
      <path d="M4 4v7a4 4 0 004 4h12" />
    </svg>
  )
}
