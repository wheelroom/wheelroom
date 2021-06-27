import ts, { JSDocTagInfo, SymbolDisplayPart } from 'typescript'
import { processDocProperty } from './process-doc-property'

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
  const printThis = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)
  console.log(printThis)

  if (!isNodeExported({ node })) {
    return
  } else if (ts.isInterfaceDeclaration(node) && node.name) {
    const type = checker.getTypeAtLocation(node)
    if (type) {
      const docProperty = serializeInterface({ type, checker })
      processDocProperty({ docProperty })
    }
  }
}

interface SerializeInterface {
  type: ts.Type
  checker: ts.TypeChecker
}
const serializeInterface = ({ type, checker }: SerializeInterface) => {
  const details = serializeType({ type, checker })
  const docProperties = type.getProperties()
  details.docProperties = docProperties.map((symbol) =>
    serializeSymbol({ symbol, checker })
  )
  return details
}

interface SerializeType {
  type: ts.Type
  checker: ts.TypeChecker
}
const serializeType = ({ type, checker }: SerializeType): DocProperty => {
  const symbol = type.getSymbol()
  return {
    name: symbol?.getName(),
    jSDocTags: symbol?.getJsDocTags(),
    documentationComment: symbol?.getDocumentationComment(checker),
    type: checker.typeToString(type),
  }
}

interface SerializeSymbol {
  symbol: ts.Symbol
  checker: ts.TypeChecker
}
const serializeSymbol = ({ symbol, checker }: SerializeSymbol): DocProperty => {
  return {
    name: symbol.getName(),
    jSDocTags: symbol?.getJsDocTags(),
    documentationComment: symbol.getDocumentationComment(checker),
    type: checker.typeToString(
      checker.getTypeOfSymbolAtLocation(
        symbol,
        symbol.valueDeclaration || ({} as ts.Node)
      )
    ),
  }
}

interface IsNodeExported {
  node: ts.Node
}
const isNodeExported = ({ node }: IsNodeExported): boolean => {
  return (
    (ts.getCombinedModifierFlags(node as ts.Declaration) &
      ts.ModifierFlags.Export) !==
      0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  )
}

const generateDocumentation = () => {
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

  const program = ts.createProgram(
    ['src/topic-source-test/topic.tsx'],
    compilerOptions.options
  )
  const checker = program.getTypeChecker()
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed })

  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      if (sourceFile.fileName.includes('topic')) {
        console.log('----> source:', sourceFile.fileName)
      }
      ts.forEachChild(sourceFile, (node: ts.Node) => {
        visit({ node, checker, printer, sourceFile })
      })
    }
  }
}

generateDocumentation()
