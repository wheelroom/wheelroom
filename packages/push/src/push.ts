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
  docProperties: DocProperty[]
  checker: ts.TypeChecker
}
const visit = ({ node, checker, docProperties }: Visit) => {
  if (!isNodeExported({ node })) {
    return
  } else if (ts.isInterfaceDeclaration(node) && node.name) {
    const type = checker.getTypeAtLocation(node)
    if (type) {
      docProperties.push(serializeInterface({ type, checker }))
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
  const program = ts.createProgram(['src/source2.tsx'], {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
  })
  const checker = program.getTypeChecker()
  const docProperties: DocProperty[] = []
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      ts.forEachChild(sourceFile, (node: ts.Node) => {
        visit({ node, checker, docProperties })
      })
    }
  }
  sendToPlatform({ docProperties })
}

generateDocumentation()
