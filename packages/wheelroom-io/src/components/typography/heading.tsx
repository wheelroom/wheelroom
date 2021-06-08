import { AnyProps } from '@wheelroom/any/Any'
import { H3 } from '@wheelroom/any/elements'

export const Heading = (props: AnyProps['h1']) => <H3>{props.children}</H3>
