import React, { SVGProps } from 'react'
const componentId = 'svg-chevron-down'
export const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron-down_svg__feather chevron-down_svg__feather-chevron-down"
      id={componentId}
      width="100%"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
