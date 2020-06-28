import React, { SVGProps } from 'react'
const componentId = 'svg-user-minus'
export const SvgUserMinus = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="user-minus_svg__feather user-minus_svg__feather-user-minus"
      id={componentId}
      width="100%"
    >
      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx={8.5} cy={7} r={4} />
      <path d="M23 11h-6" />
    </svg>
  )
}
