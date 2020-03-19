import React, { Fragment } from 'react'
import { useInitPagePreview } from '@wheelroom/admin-page-preview'

const UseAdminModules = (props: any) => {
  useInitPagePreview(props)
  return <Fragment>{props.children}</Fragment>
}

export const wrapWithUseAdminModules = (args: { props: any; element: any }) => {
  return <UseAdminModules {...args.props}>{args.element}</UseAdminModules>
}
