import ts, { JSDocTagInfo, SymbolDisplayPart } from 'typescript'

export interface DocProperty {
  name?: string
  documentationComment?: SymbolDisplayPart[]
  jSDocTags?: JSDocTagInfo[]
  type?: string
  docProperties?: DocProperty[]
}

export interface InterfaceToDocProperty {
  type: ts.Type
  checker: ts.TypeChecker
}
export const interfaceToDocProperty = ({
  type,
  checker,
}: InterfaceToDocProperty) => {
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
