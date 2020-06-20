import { BlockLevelElementName } from '../elements/types/element-names'
import { Wheel } from '../lib/wheel'
import { NcssProps } from '../lib/ncss'

export interface ParserProps {
  children: any
  is: BlockLevelElementName
  ncss?: NcssProps
  wheel: Wheel
}

export type ParserFunction = (props: ParserProps) => JSX.Element | null
