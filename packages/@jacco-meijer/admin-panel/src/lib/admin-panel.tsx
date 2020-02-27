import React, { Fragment, useContext, useEffect } from 'react'
import { AdminModules, AdminModule } from '@jacco-meijer/admin-core'
import { AdminCoreContext } from '@jacco-meijer/admin-core'

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

export const AdminPanel = () => {
  const { adminCoreState, adminCoreDispatch } = useContext(AdminCoreContext)
  console.log('render: admin panel', adminCoreState.modules)

  useEffect(() => {
    console.log('render: admin panel (use effect [adminCoreState])')
  }, [adminCoreState])

  const test = () => {
    console.log(adminCoreState)
    adminCoreDispatch({ type: 'SET_PAGE_PROPS', pageProps: { name: 'value' } })
  }

  return (
    <Fragment>
      <h1>Admin panel</h1>
      <p>This is a work in progress...</p>
      <Modules modules={adminCoreState.modules} />
      <button onClick={test}>test</button>
    </Fragment>
  )
}
