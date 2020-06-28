import React, { SVGProps } from 'react'
const componentId = 'svg-play'
export const SvgPlay = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="play_svg__feather play_svg__feather-play"
      id={componentId}
      width="100%"
    >
      <path d="M5 3l14 9-14 9V3z" />
    </svg>
  )
}
