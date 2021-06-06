import React, { useContext } from 'react'

export const GlobalsContext = React.createContext({})

export const GlobalsProvider = GlobalsContext.Provider

export const useGlobals = () => useContext(GlobalsContext)
