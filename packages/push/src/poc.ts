import ts from 'typescript'
import { getCompilerOptions } from './lib/get-compiler-options'
import { interfaceToDocProperty } from './lib/interface-to-doc-property'
import { isExportedNode } from './lib/is-exported-node'
import { parseWheelroomTags } from './lib/process-doc-property'

interface PrintNode {
  node: ts.Node
  printer: ts.Printer
  checker: ts.TypeChecker
  sourceFile: ts.SourceFile
}
const printNode = ({ node, checker, printer, sourceFile }: PrintNode) => {
  if (
    !isExportedNode({ node }) ||
    !ts.isInterfaceDeclaration(node) ||
    !node.name
  )
    return
  const type = checker.getTypeAtLocation(node)
  if (!type) return
  const docProperty = interfaceToDocProperty({ type, checker })
  const tags = parseWheelroomTags({ docProperty })
  if (!tags) return
  const printThis = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)
  console.log(printThis)
  console.log(tags)
}

const runPoc = () => {
  const compilerOptions = getCompilerOptions()
  const program = ts.createProgram(
    ['src/fixtures/topic.tsx'],
    compilerOptions.options
  )
  const checker = program.getTypeChecker()
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

  for (const sourceFile of program.getSourceFiles()) {
    if (sourceFile.isDeclarationFile) continue
    console.log('----> source:', sourceFile.fileName)
    ts.forEachChild(sourceFile, (node: ts.Node) => {
      printNode({ node, checker, printer, sourceFile })
    })
  }
}

runPoc()
