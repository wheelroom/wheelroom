import { createParser } from '@wheelroom/wheelroom'
import { replaceVars } from '../../../../fixtures/replace-vars'
import { flexBoxPropsFunc } from './flex-box-props'
jest.setTimeout(10000)

describe('The boilerplate parser should parse', () => {
  const parser = createParser(replaceVars)
  parser.addReplaceFunctions(flexBoxPropsFunc)
  test('variable: %flexBoxProps%', async () => {
    const result = parser.parse('%flexBoxProps(indent:2)%')

    expect(result).toStrictEqual(`  <FlexContainer {...flexContainerProps}>
    <FlexBox {...flexBoxProps}>__typename</FlexBox>
    <FlexBox {...flexBoxProps}>optional</FlexBox>
    <FlexBox {...flexBoxProps}>shortText</FlexBox>
    <FlexBox {...flexBoxProps}>{props.__typename}</FlexBox>
  </FlexContainer>
  <FlexContainer {...flexContainerProps}>
    <FlexBox {...flexBoxProps}>someText</FlexBox>
    <FlexBox {...flexBoxProps}>optional</FlexBox>
    <FlexBox {...flexBoxProps}>shortText</FlexBox>
    <FlexBox {...flexBoxProps}>{props.someText}</FlexBox>
  </FlexContainer>
  <FlexContainer {...flexContainerProps}>
    <FlexBox {...flexBoxProps}>title</FlexBox>
    <FlexBox {...flexBoxProps}>required</FlexBox>
    <FlexBox {...flexBoxProps}>shortText</FlexBox>
    <FlexBox {...flexBoxProps}>{props.title}</FlexBox>
  </FlexContainer>`)
  })
})
