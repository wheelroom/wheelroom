import { GridReset } from '../../elements/resets/grid-reset'
import { TextPreset, textPreset } from '../../text/text-preset'

export interface PageSectionFreestylePreset {
  container: GridReset
  text: TextPreset
  wrapper: GridReset
}

export const pageSectionFreestylePreset: PageSectionFreestylePreset = {
  container: {
    ncss: {},
  },
  text: textPreset,
  wrapper: {
    ncss: {},
  },
}
