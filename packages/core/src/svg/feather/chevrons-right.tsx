import React, { SVGProps } from 'react'
const componentId = 'svg-chevrons-right'
export const SvgChevronsRight = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevrons-right_svg__feather chevrons-right_svg__feather-chevrons-right"
      id={componentId}
      width="100%"
    >
      <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
    </svg>
  )
}
