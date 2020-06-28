import React, { SVGProps } from 'react'
const componentId = 'svg-award'
export const SvgAward = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="award_svg__feather award_svg__feather-award"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={8} r={7} />
      <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </svg>
  )
}
