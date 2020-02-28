import { ActionTypes, PagePreviewState } from './types'

export const pagePreviewReducer = (
  state: PagePreviewState,
  action: ActionTypes
): PagePreviewState => {
  switch (action.type) {
    case 'SET_PREVIEW_PAGE':
      return { ...state, previewPage: action.previewPage }

    case 'SET_PREVIEW_MODE':
      return { ...state, inPreviewMode: action.mode }

    case 'SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching }

    default:
      throw new Error()
  }
}
