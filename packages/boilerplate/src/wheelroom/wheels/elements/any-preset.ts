import { NcssProps } from '../types'
import { aLinkPreset } from './a-link-preset'
import { blockquotePreset } from './blockquote-preset'
import { buttonPreset } from './button-preset'
import { codePreset } from './code-preset'
import { gLinkPreset } from './g-link-preset'
import {
  heading1Preset,
  heading2Preset,
  heading3Preset,
  heading4Preset,
  heading5Preset,
  heading6Preset,
} from './heading-preset'
import { hrPreset } from './hr-preset'
import { listPreset } from './list-preset'
import { paragraphPreset } from './paragraph-preset'
import { prePreset } from './pre-preset'
import { strongPreset } from './strong-preset'
import { tablePreset } from './table-preset'

export interface AnyPreset {
  ncss: NcssProps
}

export const anyPreset: AnyPreset = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const anyPresetMap = {
  a: aLinkPreset,
  bq: blockquotePreset,
  button: buttonPreset,
  code: codePreset,
  h1: heading1Preset,
  h2: heading2Preset,
  h3: heading3Preset,
  h4: heading4Preset,
  h5: heading5Preset,
  h6: heading6Preset,
  hr: hrPreset,
  ul: listPreset,
  ol: listPreset,
  li: listPreset,
  p: paragraphPreset,
  pre: prePreset,
  strong: strongPreset,
  table: tablePreset,
}
