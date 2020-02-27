import { AdminModuleState, ActionTypes } from './types'
import { Dispatch } from 'react'
import { createPagePreview } from '@jacco-meijer/contentful-page-preview'
import { AdminPanelState } from 'gatsby-theme-admin-panel'

export const useActions = (
  state: AdminModuleState,
  dispatch: Dispatch<ActionTypes>
) => {
  const fetchPage = (adminPanelState: AdminPanelState) => {
    console.log('fetPage called')

    const pageProps = adminPanelState.pageProps
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

  return {
    fetchPage,
  }
}
