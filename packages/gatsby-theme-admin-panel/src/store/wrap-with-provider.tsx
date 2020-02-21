import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from './store'

export interface WrapWithProviderProps {
  element: any
}

export const wrapWithProvider = (props: WrapWithProviderProps, pluginOptions: any) => {
  const store = createStore()
  console.log('pluginOptions', pluginOptions)
  return <Provider store={store}>{props.element}</Provider>
}
