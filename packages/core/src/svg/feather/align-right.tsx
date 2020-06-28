import React, { SVGProps } from 'react'
const componentId = 'svg-align-right'
export const SvgAlignRight = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="align-right_svg__feather align-right_svg__feather-align-right"
      id={componentId}
      width="100%"
    >
      <path d="M21 10H7M21 6H3M21 14H3M21 18H7" />
    </svg>
  )
}
