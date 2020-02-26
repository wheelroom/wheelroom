import { AdminPanelState } from 'gatsby-theme-admin-panel'

export const getPreviewPageStore = (adminPanelState: AdminPanelState) => {
  if (!('pagePreview' in adminPanelState.modules)) {
    return
  }
  const pagePreview = adminPanelState.modules.pagePreview
  if (!pagePreview.store) {
    return
  }
  return pagePreview.store
}

export const getPreviewPage = (adminPanelState: AdminPanelState) => {
  const store = getPreviewPageStore(adminPanelState)

  const pageProps = adminPanelState.pageProps
  const currentPagePath = pageProps && pageProps.path
  const previewPagePath = store && store.state.previewPage && store.state.previewPage.path
  const isFetching = store && store.state.isFetching
  const inPreviewMode = store && store.state.inPreviewMode

  if (currentPagePath !== previewPagePath && !isFetching && inPreviewMode) {
    store?.actions.fetchPage(adminPanelState)
  }

  if (store && store.state && store.state.inPreviewMode && store.state.previewPage) {
    return store.state.previewPage
  }
}

export const getPreviewQueryString = (
  adminPanelState: AdminPanelState
): string => {
  const store = getPreviewPageStore(adminPanelState)
  if (store && store.state.inPreviewMode) {
    return '?preview'
  } else {
    return ''
  }
}
