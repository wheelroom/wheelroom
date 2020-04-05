import { BlockLevelElementName, NcssProps } from '../elements/types'

export interface ParserProps {
  children: any
  /** Use this parser if content cannot be parsed */
  fallBackParser?: ParserFunction
  is: BlockLevelElementName
  ncss: NcssProps
}

export type ParserFunction = (props: ParserProps) => JSX.Element | null
