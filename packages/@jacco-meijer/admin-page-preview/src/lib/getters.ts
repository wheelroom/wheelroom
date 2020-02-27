import { AdminCoreState, AdminModuleStore } from '@jacco-meijer/admin-core'

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
  const store = getPreviewPageStore(adminCoreState)

  const pageProps = adminCoreState.pageProps
  const currentPagePath = pageProps && pageProps.path
  const previewPagePath =
    store && store.state.previewPage && store.state.previewPage.path
  const isFetching = store && store.state.isFetching
  const inPreviewMode = store && store.state.inPreviewMode

  if (currentPagePath !== previewPagePath && !isFetching && inPreviewMode) {
    store?.actions.fetchPage(adminCoreState)
  }

  if (
    store &&
    store.state &&
    store.state.inPreviewMode &&
    store.state.previewPage
  ) {
    return store.state.previewPage
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
