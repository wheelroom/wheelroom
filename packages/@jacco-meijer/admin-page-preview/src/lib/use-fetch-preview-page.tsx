import { PagePreviewState } from './types'
import { getPreviewPageStore } from './getters'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import { useContext, useLayoutEffect } from 'react'

/**
 * Check for a preview page being present, fetch a new one if needede.
 */

export const useFetchPreviewPage = (setPreviewPage: (page: any) => void) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  const pagePreviewStore = getPreviewPageStore(adminCoreState)

  useLayoutEffect(() => {
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
      pagePreviewStore.actions.fetchPage(adminCoreState)
    }
    setPreviewPage(previewPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminCoreState])
}
