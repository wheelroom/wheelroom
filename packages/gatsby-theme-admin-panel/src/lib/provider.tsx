import React, {
  createContext,
  useReducer,
  Dispatch,
  useEffect,
  useState,
} from 'react'
import { ActionTypes } from './types'
import { initialState } from './initial-state'
import { mainReducer } from './reducer'

const initialDispatch: Dispatch<ActionTypes> = () => {}
export const AdminModuleContext = createContext({
  adminPanelState: initialState,
  adminPanelDispatch: initialDispatch,
})

export const UpdateAdminModuleContext = createContext(0)

interface AdminModuleProviderProps {
  children: any
}

export const AdminModuleProvider = (props: AdminModuleProviderProps) => {
  console.log('render: admin module provider')
  const [updates, setUpdates] = useState(0)
  const [adminPanelState, adminPanelDispatch] = useReducer(
    mainReducer,
    initialState
  )
  useEffect(() => {
    setUpdates(updates + 1)
    console.log('admin module provider - newState', updates, adminPanelState)
  }, [adminPanelState])

  return (
    <AdminModuleContext.Provider
      value={{ adminPanelState, adminPanelDispatch }}
    >
      <UpdateAdminModuleContext.Provider value={updates}>
        {props.children}
      </UpdateAdminModuleContext.Provider>
    </AdminModuleContext.Provider>
  )
}
