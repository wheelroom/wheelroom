import React, { SVGProps } from 'react'
const componentId = 'svg-volume1'
export const SvgVolume1 = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="volume-1_svg__feather volume-1_svg__feather-volume-1"
      id={componentId}
      width="100%"
    >
      <path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07" />
    </svg>
  )
}
