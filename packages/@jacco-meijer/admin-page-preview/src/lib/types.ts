import { Dispatch } from 'react'

export interface PagePreviewState {
  /** Show page with preview content fetched from Contentful */
  inPreviewMode: boolean
  /** Preview content fetched from contentful */
  previewPage?: any
  /** Currently fetching new preview data */
  isFetching: boolean
}

export interface BaseAction {
  type: string
}

export interface SetPreviewPage extends BaseAction {
  type: 'SET_PREVIEW_PAGE'
  previewPage: any
}

export interface SetPreviewMode extends BaseAction {
  type: 'SET_PREVIEW_MODE'
  mode: boolean
}

export interface SetIsFetching extends BaseAction {
  type: 'SET_IS_FETCHING'
  isFetching: boolean
}

export type ActionTypes = SetPreviewMode | SetIsFetching | SetPreviewPage

export interface PagePreviewStore {
  actions: any
  state: PagePreviewState
  dispatch: Dispatch<ActionTypes>
}
