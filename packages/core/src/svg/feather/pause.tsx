import React, { SVGProps } from 'react'
const componentId = 'svg-pause'
export const SvgPause = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pause_svg__feather pause_svg__feather-pause"
      id={componentId}
      width="100%"
    >
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  )
}
