import React, { SVGProps } from 'react'
const componentId = 'svg-cloud-snow'
export const SvgCloudSnow = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cloud-snow_svg__feather cloud-snow_svg__feather-cloud-snow"
      id={componentId}
      width="100%"
    >
      <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01" />
    </svg>
  )
}
