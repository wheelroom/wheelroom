import { ImagePreset } from '../image-preset'
import { AnyPreset } from '../any-preset'
import { PrePreset } from '../pre-preset'
import { ALinkPreset } from '../a-link-preset'
import { GridPreset } from '../grid-preset'
import { ButtonPreset } from '../button-preset'
import { IconPreset } from '../icon-preset'
import { GLinkPreset } from '../g-link-preset'
import { HeadingPreset } from '../heading-preset'
import { ListPreset } from '../list-preset'
import { ParagraphPreset } from '../paragraph-preset'
import { VideoPreset } from '../video-preset'
import { HrPreset } from '../hr-preset'
import { StrongPreset } from '../strong-preset'
import { CodePreset } from '../code-preset'
import { BlockquotePreset } from '../blockquote-preset'

export interface ElementPresets {
  any: AnyPreset
  list: ListPreset
  ol: ListPreset
  ul: ListPreset
  li: ListPreset
  pre: PrePreset
  code: CodePreset
  kbd: CodePreset
  samp: CodePreset
  hr: HrPreset
  strong: StrongPreset
  blockquote: BlockquotePreset
  aLink: ALinkPreset
  box: GridPreset
  button: ButtonPreset
  wrapper: GridPreset
  container: GridPreset
  containerMaxWidth: GridPreset
  flex: GridPreset
  gLink: GLinkPreset
  h1: HeadingPreset
  h2: HeadingPreset
  h3: HeadingPreset
  h4: HeadingPreset
  h5: HeadingPreset
  h6: HeadingPreset
  paragraph: ParagraphPreset
  featherIcon: IconPreset
  textIcon: IconPreset
  image: {
    img: ImagePreset
    picture: ImagePreset
    figcaption: ImagePreset
  }
  video: {
    description: VideoPreset
    video: VideoPreset
  }
}
