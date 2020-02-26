import React, { Fragment, useContext, useEffect } from 'react'
import { AdminModules, AdminModule } from '../lib/types'
import { AdminModuleContext, UpdateAdminModuleContext } from '../lib/provider'

// TODO: Come up with a real panel ;-)

const Modules = (props: { modules: AdminModules }) => {
  const moduleList = Object.entries(props.modules).map(
    ([moduleName, module]: [string, AdminModule]) => {
      return (
        <li key={moduleName}>
          {module.heading} - {module.path}
        </li>
      )
    }
  )

  return <ul>{moduleList}</ul>
}

const AdminPanel = (props: any) => {
  const { adminPanelState } = useContext(AdminModuleContext)
  const updates = useContext(UpdateAdminModuleContext)
  console.log('render: admin panel', updates, adminPanelState)
  useEffect(() => {
    console.log('admin panel - newState', updates, adminPanelState)
  }, [adminPanelState])

  return (
    <Fragment>
      <h1>Admin panel {updates}</h1>
      <p>This is a work in progress.</p>
      <Modules modules={adminPanelState.modules} />
    </Fragment>
  )
}

export default AdminPanel
