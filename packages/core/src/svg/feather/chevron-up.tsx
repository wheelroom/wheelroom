import React, { SVGProps } from 'react'
const componentId = 'svg-chevron-up'
export const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron-up_svg__feather chevron-up_svg__feather-chevron-up"
      id={componentId}
      width="100%"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  )
}
