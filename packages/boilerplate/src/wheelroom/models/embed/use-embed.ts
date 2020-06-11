import { useState, useContext } from 'react'
import { EmbedProps } from './model-types'
import { GlobalsProps } from '../globals/model-types'
import { AdminCoreContext } from '@wheelroom/admin-core'

export const useEmbeds = (gatsbyProps: any) => {
  const { adminCoreState } = useContext(AdminCoreContext)

  // Run embed codes only once
  const [embedsDone, setEmbedsDone] = useState(false)
  const globals: GlobalsProps = gatsbyProps.data.globals

  // Run embed code
  if (!embedsDone && globals.siteEmbeds && Array.isArray(globals.siteEmbeds)) {
    const isAppInit = adminCoreState.lastModuleId === '*'
    globals.siteEmbeds.forEach((embed: EmbedProps) => {
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
