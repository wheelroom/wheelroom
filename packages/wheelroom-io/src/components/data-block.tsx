import { Pre } from '@wheelroom/any/elements'

export const preStyle = {
  display: 'flex',
  padding: 8,
  backgroundColor: '#eee',
  overflow: 'scroll',
}

export const DataBlock = ({ data }: { data: any }) => (
  <Pre css={preStyle}>{JSON.stringify(data, null, 2)}</Pre>
)
