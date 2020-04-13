import { NcssProps } from '../../types'
import { TextPreset, textPreset } from '../../text/text-preset'

export interface PageSectionFreestylePreset {
  container: NcssProps
  text: TextPreset
  wrapper: NcssProps
}

export const pageSectionFreestylePreset: PageSectionFreestylePreset = {
  container: {
    ncss: {},
  },
  text: textPreset,
  wrapper: {
    ncss: {
      label: 'wrapper',
      py: 3,
    },
  },
}
