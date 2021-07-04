export interface FinalizeAuthorizeResponse {
  req: Express.Request
}

export const finalizeAuthorizeResponse = ({
  req,
}: FinalizeAuthorizeResponse) => {
  console.log('finalizeAuthorizeResponse, to Be Implemented', req)
}
