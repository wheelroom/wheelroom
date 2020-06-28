import React, { SVGProps } from 'react'
const componentId = 'svg-git-branch'
export const SvgGitBranch = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="git-branch_svg__feather git-branch_svg__feather-git-branch"
      id={componentId}
      width="100%"
    >
      <path d="M6 3v12" />
      <circle cx={18} cy={6} r={3} />
      <circle cx={6} cy={18} r={3} />
      <path d="M18 9a9 9 0 01-9 9" />
    </svg>
  )
}
