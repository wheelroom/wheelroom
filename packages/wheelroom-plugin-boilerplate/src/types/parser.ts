import { ReplaceVars } from '@wheelroom/wheelroom'

export interface ReplaceVarsExt extends ReplaceVars {
  currentVariation?: string
  singleVariationName?: string
}
