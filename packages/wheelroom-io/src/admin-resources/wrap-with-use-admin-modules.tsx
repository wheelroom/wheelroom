import React, { Fragment } from 'react'
import { useInitPagePreview } from '@wheelroom/admin-page-preview'
import { useInitThemeSwitcher } from '@wheelroom/admin-theme-switcher'
import { themeNames } from './theme-names'

const UseAdminModules = (props: any) => {
  useInitThemeSwitcher(themeNames())
  useInitPagePreview(props)
  return <Fragment>{props.children}</Fragment>
}

export const wrapWithUseAdminModules = (args: { props: any; element: any }) => {
  return <UseAdminModules {...args.props}>{args.element}</UseAdminModules>
}
