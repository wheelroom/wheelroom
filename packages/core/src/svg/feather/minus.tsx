import React, { SVGProps } from 'react'
const componentId = 'svg-minus'
export const SvgMinus = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="minus_svg__feather minus_svg__feather-minus"
      id={componentId}
      width="100%"
    >
      <path d="M5 12h14" />
    </svg>
  )
}
