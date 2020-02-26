import React, {
  createContext,
  useContext,
  useReducer,
  Reducer,
  Dispatch,
} from 'react'
import { ActionTypes, AdminPanelState } from './types'
import { state } from './state'

const defaultValue: [AdminPanelState, Dispatch<ActionTypes>] = [state, () => null]
export const AdminModuleContext = createContext(defaultValue)

interface AdminModuleProviderProps {
  reducer: Reducer<AdminPanelState, ActionTypes>
  initialState: AdminPanelState
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
