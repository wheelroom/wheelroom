import React, { SVGProps } from 'react'
const componentId = 'svg-skip-forward'
export const SvgSkipForward = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="skip-forward_svg__feather skip-forward_svg__feather-skip-forward"
      id={componentId}
      width="100%"
    >
      <path d="M5 4l10 8-10 8V4zM19 5v14" />
    </svg>
  )
}
