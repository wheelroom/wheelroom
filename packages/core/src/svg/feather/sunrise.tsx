import React, { SVGProps } from 'react'
const componentId = 'svg-sunrise'
export const SvgSunrise = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="sunrise_svg__feather sunrise_svg__feather-sunrise"
      id={componentId}
      width="100%"
    >
      <path d="M17 18a5 5 0 00-10 0M12 2v7M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M8 6l4-4 4 4" />
    </svg>
  )
}
