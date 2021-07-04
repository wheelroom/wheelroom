import { hextob64u, KJUR } from 'jsrsasign'

export type CodeChallengeMethod = 'S256' | 'plain'

export interface VerifyCodeChallenge {
  codeChallenge: string
  codeVerifier: string
  method: CodeChallengeMethod
}

export const verifyCodeChallenge = ({
  method,
  codeChallenge,
  codeVerifier,
}: VerifyCodeChallenge) => {
  switch (method) {
    case 'S256':
      // eslint-disable-next-line no-case-declarations
      const message = new KJUR.crypto.MessageDigest({
        alg: 'sha256',
        prov: 'cryptojs',
      })
      message.updateString(codeVerifier)
      return codeChallenge === hextob64u(<any>message.digest())

    case 'plain':
      return codeChallenge === codeVerifier

    default:
      return false
      break
  }
}
