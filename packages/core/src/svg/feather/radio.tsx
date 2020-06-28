import React, { SVGProps } from 'react'
const componentId = 'svg-radio'
export const SvgRadio = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="radio_svg__feather radio_svg__feather-radio"
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={2} />
      <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14" />
    </svg>
  )
}
