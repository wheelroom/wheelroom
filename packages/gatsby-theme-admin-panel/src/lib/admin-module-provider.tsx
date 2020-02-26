import React, { createContext, useReducer, Dispatch } from 'react'
import { ActionTypes } from './types'
import { initialState } from './initial-state'
import { mainReducer } from './reducer'

const initialDispatch: Dispatch<ActionTypes> = () => {}
export const AdminModuleContext = createContext({
  adminPanelState: initialState,
  adminPanelDispatch: initialDispatch,
})

export const AdminModuleProvider = (props: { children: any }) => {
  console.log('render: admin module provider')
  const [adminPanelState, adminPanelDispatch] = useReducer(
    mainReducer,
    initialState
  )

  return (
    <AdminModuleContext.Provider
      value={{ adminPanelState, adminPanelDispatch }}
    >
      {props.children}
    </AdminModuleContext.Provider>
  )
}
