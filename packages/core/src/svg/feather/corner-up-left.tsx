import React, { SVGProps } from 'react'
const componentId = 'svg-corner-up-left'
export const SvgCornerUpLeft = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="corner-up-left_svg__feather corner-up-left_svg__feather-corner-up-left"
      id={componentId}
      width="100%"
    >
      <path d="M9 14L4 9l5-5" />
      <path d="M20 20v-7a4 4 0 00-4-4H4" />
    </svg>
  )
}
