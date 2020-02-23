import React, {
  createContext,
  useContext,
  useReducer,
  DispatchWithoutAction,
} from 'react'

const defaultValue: [unknown, DispatchWithoutAction] = [null, () => null]
export const StateContext = createContext(defaultValue)

interface StateProviderProps {
  reducer: any
  initialState: any
  children: any
}

export const StateProvider = (props: StateProviderProps) => (
  <StateContext.Provider value={useReducer(props.reducer, props.initialState)}>
    {props.children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
