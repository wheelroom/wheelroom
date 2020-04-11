import { BlockLevelElementName, NcssProps } from '../wheels/elements/types'

export interface ParserProps {
  children: any
  is: BlockLevelElementName
  ncss: NcssProps
}

export type ParserFunction = (props: ParserProps) => JSX.Element | null
