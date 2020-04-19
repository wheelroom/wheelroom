import { BlockLevelElementName } from '../wheels/element/types/element-names'
import { NcssProps, Wheel } from '../wheels/types'

export interface ParserProps {
  children: any
  is: BlockLevelElementName
  ncss?: NcssProps
  wheel: Wheel
}

export type ParserFunction = (props: ParserProps) => JSX.Element | null
