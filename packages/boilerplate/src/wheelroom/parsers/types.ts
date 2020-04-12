import { BlockLevelElementName } from '../wheels/elements/types'
import { NcssProps, Wheel } from '../wheels/types'

export interface ParserProps {
  children: any
  is: BlockLevelElementName
  ncss: NcssProps
  wheel: Wheel
}

export type ParserFunction = (props: ParserProps) => JSX.Element | null
