import React, { SVGProps } from 'react'
const componentId = 'svg-rotate-ccw'
export const SvgRotateCcw = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="rotate-ccw_svg__feather rotate-ccw_svg__feather-rotate-ccw"
      id={componentId}
      width="100%"
    >
      <path d="M1 4v6h6" />
      <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
    </svg>
  )
}