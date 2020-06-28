import React, { SVGProps } from 'react'
const componentId = 'svg-xoctagon'
export const SvgXOctagon = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="x-octagon_svg__feather x-octagon_svg__feather-x-octagon"
      id={componentId}
      width="100%"
    >
      <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6M9 9l6 6" />
    </svg>
  )
}
