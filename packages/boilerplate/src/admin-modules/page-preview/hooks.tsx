import { useReducer, Dispatch, useCallback, useRef } from 'react'
import { pagePreviewReducer } from './reducers'
import { State, ActionTypes, ActionCreator } from './types'

const initialState: State = {
  inPreviewMode: false,
  previewPage: '',
  isFetching: false,
}

export const usePagePreview = (): [
  State,
  Dispatch<ActionTypes | ActionCreator>
] => {
  const [state, dispatch] = useReducer(pagePreviewReducer, initialState)
  const previousState = useRef(initialState)

  const dispatchWithMiddleware: any = useCallback(
    (action: ActionTypes | ActionCreator) => {
      if (typeof action === 'function') {
        return action(dispatchWithMiddleware, () => previousState.current)
      }
      dispatch(action)
    },
    []
  )

  previousState.current = state

  return [state, dispatchWithMiddleware]
}
