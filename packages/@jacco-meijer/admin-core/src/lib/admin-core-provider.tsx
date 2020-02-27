import React, { createContext, useReducer, Dispatch } from 'react'
import { ActionTypes } from './types'
import { initialState } from './initial-state'
import { mainReducer } from './reducer'

const initialDispatch: Dispatch<ActionTypes> = () => {
  console.log('Error: context value found found')
}
export const AdminCoreContext = createContext({
  adminCoreState: initialState,
  adminCoreDispatch: initialDispatch,
})

export const AdminCoreProvider = (props: { children: any }) => {
  console.log('render: admin core provider')
  const [adminCoreState, adminCoreDispatch] = useReducer(
    mainReducer,
    initialState
  )

  return (
    <AdminCoreContext.Provider
      value={{ adminCoreState, adminCoreDispatch }}
    >
      {props.children}
    </AdminCoreContext.Provider>
  )
}
