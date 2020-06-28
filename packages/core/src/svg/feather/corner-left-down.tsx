import React, { SVGProps } from 'react'
const componentId = 'svg-corner-left-down'
export const SvgCornerLeftDown = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="corner-left-down_svg__feather corner-left-down_svg__feather-corner-left-down"
      id={componentId}
      width="100%"
    >
      <path d="M14 15l-5 5-5-5" />
      <path d="M20 4h-7a4 4 0 00-4 4v12" />
    </svg>
  )
}
