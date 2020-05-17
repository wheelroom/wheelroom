import { Dispatch } from 'react'

export interface EventsState {
  /** Site wide embeds set by Content editor */
  siteEmbeds: any[]
}

export interface BaseAction {
  type: string
}

export interface SetSiteEmbeds extends BaseAction {
  type: 'SET_SITE_EMBEDS'
  siteEmbeds: any[]
}

export type ActionTypes = SetSiteEmbeds

export interface EventsStore {
  actions: any
  state: EventsState
  dispatch: Dispatch<ActionTypes>
}
