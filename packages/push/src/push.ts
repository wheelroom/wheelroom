import util from 'util'
import ts from 'typescript'

interface DocEntry {
  name?: string
  documentation?: string
  type?: string
  constructors?: DocEntry[]
  parameters?: DocEntry[]
  returnType?: string
}

interface Visit {
  node: ts.Node
  output: DocEntry[]
  checker: ts.TypeChecker
}
const visit = ({ node, checker, output }: Visit) => {
  if (!isNodeExported({ node })) {
    return
  }
  if (ts.isInterfaceDeclaration(node) && node.name) {
    const symbol = checker.getSymbolAtLocation(node.name)
    if (symbol) {
      output.push(serializeInterface({ symbol, checker }))
    }
  }
}

interface SerializeInterface {
  symbol: ts.Symbol
  checker: ts.TypeChecker
}
const serializeInterface = ({ symbol, checker }: SerializeInterface) => {
  const details = serializeSymbol({ symbol, checker })
  const interfaceType = checker.getTypeOfSymbolAtLocation(
    symbol,
    symbol.valueDeclaration!
  )
  details.constructors = interfaceType
    .getConstructSignatures()
    .map((signature) => serializeSignature({ signature, checker }))
  return details
}

interface SerializeSymbol {
  symbol: ts.Symbol
  checker: ts.TypeChecker
}
const serializeSymbol = ({ symbol, checker }: SerializeSymbol): DocEntry => {
  return {
    name: symbol.getName(),
    documentation: ts.displayPartsToString(
      symbol.getDocumentationComment(checker)
    ),
    type: checker.typeToString(
      checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
    ),
  }
}

interface SerializeSignature {
  signature: ts.Signature
  checker: ts.TypeChecker
}
const serializeSignature = ({ signature, checker }: SerializeSignature) => {
  return {
    parameters: signature.parameters.map((symbol) =>
      serializeSymbol({ symbol, checker })
    ),
    returnType: checker.typeToString(signature.getReturnType()),
    documentation: ts.displayPartsToString(
      signature.getDocumentationComment(checker)
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
