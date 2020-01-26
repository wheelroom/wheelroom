export const contentTypes = `import { FluidImage } from '../../views/image/image'

%tsModels(indent:0)%

type Model =
%tsModelTypes(indent:2)%

export interface ContentTypes {
  [componentId: string]: Model
}
`
