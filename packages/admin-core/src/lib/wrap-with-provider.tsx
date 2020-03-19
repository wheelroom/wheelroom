import React from 'react'
import { AdminCoreProvider } from './admin-core-provider'

export const wrapWithProvider = (props: { element: any }) => {
  return <AdminCoreProvider>{props.element}</AdminCoreProvider>
}
