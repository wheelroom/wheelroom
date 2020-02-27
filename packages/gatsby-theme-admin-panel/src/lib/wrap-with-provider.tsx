import React from 'react'
import { AdminModuleProvider } from './admin-module-provider'

export const wrapWithProvider = (props: { element: any }) => {
  console.log('render: root wrapper')
  return <AdminModuleProvider>{props.element}</AdminModuleProvider>
}
