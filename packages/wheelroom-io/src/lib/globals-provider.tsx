import React, { useContext } from 'react'
import { ContentfulGlobals } from '../components/models/contentful-globals'

export type UseGlobalsProps = () => {
  globals: ContentfulGlobals
  site: unknown
}

export const GlobalsContext: any = React.createContext({})

export const GlobalsProvider = GlobalsContext.Provider

export const useGlobals: UseGlobalsProps = () => useContext(GlobalsContext)
