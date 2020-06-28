import React, { SVGProps } from 'react'
const componentId = 'svg-zoom-out'
export const SvgZoomOut = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="zoom-out_svg__feather zoom-out_svg__feather-zoom-out"
      id={componentId}
      width="100%"
    >
      <circle cx={11} cy={11} r={8} />
      <path d="M21 21l-4.35-4.35M8 11h6" />
    </svg>
  )
}
