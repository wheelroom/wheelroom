import React, { SVGProps } from 'react'
const componentId = 'svg-meh'
export const SvgMeh = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="meh_svg__feather meh_svg__feather-meh"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M8 15h8M9 9h.01M15 9h.01" />
    </svg>
  )
}
