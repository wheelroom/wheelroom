import React, { SVGProps } from 'react'
const componentId = 'svg-stop-circle'
export const SvgStopCircle = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="stop-circle_svg__feather stop-circle_svg__feather-stop-circle"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M9 9h6v6H9z" />
    </svg>
  )
}
