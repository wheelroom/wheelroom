import React, { SVGProps } from 'react'
const componentId = 'svg-map'
export const SvgMap = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="map_svg__feather map_svg__feather-map"
      id={componentId}
      width="100%"
    >
      <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16" />
    </svg>
  )
}
