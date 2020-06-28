import React, { SVGProps } from 'react'
const componentId = 'svg-scissors'
export const SvgScissors = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="scissors_svg__feather scissors_svg__feather-scissors"
      id={componentId}
      width="100%"
    >
      <circle cx={6} cy={6} r={3} />
      <circle cx={6} cy={18} r={3} />
      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
    </svg>
  )
}
