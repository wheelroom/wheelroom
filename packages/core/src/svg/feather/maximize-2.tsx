import React, { SVGProps } from 'react'
const componentId = 'svg-maximize2'
export const SvgMaximize2 = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="maximize-2_svg__feather maximize-2_svg__feather-maximize-2"
      id={componentId}
      width="100%"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  )
}
