import util from 'util'
import ts from 'typescript'

interface DocEntry {
  name?: string
  docComment?: unknown
  docTags?: unknown
  type?: string
  properties?: DocEntry[]
}

interface Visit {
  node: ts.Node
  output: DocEntry[]
  checker: ts.TypeChecker
}
const visit = ({ node, checker, output }: Visit) => {
  if (!isNodeExported({ node })) {
    return
  } else if (ts.isInterfaceDeclaration(node) && node.name) {
    const type = checker.getTypeAtLocation(node)
    if (type) {
      output.push(serializeInterface({ type, checker }))
    }
  }
}

interface SerializeInterface {
  type: ts.Type
  checker: ts.TypeChecker
}
const serializeInterface = ({ type, checker }: SerializeInterface) => {
  const details = serializeType({ type, checker })
  const properties = type.getProperties()
  details.properties = properties.map((symbol) =>
    serializeSymbol({ symbol, checker })
  )
  return details
}

interface SerializeType {
  type: ts.Type
  checker: ts.TypeChecker
}
const serializeType = ({ type, checker }: SerializeType): DocEntry => {
  const symbol = type.getSymbol()
  return {
    name: symbol!.getName(),
    docTags: symbol!.getJsDocTags(),
    docComment: symbol!.getDocumentationComment(checker),
    type: checker.typeToString(type),
  }
}

interface SerializeSymbol {
  symbol: ts.Symbol
  checker: ts.TypeChecker
}
const serializeSymbol = ({ symbol, checker }: SerializeSymbol): DocEntry => {
  return {
    name: symbol.getName(),
    docTags: symbol!.getJsDocTags(),
    docComment: symbol.getDocumentationComment(checker),
    type: checker.typeToString(
      checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
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
  const program = ts.createProgram(['src/source.ts'], {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS,
  })
  const checker = program.getTypeChecker()
  const output: DocEntry[] = []
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      ts.forEachChild(sourceFile, (node: ts.Node) => {
        visit({ node, checker, output })
      })
    }
  }
  const inspect = util.inspect(output, false, 10, true)
  console.log(inspect)
}

generateDocumentation()
