import { State, ActionTypes, ActionCreator } from './types'
import { createPagePreview } from '@jacco-meijer/contentful-page-preview'
import { useAdminModuleReducer } from 'gatsby-theme-admin-panel'
import { Dispatch } from 'react'

export const pagePreviewReducer = (
  state: State,
  action: ActionTypes
): State => {
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

export const fetchPage = () => {
  const [adminModuleState] = useAdminModuleReducer()
  console.log(adminModuleState.pageProps)
  const pageProps = adminModuleState.pageProps
  const entryId = pageProps.pageContext.pageContentfulId
  const previewSecrets = pageProps.data.site.siteMetadata.secrets

  return (dispatch: Dispatch<ActionTypes | ActionCreator>) => {
    async function getPreviewPage() {
      const pagePreview = createPagePreview({
        entryId,
        previewSecrets,
      })
      const fetchedPage = await pagePreview.getGatbsyFields()
      dispatch({ type: 'SET_PREVIEW_PAGE', previewPage: fetchedPage })
      dispatch({ type: 'SET_IS_FETCHING', isFetching: false })
    }

    dispatch({ type: 'SET_IS_FETCHING', isFetching: true })
    getPreviewPage()
  }
}
