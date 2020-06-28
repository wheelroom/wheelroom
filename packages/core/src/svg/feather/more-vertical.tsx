import React, { SVGProps } from 'react'
const componentId = 'svg-more-vertical'
export const SvgMoreVertical = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="more-vertical_svg__feather more-vertical_svg__feather-more-vertical"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={1} />
      <circle cx={12} cy={5} r={1} />
      <circle cx={12} cy={19} r={1} />
    </svg>
  )
}
