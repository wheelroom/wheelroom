import { Ul, Li } from '@wheelroom/any/elements'
import { globalReset } from '@wheelroom/any/resets/global-reset'

const IndexPage = () => {
  console.log('global resets', globalReset)
  return (
    <>
      <h1>nextjs-starter</h1>
      <Ul css={{ label: 'Ul', backgroundColor: 'lightblue' }}>
        <Li css={{ label: 'Li', color: 'red' }}>
          Hello from a typescript world!
        </Li>
      </Ul>
    </>
  )
}

export default IndexPage
