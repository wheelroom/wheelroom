import { useState, useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { GlobalsModelProps } from '../globals/model-props'
import { EmbedModelProps } from './model-props'

export const useEmbeds = (gatsbyProps: any) => {
  const { adminCoreState } = useContext(AdminCoreContext)

  // Run embed codes only once
  const [embedsDone, setEmbedsDone] = useState(false)
  const globals: GlobalsModelProps = gatsbyProps.data.globals

  // Run embed code
  if (!embedsDone && globals.siteEmbeds && Array.isArray(globals.siteEmbeds)) {
    const isAppInit = adminCoreState.lastModuleId === '*'
    globals.siteEmbeds.forEach((embed: EmbedModelProps) => {
      if (embed.code && embed.type === 'js-page') {
        Function('props', embed.code.code)(gatsbyProps)
      }
      if (isAppInit && embed.code && embed.type === 'js-app') {
        Function('props', embed.code.code)(gatsbyProps)
      }
    })
    setEmbedsDone(true)
  }
}
