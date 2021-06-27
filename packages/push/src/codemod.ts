import ts, { JSDocTagInfo, SymbolDisplayPart } from 'typescript'
import { sendToPlatform } from './send-to-platform'

export interface DocProperty {
  name?: string
  documentationComment?: SymbolDisplayPart[]
  jSDocTags?: JSDocTagInfo[]
  type?: string
  docProperties?: DocProperty[]
}

interface Visit {
  node: ts.Node
  printer: ts.Printer
  checker: ts.TypeChecker
  sourceFile: ts.SourceFile
}
const visit = ({ node, checker, printer, sourceFile }: Visit) => {
  //   if (ts.isFunctionDeclaration(node)) {
  //   }
  const printThis = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)
  console.log(printThis)
}

const generateDocumentation = () => {
  const file = './topic.tsx'
  const program = ts.createProgram([file], {
    target: ts.ScriptTarget.ESNext,
    module: ts.ModuleKind.ESNext,
  })
  //   const sourceFile = program.getSourceFile(file)
  const checker = program.getTypeChecker()
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  const docProperties: DocProperty[] = []
  for (const sourceFile of program.getSourceFiles()) {
    if (sourceFile.fileName.includes('topic')) {
      console.log('----> source:', sourceFile.fileName)
    }
    if (!sourceFile.isDeclarationFile) {
      ts.forEachChild(sourceFile, (node: ts.Node) => {
        visit({ node, checker, printer, sourceFile })
      })
    }
  }
  sendToPlatform({ docProperties })
}

generateDocumentation()
