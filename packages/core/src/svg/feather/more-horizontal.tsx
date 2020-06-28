import React, { SVGProps } from 'react'
const componentId = 'svg-more-horizontal'
export const SvgMoreHorizontal = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="more-horizontal_svg__feather more-horizontal_svg__feather-more-horizontal"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={1} />
      <circle cx={19} cy={12} r={1} />
      <circle cx={5} cy={12} r={1} />
    </svg>
  )
}
