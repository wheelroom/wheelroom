import React, { SVGProps } from 'react'
const componentId = 'svg-cloud-rain'
export const SvgCloudRain = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cloud-rain_svg__feather cloud-rain_svg__feather-cloud-rain"
      id={componentId}
      width="100%"
    >
      <path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25" />
    </svg>
  )
}