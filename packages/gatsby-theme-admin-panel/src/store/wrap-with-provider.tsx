import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

export interface WrapWithProviderProps {
  element: any
}

export const wrapWithProvider = (props: WrapWithProviderProps, pluginOptions: any) => {
  console.log('pluginOptions', pluginOptions)
  
  return <Provider store={store}>{props.element}</Provider>
}
