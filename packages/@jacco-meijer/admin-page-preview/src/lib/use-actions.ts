import { PagePreviewState, ActionTypes } from './types'
import { Dispatch } from 'react'
import { createPagePreview } from '@jacco-meijer/contentful-page-preview'
import { AdminCoreState } from '@jacco-meijer/admin-core'

export const useActions = (
  state: PagePreviewState,
  dispatch: Dispatch<ActionTypes>
) => {
  const fetchPage = (adminCoreState: AdminCoreState) => {
    const pageProps = adminCoreState.pageProps
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
