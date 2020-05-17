import { ActionTypes, EventsState } from './types'

export const eventsReducer = (
  state: EventsState,
  action: ActionTypes
): EventsState => {
  // console.log('REDUCER: events', action)
  switch (action.type) {
    case 'SET_SITE_EMBEDS':
      return { ...state, siteEmbeds: action.siteEmbeds }

    default:
      throw new Error()
  }
}
