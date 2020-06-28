import React, { SVGProps } from 'react'
const componentId = 'svg-chevron-left'
export const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron-left_svg__feather chevron-left_svg__feather-chevron-left"
      id={componentId}
      width="100%"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}
