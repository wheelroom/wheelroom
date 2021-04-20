/**
 *
 * @see https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API
 *
 */

import {
  createPrinter,
  createProgram,
  EmitHint,
  forEachChild,
  isFunctionDeclaration,
  isInterfaceDeclaration,
  isVariableStatement,
  NewLineKind,
  Node,
  SourceFile,
  SyntaxKind,
} from 'typescript'

const main = () => {
  const file = 'src/source.ts'
  const program = createProgram([file], { allowJs: true })
  const sourceFile = program.getSourceFile(file) as SourceFile
  const printer = createPrinter({ newLine: NewLineKind.LineFeed })

  forEachChild(sourceFile, (node: Node) => {
    printer.printNode(EmitHint.Unspecified, node, sourceFile)
    if (isFunctionDeclaration(node)) {
      console.log('node', node)
    } else if (isVariableStatement(node)) {
      const text = node.declarationList.declarations[0].name.getText(sourceFile)
      console.log('node', node)
      console.log('text', text)
    } else if (isInterfaceDeclaration(node)) {
      const text = node.name.text
      console.log('text', text)
    }
  })

  const printRecursiveFrom = (
    node: Node,
    indentLevel: number,
    sourceFile: SourceFile
  ) => {
    const indentation = '-'.repeat(indentLevel)
    const syntaxKind = SyntaxKind[node.kind]
    const nodeText = node.getText(sourceFile)
    console.log(`${indentation}${syntaxKind}: ${nodeText}`)

    // Tree mode: node.forEachChild
    // node.forEachChild((child) =>
    //   printRecursiveFrom(child, indentLevel + 1, sourceFile)
    // )

    // Tree mode: node.getChildren
    node
      .getChildren(sourceFile)
      .forEach((child) =>
        printRecursiveFrom(child, indentLevel + 1, sourceFile)
      )
  }

  printRecursiveFrom(sourceFile, 0, sourceFile)
}

main()
