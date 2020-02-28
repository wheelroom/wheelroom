import { AdminCoreState, AdminModuleStore } from '@jacco-meijer/admin-core'
import { PagePreviewState } from './types'

export const getPreviewPageStore = (
  adminCoreState: AdminCoreState
): AdminModuleStore | undefined => {
  if (!('pagePreview' in adminCoreState.modules)) {
    return
  }
  const pagePreview = adminCoreState.modules.pagePreview
  if (!pagePreview.store) {
    return
  }
  return pagePreview.store
}

export const getPreviewPage = (adminCoreState: AdminCoreState) => {
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
    pagePreviewStore.actions.fetchPage(adminCoreState)
  }
  if (previewPage) {
    return previewPage
  }
}

export const getPreviewQueryString = (
  adminCoreState: AdminCoreState
): string => {
  const store = getPreviewPageStore(adminCoreState)
  if (store && store.state.inPreviewMode) {
    return '?preview'
  } else {
    return ''
  }
}
