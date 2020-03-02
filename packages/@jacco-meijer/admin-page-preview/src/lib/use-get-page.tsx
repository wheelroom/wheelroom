import { AdminCoreState } from '@jacco-meijer/admin-core'
import { PagePreviewState } from './types'
import { getPreviewPageStore } from './getters'

/**
 * Check for a preview page being present, fetch a new one if needede.
 */

export const useGetPage = (adminCoreState: AdminCoreState) => {
  const pagePreviewStore = getPreviewPageStore(adminCoreState)
  const pageProps = adminCoreState.pageProps
  if (!pagePreviewStore || !pageProps) {
    // Make sure the preview store has been initialized
    return
  }
  const pagePreviewState: PagePreviewState = pagePreviewStore.state
  if (!pagePreviewState.inPreviewMode) {
    // Make sure we're in preview mode
    return
  }
  const previewPage = pagePreviewState.previewPage
  if (
    !pagePreviewState.isFetching &&
    (!previewPage || pageProps.path !== previewPage.path)
  ) {
    // If there's no preview yet, or we navigated to another page. Fetch a fresh
    // copy.
    console.log(
      'useGetPage initiates fetchPage',
      previewPage && previewPage.path,
      pageProps && pageProps.path
    )
    pagePreviewStore.actions.fetchPage(adminCoreState)
  }
  if (previewPage) {
    return previewPage
  }
}
