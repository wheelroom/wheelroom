import React, { SVGProps } from 'react'
const componentId = 'svg-cloud-off'
export const SvgCloudOff = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cloud-off_svg__feather cloud-off_svg__feather-cloud-off"
      id={componentId}
      width="100%"
    >
      <path d="M22.61 16.95A5 5 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3M1 1l22 22" />
    </svg>
  )
}