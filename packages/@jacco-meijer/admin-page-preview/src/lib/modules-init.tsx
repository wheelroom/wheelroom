import { useEffect, useReducer, useContext } from 'react'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import queryString from 'query-string'
import { useLocation } from '@reach/router'
import { registerPagePreview } from './register'
import { pagePreviewReducer } from './reducers'
import { initialState } from './initial-state'
import { useActions } from './actions'

export const ModulesInit = (props: any) => {
  console.log('render: modules init')
  const { adminCoreDispatch } = useContext(AdminCoreContext)

  const [pagePreviewState, pagePreviewDispatch] = useReducer(
    pagePreviewReducer,
    initialState
  )
  const queryParams = queryString.parse(useLocation().search)
  initialState.inPreviewMode = 'preview' in queryParams

  registerPagePreview.module.store = {
    actions: useActions(pagePreviewState, pagePreviewDispatch),
    state: pagePreviewState,
    dispatch: pagePreviewDispatch,
  }
  useEffect(() => {
    console.log('render: modules init (use effect [])')
    adminCoreDispatch(registerPagePreview)
    adminCoreDispatch({
      type: 'SET_PAGE_PROPS',
      pageProps: props,
    })
  }, [])

  useEffect(() => {
    console.log('render: modules init (use effect [pagePreviewState])')
  }, [pagePreviewState])

  return props.children
}
