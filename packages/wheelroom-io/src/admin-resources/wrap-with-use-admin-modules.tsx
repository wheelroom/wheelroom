import React, { Fragment } from 'react'
import { useInitPagePreview } from '@jacco-meijer/admin-page-preview'
import { useInitThemeSwitcher } from '@jacco-meijer/admin-theme-switcher'
import { themeNames } from './theme-names'

const UseAdminModules = (props: any) => {
  useInitThemeSwitcher(themeNames())
  useInitPagePreview(props)
  return <Fragment>{props.children}</Fragment>
}

export const wrapWithUseAdminModules = (args: { props: any; element: any }) => {
  return <UseAdminModules {...args.props}>{args.element}</UseAdminModules>
}
