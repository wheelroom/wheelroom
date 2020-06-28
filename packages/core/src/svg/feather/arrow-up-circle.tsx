import React, { SVGProps } from 'react'
const componentId = 'svg-arrow-up-circle'
export const SvgArrowUpCircle = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="arrow-up-circle_svg__feather arrow-up-circle_svg__feather-arrow-up-circle"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M16 12l-4-4-4 4M12 16V8" />
    </svg>
  )
}
