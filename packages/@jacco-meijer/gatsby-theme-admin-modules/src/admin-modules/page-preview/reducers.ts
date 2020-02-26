import { ActionTypes, AdminModuleState } from './types'
import { createPagePreview } from '@jacco-meijer/contentful-page-preview'
import { AdminPanelState } from 'gatsby-theme-admin-panel'
import { Dispatch } from 'react'
import { getPreviewPageDispatch, getPreviewPageState } from './getters'

export const pagePreviewReducer = (
  state: AdminModuleState,
  action: ActionTypes
): AdminModuleState => {
  switch (action.type) {
    case 'SET_PREVIEW_PAGE':
      return { ...state, previewPage: action.previewPage }

    case 'SET_PREVIEW_MODE':
      return { ...state, inPreviewMode: action.mode }

    case 'SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching }

    default:
      throw new Error()
  }
}

export const fetchPage = (adminModuleState: AdminPanelState) => {
  const dispatch = getPreviewPageDispatch(adminModuleState)
  const state = getPreviewPageState(adminModuleState)
  if (!dispatch || !state || !state.inPreviewMode) {
    return
  }

  const pageProps = adminModuleState.pageProps
  const entryId = pageProps.pageContext.pageContentfulId
  const previewSecrets = pageProps.data.site.siteMetadata.secrets

  async function getPreviewPage(dispatch: Dispatch<ActionTypes>) {
    const pagePreview = createPagePreview({
      entryId,
      previewSecrets,
    })
    const fetchedPage = await pagePreview.getGatbsyFields()
    dispatch({ type: 'SET_PREVIEW_PAGE', previewPage: fetchedPage })
    dispatch({ type: 'SET_IS_FETCHING', isFetching: false })
  }

  dispatch({ type: 'SET_IS_FETCHING', isFetching: true })
  getPreviewPage(dispatch)
}
