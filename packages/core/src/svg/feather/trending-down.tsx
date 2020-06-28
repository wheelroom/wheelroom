import React, { SVGProps } from 'react'
const componentId = 'svg-trending-down'
export const SvgTrendingDown = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="trending-down_svg__feather trending-down_svg__feather-trending-down"
      id={componentId}
      width="100%"
    >
      <path d="M23 18l-9.5-9.5-5 5L1 6" />
      <path d="M17 18h6v-6" />
    </svg>
  )
}
