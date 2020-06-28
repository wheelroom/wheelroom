import React, { SVGProps } from 'react'
const componentId = 'svg-download-cloud'
export const SvgDownloadCloud = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="download-cloud_svg__feather download-cloud_svg__feather-download-cloud"
      id={componentId}
      width="100%"
    >
      <path d="M8 17l4 4 4-4M12 12v9" />
      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
    </svg>
  )
}
