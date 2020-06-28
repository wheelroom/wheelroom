import React, { SVGProps } from 'react'
const componentId = 'svg-volume-x'
export const SvgVolumeX = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="volume-x_svg__feather volume-x_svg__feather-volume-x"
      id={componentId}
      width="100%"
    >
      <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" />
    </svg>
  )
}
