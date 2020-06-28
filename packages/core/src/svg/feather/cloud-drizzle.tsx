import React, { SVGProps } from 'react'
const componentId = 'svg-cloud-drizzle'
export const SvgCloudDrizzle = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cloud-drizzle_svg__feather cloud-drizzle_svg__feather-cloud-drizzle"
      id={componentId}
      width="100%"
    >
      <path d="M8 19v2M8 13v2M16 19v2M16 13v2M12 21v2M12 15v2M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25" />
    </svg>
  )
}
