import { AdminCoreContext } from '@wheelroom/admin-core'
import { getEventsStore } from './getters'
import { useContext } from 'react'

export const useEvents = () => {
  const { adminCoreState } = useContext(AdminCoreContext)
  const eventsStore = getEventsStore(adminCoreState)
  return eventsStore
}
