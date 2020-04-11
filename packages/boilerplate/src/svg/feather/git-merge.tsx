import React, { SVGProps } from 'react'
import { systemCss } from '../../wheelroom/styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-git-merge'
export const SvgGitMerge = (props: IconProps) => {
  const currentThemeId: any = useGetCurrentThemeId()
  const strokeWidth = props.strokeWidth || 2
  const css = systemCss(
    {
      ncss: props.ncss,
    },
    currentThemeId
  )
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="git-merge_svg__feather git-merge_svg__feather-git-merge"
      css={css}
      id={componentId}
      width="100%"
    >
      <circle cx={18} cy={18} r={3} />
      <circle cx={6} cy={6} r={3} />
      <path d="M6 21V9a9 9 0 009 9" />
    </svg>
  )
}
