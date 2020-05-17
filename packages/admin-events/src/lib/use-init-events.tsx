import { useEffect, useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { eventsRegister } from './events-register'

export const useInitEvents = (gatsbyProps: any) => {
  const { adminCoreDispatch } = useContext(AdminCoreContext)

  useEffect(() => {
    // Register module only once
    adminCoreDispatch(eventsRegister)
    console.log('events', gatsbyProps)
  }, [])
}
