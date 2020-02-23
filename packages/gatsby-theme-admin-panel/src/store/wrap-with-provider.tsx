import React, { Dispatch } from 'react'
import { StateProvider } from './state'
import { createReducerRegistry } from './create-reducer-registry'

export interface WrapWithProviderProps {
  element: any
}

export const wrapWithProvider = (
  props: WrapWithProviderProps,
  pluginOptions: any
) => {
  const initialState = {
    theme: { primary: 'green' },
  }

  const mainReducer = (state: any, action: Dispatch<any>) => {
    switch (action.type) {
      case 'changeTheme':
        return {
          ...state,
          theme: action.newTheme,
        }

      default:
        return state
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={mainReducer}>
      {props.element}
    </StateProvider>
  )
}
