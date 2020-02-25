import React, {
  createContext,
  useContext,
  useReducer,
  Reducer,
  Dispatch,
} from 'react'
import { ActionTypes, State } from './types'
import { state } from './state'

const defaultValue: [State, Dispatch<ActionTypes>] = [state, () => null]
export const AdminModuleContext = createContext(defaultValue)

interface AdminModuleProviderProps {
  reducer: Reducer<State, ActionTypes>
  initialState: State
  children: any
}

export const AdminModuleProvider = (props: AdminModuleProviderProps) => (
  <AdminModuleContext.Provider
    value={useReducer(props.reducer, props.initialState)}
  >
    {props.children}
  </AdminModuleContext.Provider>
)

export const useAdminModuleReducer = () => useContext(AdminModuleContext)
