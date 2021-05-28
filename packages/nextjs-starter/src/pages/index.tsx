import { CSSObject } from '@emotion/react'
import { Div } from '@wheelroom/any/elements'

const objectStyle: CSSObject = {
  fontFamily: `-apple-system, BlinkMacSystemFont,
  “Segoe UI”, “Roboto”, “Oxygen”,
  “Ubuntu”, “Cantarell”, “Fira Sans”,
  “Droid Sans”, “Helvetica Neue”, sans-serif`,
  padding: 16,
  fontSize: 16,
}

const HomePage = () => {
  return (
    <Div css={objectStyle}>Next + TypeScript + Emotion + Normalize.css</Div>
  )
}

export default HomePage
