import { State as AdminPanelState } from 'gatsby-theme-admin-panel'
import { State, ActionTypes } from './types'
import { Dispatch } from 'react'
import { fetchPage } from './reducers'

export const getPreviewPageUseReducer = (
  adminModuleState: AdminPanelState
): [State, Dispatch<ActionTypes>] | undefined => {
  if (!('pagePreview' in adminModuleState.modules)) {
    return
  }
  const pagePreview = adminModuleState.modules.pagePreview
  if (!pagePreview.useReducer) {
    return
  }
  return pagePreview.useReducer
}

export const getPreviewPageState = (
  adminModuleState: AdminPanelState
): State | undefined => {
  const pagePreviewUseReducer = getPreviewPageUseReducer(adminModuleState)
  if (!pagePreviewUseReducer) {
    return
  }
  const [state]: [State, Dispatch<ActionTypes>] = pagePreviewUseReducer
  return state
}

export const getPreviewPageDispatch = (
  adminModuleState: AdminPanelState
): Dispatch<ActionTypes> | undefined => {
  const pagePreviewUseReducer = getPreviewPageUseReducer(adminModuleState)
  if (!pagePreviewUseReducer) {
    return
  }
  const [, dispatch]: [State, Dispatch<ActionTypes>] = pagePreviewUseReducer
  return dispatch
}

export const getPreviewPage = (adminModuleState: AdminPanelState) => {
  const state = getPreviewPageState(adminModuleState)

  const pageProps = adminModuleState.pageProps
  const currentPagePath = pageProps && pageProps.path
  const previewPagePath = state && state.previewPage && state.previewPage.path
  const isFetching = state && state.isFetching
  const inPreviewMode = state && state.inPreviewMode

  if (currentPagePath !== previewPagePath && !isFetching && inPreviewMode) {
    fetchPage(adminModuleState)
  }

  if (state && state.inPreviewMode && state.previewPage) {
    return state.previewPage
  }
}

export const getPreviewQueryString = (
  adminModuleState: AdminPanelState
): string => {
  const state = getPreviewPageState(adminModuleState)
  if (state && state.inPreviewMode) {
    return '?preview'
  } else {
    return ''
  }
}
