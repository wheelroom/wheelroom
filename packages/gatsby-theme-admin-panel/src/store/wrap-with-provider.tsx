import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from './store'

export interface WrapWithProviderProps {
  element: any
}

export const wrapWithProvider = (props: WrapWithProviderProps, pluginOptions: any) => {
  const store = createStore()
  console.log('pluginOptions', pluginOptions)
  console.log('modules', pluginOptions.modules)
  console.log('someModule', pluginOptions.modules[0])
  return <Provider store={store}>{props.element}</Provider>
}
