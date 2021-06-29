import ts from 'typescript'
import { interfaceToDocProperty } from './lib/interface-to-doc-property'
import { isExportedNode } from './lib/is-exported-node'
import { parseWheelroomTags } from './lib/process-doc-property'

interface Visit {
  node: ts.Node
  printer: ts.Printer
  checker: ts.TypeChecker
  sourceFile: ts.SourceFile
}
const visit = ({ node, checker, printer, sourceFile }: Visit) => {
  if (!isExportedNode({ node })) {
    return
  } else if (ts.isInterfaceDeclaration(node) && node.name) {
    const type = checker.getTypeAtLocation(node)
    if (type) {
      const docProperty = interfaceToDocProperty({ type, checker })
      const tags = parseWheelroomTags({ docProperty })
      if (tags) {
        const printThis = printer.printNode(
          ts.EmitHint.Unspecified,
          node,
          sourceFile
        )
        console.log(printThis)
        console.log(tags)
      }
    }
  }
}

const getCompilerOptions = () => {
  const configFileName = ts.findConfigFile(
    './',
    ts.sys.fileExists,
    'tsconfig.packages.json'
  )
  const configFile = ts.readConfigFile(configFileName || '', ts.sys.readFile)
  const compilerOptions = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    './'
  )
  return compilerOptions
}

const generateDocumentation = () => {
  const compilerOptions = getCompilerOptions()
  const program = ts.createProgram(
    ['src/fixtures/topic.tsx'],
    compilerOptions.options
  )
  const checker = program.getTypeChecker()
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      console.log('----> source:', sourceFile.fileName)
      // if (sourceFile.fileName.includes('topic')) {
      // }
      ts.forEachChild(sourceFile, (node: ts.Node) => {
        visit({ node, checker, printer, sourceFile })
      })
    }
  }
}

generateDocumentation()
