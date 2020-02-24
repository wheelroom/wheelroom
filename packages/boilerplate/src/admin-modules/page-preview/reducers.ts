import { State, ActionTypes } from './types'

export const pagePreviewReducer = (
  state: State,
  action: ActionTypes
): State => {
  switch (action.type) {
    case 'GET_PAGE':
      return { ...state }

    case 'SET_PREVIEW_MODE':
      return { ...state, inPreviewMode: action.mode }

    case 'SET_IS_FETCHING':
      return { ...state, isFetching: action.isFetching }

    default:
      throw new Error()
  }
}

