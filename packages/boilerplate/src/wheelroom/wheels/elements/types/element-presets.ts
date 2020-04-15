import { ImagePreset } from '../image-preset'
import { AnyPreset } from '../any-preset'
import { ALinkPreset } from '../a-link-preset'
import { GridPreset } from '../grid-preset'
import { ButtonPreset } from '../button-preset'
import { IconPreset } from '../icon-preset'
import { GLinkPreset } from '../g-link-preset'
import { HeadingPreset } from '../heading-preset'
import { ListPreset } from '../list-preset'
import { ParagraphPreset } from '../paragraph-preset'
import { VideoPreset } from '../video-preset'

export interface ElementPresets {
  any: AnyPreset
  aLink: ALinkPreset
  box: GridPreset
  button: ButtonPreset
  wrapper: GridPreset
  container: GridPreset
  containerMaxWidth: GridPreset
  featherIcon: IconPreset
  flex: GridPreset
  gLink: GLinkPreset
  h1: HeadingPreset
  h2: HeadingPreset
  h3: HeadingPreset
  h4: HeadingPreset
  h5: HeadingPreset
  h6: HeadingPreset
  image: {
    figcaption: ImagePreset
    img: ImagePreset
    picture: ImagePreset
  }
  list: ListPreset
  paragraph: ParagraphPreset
  textIcon: IconPreset
  video: {
    description: VideoPreset
    video: VideoPreset
  }
}
