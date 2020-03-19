import { ReplaceVars } from '@jacco-meijer/wheelroom'

export interface ReplaceVarsExt extends ReplaceVars {
  currentVariation?: string
  singleVariationName?: string
}
