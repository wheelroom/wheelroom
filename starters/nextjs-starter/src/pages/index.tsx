import { AnyStyle, Div } from '@wheelroom/any/elements'

const objectStyles: AnyStyle = {
  fontFamily: `-apple-system, BlinkMacSystemFont,
  “Segoe UI”, “Roboto”, “Oxygen”,
  “Ubuntu”, “Cantarell”, “Fira Sans”,
  “Droid Sans”, “Helvetica Neue”, sans-serif`,
  padding: 16,
  fontSize: 24,
}

const HomePage = () => {
  return (
    <Div css={objectStyles}>Next + TypeScript + Emotion + Normalize.css</Div>
  )
}

export default HomePage
