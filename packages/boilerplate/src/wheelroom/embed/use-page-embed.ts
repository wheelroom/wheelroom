import { useState } from 'react'
import { EmbedProps } from '../../models/embed/embed'
import { GlobalsProps } from '../../models/globals/globals'

export const usePageEmbed = (gatsbyProps: any) => {
  // Run embed codes only once
  const [embedsDone, setEmbedsDone] = useState(false)
  const globals: GlobalsProps = gatsbyProps.data.globals

  // Run embed code
  if (!embedsDone && globals.siteEmbeds && Array.isArray(globals.siteEmbeds)) {
    globals.siteEmbeds.forEach((embed: EmbedProps) => {
      if (embed.code && embed.type === 'js-page') {
        Function('props', embed.code.code)(gatsbyProps)
      }
    })
    setEmbedsDone(true)
  }
}
