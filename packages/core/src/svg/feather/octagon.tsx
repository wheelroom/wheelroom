import React, { SVGProps } from 'react'
const componentId = 'svg-octagon'
export const SvgOctagon = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="octagon_svg__feather octagon_svg__feather-octagon"
      id={componentId}
      width="100%"
    >
      <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z" />
    </svg>
  )
}
