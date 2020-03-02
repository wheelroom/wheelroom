import React, { createContext, useReducer } from 'react'
import { AdminCoreDispatch } from './types'
import { initialState } from './initial-state'
import { mainReducer } from './reducer'

const initialDispatch: AdminCoreDispatch = () => {
  console.log('Error: admin core context value not found')
}
export const AdminCoreContext = createContext({
  adminCoreState: initialState,
  adminCoreDispatch: initialDispatch,
})

export const AdminCoreProvider = (props: { children: any }) => {
  const [adminCoreState, adminCoreDispatch] = useReducer(
    mainReducer,
    initialState
  )

  return (
    <AdminCoreContext.Provider value={{ adminCoreState, adminCoreDispatch }}>
      {props.children}
    </AdminCoreContext.Provider>
  )
}
