import { PagePreviewState, ActionTypes } from './types'
import { Dispatch } from 'react'
import { createPagePreview } from '@jacco-meijer/contentful-page-preview'
import { AdminCoreState } from '@jacco-meijer/admin-core'
import { getPreviewPageStore } from './getters'

export const actionCreator = (
  state: PagePreviewState,
  dispatch: Dispatch<ActionTypes>
) => {
  const fetchPage = (adminCoreState: AdminCoreState) => {
    const pagePreviewStore = getPreviewPageStore(adminCoreState)
    if (!pagePreviewStore) {
      return
    }
    if (pagePreviewStore.state.isFetching) {
      return
    }

    const pageProps = adminCoreState.pageProps
    const entryId = pageProps.pageContext.pageContentfulId
    const previewSecrets = pageProps.data.site.siteMetadata.secrets
    const locale = pageProps.pageContext.locale

    if (!pageProps.pageContext.pageContentfulId) {
      console.log(
        'Warning: Could not find field contentful_id, is it present in the page query?'
      )
    }

    async function getPreviewPage(dispatch: Dispatch<ActionTypes>) {
      const pagePreview = createPagePreview({
        entryId,
        locale,
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
