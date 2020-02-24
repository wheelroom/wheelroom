export interface State {
  /** Show page with preview content fetched from Contentful */
  inPreviewMode: boolean
  /** Preview content fetched from contentful */
  previewPage: any
  /** Currently fetching new preview data */
  isFetching: boolean
}
export interface BaseAction {
  type: string
}

export interface FetchPageAction extends BaseAction {
  type: 'GET_PAGE'
}

export interface SetPreviewModeAction extends BaseAction {
  type: 'SET_PREVIEW_MODE'
  mode: boolean
}

export interface SetIsFetchingAction extends BaseAction {
  type: 'SET_IS_FETCHING'
  isFetching: boolean
}

export type ActionTypes = FetchPageAction | SetPreviewModeAction | SetIsFetchingAction
