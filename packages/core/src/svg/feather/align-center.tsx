import React, { SVGProps } from 'react'
const componentId = 'svg-align-center'
export const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="align-center_svg__feather align-center_svg__feather-align-center"
      id={componentId}
      width="100%"
    >
      <path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
    </svg>
  )
}
