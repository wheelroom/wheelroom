import { useEffect, useReducer, useContext } from 'react'
import { AdminModuleContext } from 'gatsby-theme-admin-panel'
import queryString from 'query-string'
import { useLocation } from '@reach/router'
import { registerPagePreview } from './register'
import { pagePreviewReducer } from './reducers'
import { initialState } from './initial-state'
import { useActions } from './actions'

export const ModulesInit = (props: any) => {
  console.log('render: modules init')
  const { adminPanelState, adminPanelDispatch } = useContext(AdminModuleContext)

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
    adminPanelDispatch(registerPagePreview)
    adminPanelDispatch({
      type: 'SET_PAGE_PROPS',
      pageProps: props,
    })
  }, [])

  useEffect(() => {
    console.log('render: page wrapper (use effect [adminPanelState])')
  }, [adminPanelState])

  return props.children
}
