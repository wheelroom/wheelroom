import { NcssProps } from '../types'
import { aLinkReset } from './a-link-reset'
import { blockquoteReset } from './blockquote-reset'
import { buttonReset } from './button-reset'
import { codeReset } from './code-reset'
import {
  heading1Reset,
  heading2Reset,
  heading3Reset,
  heading4Reset,
  heading5Reset,
  heading6Reset,
} from './heading-reset'
import { hrReset } from './hr-reset'
import { listReset } from './list-reset'
import { paragraphReset } from './paragraph-reset'
import { preReset } from './pre-reset'
import { strongReset } from './strong-reset'
import { tableReset } from './table-reset'

export interface AnyReset {
  ncss: NcssProps
}

export const anyPreset: AnyReset = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const anyPresetMap = {
  a: aLinkReset,
  blockquote: blockquoteReset,
  button: buttonReset,
  code: codeReset,
  h1: heading1Reset,
  h2: heading2Reset,
  h3: heading3Reset,
  h4: heading4Reset,
  h5: heading5Reset,
  h6: heading6Reset,
  hr: hrReset,
  ul: listReset,
  ol: listReset,
  li: listReset,
  p: paragraphReset,
  pre: preReset,
  strong: strongReset,
  table: tableReset,
}
