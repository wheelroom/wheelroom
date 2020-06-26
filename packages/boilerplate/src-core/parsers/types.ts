import { BlockLevelElementName } from '../elements/types/element-names'
import { Wheel } from '../lib/wheel'
import { Ncss } from '../lib/ncss'

export interface ParserProps {
  children: any
  is: BlockLevelElementName
  ncss?: Ncss
  wheel: Wheel
}

export type ParserFunction = (props: ParserProps) => JSX.Element | null
