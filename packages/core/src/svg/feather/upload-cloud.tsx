import React, { SVGProps } from 'react'
const componentId = 'svg-upload-cloud'
export const SvgUploadCloud = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="upload-cloud_svg__feather upload-cloud_svg__feather-upload-cloud"
      id={componentId}
      width="100%"
    >
      <path d="M16 16l-4-4-4 4M12 12v9" />
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      <path d="M16 16l-4-4-4 4" />
    </svg>
  )
}
