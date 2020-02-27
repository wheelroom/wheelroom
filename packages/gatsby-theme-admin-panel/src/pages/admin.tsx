import React, { Fragment, useContext, useEffect } from 'react'
import { AdminModules, AdminModule } from '../lib/types'
import { AdminModuleContext } from '../index'

// TODO: Come up with a real panel ;-)

const Modules = (props: { modules: AdminModules }) => {
  console.log('render: modules', props.modules)
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

const AdminPanel = () => {
  const { adminPanelState, adminPanelDispatch } = useContext(AdminModuleContext)
  console.log('render: admin panel', adminPanelState.modules)

  useEffect(() => {
    console.log('render: admin panel (use effect [adminPanelState])')
  }, [adminPanelState])

  const test = () => {
    console.log(adminPanelState)
    adminPanelDispatch({ type: 'SET_PAGE_PROPS', pageProps: { name: 'value' } })
  }

  return (
    <Fragment>
      <h1>Admin panel</h1>
      <p>This is a work in progress...</p>
      <Modules modules={adminPanelState.modules} />
      <button onClick={test}>test</button>
    </Fragment>
  )
}

export default AdminPanel
