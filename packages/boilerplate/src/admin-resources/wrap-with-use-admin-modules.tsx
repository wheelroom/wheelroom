import React, { Fragment } from 'react'
import { usePagePreview } from '@jacco-meijer/admin-page-preview'

const UseAdminModules = (props: any) => {
  usePagePreview(props)
  return <Fragment>{props.children}</Fragment>
}

export const wrapWithUseAdminModules = (args: { props: any; element: any }) => {
  console.log('render: page wrapper')
  return <UseAdminModules {...args.props}>{args.element}</UseAdminModules>
}
