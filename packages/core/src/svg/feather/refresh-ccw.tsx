import React, { SVGProps } from 'react'
const componentId = 'svg-refresh-ccw'
export const SvgRefreshCcw = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="refresh-ccw_svg__feather refresh-ccw_svg__feather-refresh-ccw"
      id={componentId}
      width="100%"
    >
      <path d="M1 4v6h6M23 20v-6h-6" />
      <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
    </svg>
  )
}
