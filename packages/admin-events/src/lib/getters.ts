import { AdminCoreState } from '@wheelroom/admin-core'
import { EventsStore } from './types'

export const getEventsStore = (
  adminCoreState: AdminCoreState
): EventsStore | undefined => {
  if (!adminCoreState || !('pagePreview' in adminCoreState.modules)) {
    return
  }
  const events = adminCoreState.modules.events
  if (!events.store) {
    return
  }
  return events.store
}
