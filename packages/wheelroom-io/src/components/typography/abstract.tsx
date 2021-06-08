import { AnyProps } from '@wheelroom/any/Any'
import { P } from '@wheelroom/any/elements'

export const Abstract = (props: AnyProps['p']) => (
  <P
    css={{
      fontSize: '18px',
      lineHeight: '1.58',
      fontWeight: 400,
      marginTop: 0,
      marginBottom: '16px',
    }}
  >
    {props.children}
  </P>
)
