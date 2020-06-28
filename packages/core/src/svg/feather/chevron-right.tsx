import React, { SVGProps } from 'react'
const componentId = 'svg-chevron-right'
export const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron-right_svg__feather chevron-right_svg__feather-chevron-right"
      id={componentId}
      width="100%"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
