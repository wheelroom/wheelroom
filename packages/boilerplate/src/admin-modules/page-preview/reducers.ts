import { State, Action } from "./types"

export const pagePreviewReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'GET':
      return { adminModuleState: {} }
    default:
      throw new Error()
  }
}
