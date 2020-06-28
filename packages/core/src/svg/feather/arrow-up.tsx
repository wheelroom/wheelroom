import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-up'
export const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-up_svg__feather arrow-up_svg__feather-arrow-up"
      id={componentId}
      width="100%"
    >
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}
