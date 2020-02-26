import { ActionTypes, AdminModuleState } from './types'

export const pagePreviewReducer = (
  state: AdminModuleState,
  action: ActionTypes
): AdminModuleState => {
  console.log('page preview reducer', action)
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
