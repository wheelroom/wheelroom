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
  console.log('getPreviewPage: call')
  const pagePreviewStore = getPreviewPageStore(adminCoreState)
  const pageProps = adminCoreState.pageProps
  if (!pagePreviewStore || !pageProps) {
    return
  }
  console.log('getPreviewPage: call step 1')
  const pagePreviewState: PagePreviewState = pagePreviewStore.state
  if (!pagePreviewState.inPreviewMode) {
    return
  }
  const previewPage = pagePreviewState.previewPage
  console.log('getPreviewPage: call step 2')
  if (
    !pagePreviewState.isFetching &&
    (!previewPage || pageProps.path !== previewPage.path)
  ) {
    console.log('getPreviewPage: fetching')
    pagePreviewStore.actions.fetchPage(adminCoreState)
  }
  console.log(
    'getPreviewPage: call step 3',
    pageProps.path,
    previewPage && previewPage.path
  )
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
