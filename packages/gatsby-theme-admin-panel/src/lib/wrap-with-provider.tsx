import React from 'react'
import { AdminModuleProvider } from './provider'
import { mainReducer } from './reducer'
import { state } from './state'

export interface WrapWithProviderProps {
  element: any
}

export const wrapWithProvider = (
  props: WrapWithProviderProps
  // pluginOptions: any
) => {
  return (
    <AdminModuleProvider initialState={state} reducer={mainReducer}>
      {props.element}
    </AdminModuleProvider>
  )
}
