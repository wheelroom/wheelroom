import React, { SVGProps } from 'react'
const componentId = 'svg-minimize2'
export const SvgMinimize2 = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="minimize-2_svg__feather minimize-2_svg__feather-minimize-2"
      id={componentId}
      width="100%"
    >
      <path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
    </svg>
  )
}
