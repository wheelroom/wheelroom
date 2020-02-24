import { useRef, useCallback, Reducer, useState } from 'react'

export const thunkMiddleware = (
  reducer: Reducer<any, any>,
  initialArg: any
) => {
  const [hookState, setHookState] = useState(initialArg)

  const state = useRef(hookState)
  const getState = useCallback(() => state.current, [state])
  const setState = useCallback(
    newState => {
      state.current = newState
      setHookState(newState)
    },
    [state, setHookState]
  )

  const reduce = useCallback(
    action => {
      return reducer(getState(), action)
    },
    [reducer, getState]
  )

  const dispatch: any = useCallback(
    (action: any) => {
      return typeof action === 'function'
        ? action(dispatch, getState)
        : setState(reduce(action))
    },
    [getState, setState, reduce]
  )

  return [hookState, dispatch]
}
