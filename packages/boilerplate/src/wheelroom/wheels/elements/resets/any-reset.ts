import { NcssProps } from '../../types'
import { aLinkReset } from './a-link-reset'
import { selfBlockquoteReset } from './self-blockquote-reset'
import { buttonReset } from './button-reset'
import { selfCodeReset } from './self-code-reset'
import {
  heading1Reset,
  heading2Reset,
  heading3Reset,
  heading4Reset,
  heading5Reset,
  heading6Reset,
} from './heading-reset'
import { selfHrReset } from './self-hr-reset'
import { selfListReset } from './self-list-reset'
import { paragraphReset } from './paragraph-reset'
import { selfPreReset } from './self-pre-reset'
import { selfStrongReset } from './self-strong-reset'
import { selfTableReset } from './self-table-reset'

export interface AnyElementStyle {
  ncss: NcssProps
}

export const anyPreset: AnyElementStyle = {
  ncss: {
    boxSizing: 'border-box',
  },
}

export const anyResetMap = {
  a: aLinkReset,
  blockquote: selfBlockquoteReset,
  button: buttonReset,
  code: selfCodeReset,
  h1: heading1Reset,
  h2: heading2Reset,
  h3: heading3Reset,
  h4: heading4Reset,
  h5: heading5Reset,
  h6: heading6Reset,
  hr: selfHrReset,
  ul: selfListReset,
  ol: selfListReset,
  li: selfListReset,
  p: paragraphReset,
  pre: selfPreReset,
  strong: selfStrongReset,
  table: selfTableReset,
}
