import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-up-right'
export const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-up-right_svg__feather arrow-up-right_svg__feather-arrow-up-right"
      id={componentId}
      width="100%"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  )
}
