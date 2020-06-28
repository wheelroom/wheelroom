import React, { SVGProps } from 'react'
const componentId = 'svg-user-check'
export const SvgUserCheck = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="user-check_svg__feather user-check_svg__feather-user-check"
      id={componentId}
      width="100%"
    >
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx={8.5} cy={7} r={4} />
      <path d="M17 11l2 2 4-4" />
    </svg>
  )
}
