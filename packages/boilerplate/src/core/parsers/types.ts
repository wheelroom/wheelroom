import { BlockLevelElementName, NcssProps } from '../elements/types'

export interface ParserProps {
  is: BlockLevelElementName
  ncss: NcssProps
  children: any
}

export type ParserFunction = (props: ParserProps) => JSX.Element
