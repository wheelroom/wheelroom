import { AdminCoreState } from '@jacco-meijer/admin-core'
import { PagePreviewStore } from './types'

export const getPreviewPageStore = (
  adminCoreState: AdminCoreState
): PagePreviewStore | undefined => {
  if (!adminCoreState || !('pagePreview' in adminCoreState.modules)) {
    return
  }
  const pagePreview = adminCoreState.modules.pagePreview
  if (!pagePreview.store) {
    return
  }
  return pagePreview.store
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
