import React, { useContext } from 'react'

export const GlobalsContext: any = React.createContext({})
export const GlobalsProvider = GlobalsContext.Provider

// Provide Context type externally so that we can reuse this libary
export const useGlobals = <Context,>(): Context => useContext(GlobalsContext)
