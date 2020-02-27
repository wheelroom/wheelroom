import React from 'react'
import { AdminCoreProvider } from './admin-core-provider'

export const wrapWithProvider = (props: { element: any }) => {
  console.log('render: root wrapper')
  return <AdminCoreProvider>{props.element}</AdminCoreProvider>
}
