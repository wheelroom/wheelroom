import ts, { JSDocTagInfo, SymbolDisplayPart } from 'typescript'
import { sendToPlatform } from './send-to-platform'

export interface DocProperty {
  name?: string
  documentationComment?: SymbolDisplayPart[]
  jSDocTags?: JSDocTagInfo[]
  type?: string
  docProperties?: DocProperty[]
}

const options: ts.CreateProgramOptions['options'] = {
  noEmitOnError: true,
  noImplicitAny: true,
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.CommonJS,
  jsx: ts.JsxEmit.React,
}

interface Visit {
  node: ts.Node
  printer: ts.Printer
  checker: ts.TypeChecker
  sourceFile: ts.SourceFile
}
export const visit = ({ node, checker, printer, sourceFile }: Visit) => {
  const printThis = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)
  console.log(printThis)
}

export const generateDocumentation = () => {
  const file = './src/topic/topic.tsx'
  const program = ts.createProgram([file], options)
  //   const sourceFile = program.getSourceFile(file)
  const checker = program.getTypeChecker()
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })
  console.log('starting')
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
  // const docProperties: DocProperty[] = []
  // sendToPlatform({ docProperties })
}

export const runTest = () => {
  const program = ts.createProgram(['./src/topic/topic.tsx'], options)
  const emitResult = program.emit()

  const allDiagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(emitResult.diagnostics)

  allDiagnostics.forEach((diagnostic) => {
    if (diagnostic.file) {
      const { line, character } = ts.getLineAndCharacterOfPosition(
        diagnostic.file,
        diagnostic.start!
      )
      const message = ts.flattenDiagnosticMessageText(
        diagnostic.messageText,
        '\n'
      )
      console.log(
        `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`
      )
    } else {
      console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'))
    }
  })

  const exitCode = emitResult.emitSkipped ? 1 : 0
  console.log(`Process exiting with code '${exitCode}'.`)
  process.exit(exitCode)
}

// runTest()
generateDocumentation()
