import React from 'react'
import { AdminModuleProvider } from './provider'

export interface WrapWithProviderProps {
  element: any
}

export const wrapWithProvider = (props: WrapWithProviderProps) => {
  console.log('render: root wrapper')
  return <AdminModuleProvider>{props.element}</AdminModuleProvider>
}
