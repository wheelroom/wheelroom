import { useReducer, Dispatch } from 'react'
import { pagePreviewReducer } from './reducers'
import { State, ActionTypes } from './types'

interface UsePagePreviewProps {
  initialState: State
}

export const usePagePreview = (
  props: UsePagePreviewProps
): [State, Dispatch<ActionTypes>] => {
  return useReducer(pagePreviewReducer, props.initialState)
}
