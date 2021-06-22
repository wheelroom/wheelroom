import fs from 'fs'
import { TSDocParser, ParserContext } from '@microsoft/tsdoc'

const main = () => {
  const sourceFile = fs.readFileSync('./src/source.ts', { encoding: 'utf8' })

  const tsdocParser: TSDocParser = new TSDocParser()
  const parserContext: ParserContext = tsdocParser.parseString(sourceFile)
  console.log(parserContext.log.messages.map((message) => message.messageId))
  console.log(parserContext.docComment.modifierTagSet)
}

main()
