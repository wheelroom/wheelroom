import { selfBlockquoteReset } from '../self/self-blockquote-reset'
import { selfCodeReset } from '../self/self-code-reset'
import { selfHrReset } from '../self/self-hr-reset'
import { selfListReset } from '../self/self-list-reset'
import { selfPreReset } from '../self/self-pre-reset'
import { selfStrongReset } from '../self/self-strong-reset'
import { selfTableReset } from '../self/self-table-reset'
import { aLinkReset } from './a-link-reset'
import { buttonReset } from './button-reset'
import {
  heading1Reset,
  heading2Reset,
  heading3Reset,
  heading4Reset,
  heading5Reset,
  heading6Reset,
} from './heading-reset'
import { paragraphReset } from './paragraph-reset'

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
