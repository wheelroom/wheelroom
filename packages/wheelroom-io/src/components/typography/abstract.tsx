import { AnyProps } from '@wheelroom/any/any'
import { P } from '@wheelroom/any/elements'

export const Abstract = (props: AnyProps['p']) => (
  <P
    css={{
      fontSize: 18,
      lineHeight: 1.58,
      fontWeight: 400,
      marginTop: 0,
      marginBottom: 16,
    }}
  >
    {props.children}
  </P>
)
