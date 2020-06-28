import React, { SVGProps } from 'react'
const componentId = 'svg-shield-off'
export const SvgShieldOff = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shield-off_svg__feather shield-off_svg__feather-shield-off"
      id={componentId}
      width="100%"
    >
      <path d="M19.69 14a6.9 6.9 0 00.31-2V5l-8-3-3.16 1.18M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 005.62-4.38M1 1l22 22" />
    </svg>
  )
}
