import React, { SVGProps } from 'react'
const componentId = 'svg-minus-circle'
export const SvgMinusCircle = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="minus-circle_svg__feather minus-circle_svg__feather-minus-circle"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M8 12h8" />
    </svg>
  )
}
