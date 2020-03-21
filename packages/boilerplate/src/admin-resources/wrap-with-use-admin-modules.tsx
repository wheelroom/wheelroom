import React, { Fragment } from 'react'
import { useInitPagePreview } from '@wheelroom/admin-page-preview'
import { useInitThemeSwitcher } from '@wheelroom/admin-theme-switcher'
import { themeInfo } from './theme-info'

const UseAdminModules = (props: any) => {
  useInitThemeSwitcher(themeInfo(props))
  useInitPagePreview(props)
  return <Fragment>{props.children}</Fragment>
}

export const wrapWithUseAdminModules = (args: { props: any; element: any }) => {
  return <UseAdminModules {...args.props}>{args.element}</UseAdminModules>
}
