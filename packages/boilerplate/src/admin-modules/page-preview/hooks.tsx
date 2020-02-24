import { useReducer, Dispatch } from 'react'
import { pagePreviewReducer } from './reducers'
import {
  useAdminModuleReducer,
} from 'gatsby-theme-admin-panel'
import { State, Action } from './types'

interface UsePagePreviewProps {}

export const usePagePreview = (props: UsePagePreviewProps
): [State, Dispatch<Action>] => {
  const [adminModuleState] = useAdminModuleReducer()

  return useReducer(pagePreviewReducer, { adminModuleState })
}
