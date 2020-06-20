import { BlockLevelElementName } from '../elements/types/element-names'
import { NcssProps, Wheel } from '../lib/wheel'

export interface ParserProps {
  children: any
  is: BlockLevelElementName
  ncss?: NcssProps
  wheel: Wheel
}

export type ParserFunction = (props: ParserProps) => JSX.Element | null
