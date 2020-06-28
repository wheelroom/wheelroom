import React, { SVGProps } from 'react'
const componentId = 'svg-cloud-lightning'
export const SvgCloudLightning = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cloud-lightning_svg__feather cloud-lightning_svg__feather-cloud-lightning"
      id={componentId}
      width="100%"
    >
      <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
      <path d="M13 11l-4 6h6l-4 6" />
    </svg>
  )
}
