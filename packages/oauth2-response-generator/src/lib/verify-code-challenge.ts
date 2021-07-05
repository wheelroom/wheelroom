import { hextob64u, KJUR } from 'jsrsasign'

export type CodeChallengeMethod = 'S256' | 'plain'

export interface VerifyCodeChallenge {
  codeChallenge: string
  codeVerifier: string
  method: CodeChallengeMethod
}

const verifyS256 = ({ codeChallenge, codeVerifier }: VerifyCodeChallenge) => {
  const message = new KJUR.crypto.MessageDigest({
    alg: 'sha256',
    prov: 'cryptojs',
  })
  message.updateString(codeVerifier)
  return codeChallenge === hextob64u(<any>message.digest())
}

const verifyPlain = ({ codeChallenge, codeVerifier }: VerifyCodeChallenge) => {
  return codeChallenge === codeVerifier
}

export const verifyCodeChallenge = ({
  method,
  codeChallenge,
  codeVerifier,
}: VerifyCodeChallenge) => {
  switch (method) {
    case 'S256':
      return verifyS256({ codeChallenge, codeVerifier, method })
    case 'plain':
      return verifyPlain({ codeChallenge, codeVerifier, method })

    default:
      return false
  }
}
