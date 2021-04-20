/**
 *
 * @see https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
 *
 */

import { createProgram, Node, SourceFile, SyntaxKind } from 'typescript'

type Crumb = {
  kind: string
  text: string
}

interface PrintNode {
  trail: Crumb[]
  node: Node
  sourceFile: SourceFile
}

const printNode = ({ node, trail, sourceFile }: PrintNode) => {
  trail.push({
    kind: SyntaxKind[node.kind],
    text: node.getText(sourceFile),
  })
  node
    .getChildren(sourceFile)
    .forEach((child) => printNode({ node: child, trail, sourceFile }))
  if (trail.slice(-1)[0].kind === 'JSDocComment') {
    console.log(
      '>',
      trail.map((crumb: Crumb) => crumb.text)
    )
  }
}

const main = () => {
  const file = 'src/source.ts'
  const program = createProgram([file], { allowJs: true })
  const sourceFile = program.getSourceFile(file) as SourceFile

  printNode({ node: sourceFile, trail: [], sourceFile })
}

main()
