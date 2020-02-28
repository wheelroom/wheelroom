import { useEffect, useReducer, useContext } from 'react'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import queryString from 'query-string'
import { useLocation } from '@reach/router'
import { pagePreviewRegister } from './page-preview-register'
import { pagePreviewReducer } from './page-preview-reducer'
import { initialState } from './initial-state'
import { useActions } from './use-actions'

/**
 * Use page preview
 *
 * The main entry point for this admin module. This is used in an element
 * wrapped around each page. What is does:
 *
 * - register a React reducer
 * - save the reducer ito the admin core store
 * - on reducer state change, dispatch SET_LAST_MODULE_ID to the core store
 *
 */
export const usePagePreview = (pageProps: any) => {
  console.log('render: modules init')
  const { adminCoreDispatch } = useContext(AdminCoreContext)

  const [pagePreviewState, pagePreviewDispatch] = useReducer(
    pagePreviewReducer,
    initialState
  )
  // Temp solution, use query string to set preview mode. This should be set by
  // using the admin module itself. The query parameter then becomes obsolete.
  const queryParams = queryString.parse(useLocation().search)
  initialState.inPreviewMode = 'preview' in queryParams

  // Provide store to register action payload
  pagePreviewRegister.module.store = {
    actions: useActions(pagePreviewState, pagePreviewDispatch),
    state: pagePreviewState,
    dispatch: pagePreviewDispatch,
  }
  useEffect(() => {
    // Register module only once
    console.log('render: modules init (use effect [])')
    adminCoreDispatch(pagePreviewRegister)
  }, [])

  useEffect(() => {
    // Update page props
    console.log('render: modules init (use effect [pageProps])')
    adminCoreDispatch({
      type: 'SET_PAGE_PROPS',
      pageProps,
    })
  }, [pageProps])

  useEffect(() => {
    console.log('render: modules init (use effect [pagePreviewState])')
    adminCoreDispatch({
      type: 'SET_LAST_MODULE_ID',
      moduleId: pagePreviewRegister.moduleId,
    })
  }, [pagePreviewState])
}
