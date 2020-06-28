import React, { SVGProps } from 'react'
const componentId = 'svg-volume'
export const SvgVolume = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="volume_svg__feather volume_svg__feather-volume"
      id={componentId}
      width="100%"
    >
      <path d="M11 5L6 9H2v6h4l5 4V5z" />
    </svg>
  )
}
