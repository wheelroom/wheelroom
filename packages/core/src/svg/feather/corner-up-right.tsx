import React, { SVGProps } from 'react'
const componentId = 'svg-corner-up-right'
export const SvgCornerUpRight = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="corner-up-right_svg__feather corner-up-right_svg__feather-corner-up-right"
      id={componentId}
      width="100%"
    >
      <path d="M15 14l5-5-5-5" />
      <path d="M4 20v-7a4 4 0 014-4h12" />
    </svg>
  )
}
