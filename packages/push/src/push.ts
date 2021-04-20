/**
 *
 * @see https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
 *
 */

import { createProgram, Node, SourceFile, SyntaxKind } from 'typescript'

interface ShowNode {
  trail: Node[]
  sourceFile: SourceFile
}
const showNode = ({ trail, sourceFile }: ShowNode) => {
  const lastNode = trail.slice(-1)[0]
  const beforeLastNode = trail.slice(-2, -1)[0]
  // const lastNodeKind= SyntaxKind[lastNode.kind]
  const lastNodeText = lastNode.getText(sourceFile)
  const beforeLastNodeKind = SyntaxKind[beforeLastNode.kind]
  // const beforeLastNodeText = beforeLastNode.getText(sourceFile)
  const regExp = /\{([^}]+)\}/

  let docTag, platformFieldType, propertyId
  switch (beforeLastNodeKind) {
    case 'InterfaceDeclaration':
      docTag = lastNode.getChildAt(0).getText(sourceFile)
      if (docTag.trim() === '@platform') {
        console.log(`Found platform:`, lastNodeText)
      }
      break
    case 'PropertySignature':
      platformFieldType = lastNodeText.match(regExp)![1]
      propertyId = beforeLastNode.getChildAt(1).getText(sourceFile)
      console.log(
        `Found field '${propertyId}' with platform type '${platformFieldType}'`
      )
      break

    default:
      break
  }
}

interface PrintNode {
  trail: Node[]
  node: Node
  sourceFile: SourceFile
}

const printNode = ({ node, trail, sourceFile }: PrintNode) => {
  trail.push(node)
  if (SyntaxKind[node.kind] === 'JSDocComment') showNode({ trail, sourceFile })
  node
    .getChildren(sourceFile)
    .forEach((child) => printNode({ node: child, trail, sourceFile }))
}

const main = () => {
  const file = 'src/source.ts'
  const program = createProgram([file], { allowJs: true })
  const sourceFile = program.getSourceFile(file) as SourceFile
  printNode({ node: sourceFile, trail: [], sourceFile })
}

main()
