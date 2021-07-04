import fs from 'fs'
import https from 'https'
import Express from 'express'

interface HttpServerFactory {
  app: Express.Application
  port?: number
}

type Credentials = Record<string, string>
type NodeEnv = 'development' | 'production' | 'test' | 'development-ssl'

export const httpServerFactory = ({ port, app }: HttpServerFactory) => ({
  app,
  credentials: undefined as Credentials | undefined,
  isDevelopment: process.env.NODE_ENV === 'development',
  isDevelopmentSsl: <NodeEnv>process.env.NODE_ENV === 'development-ssl',
  isProduction: !process.env.NODE_ENV || process.env.NODE_ENV === 'production',
  name: 'unknown',

  port: port || process.env.PORT || 8080,
  protocol: undefined as string | undefined,
  start() {
    try {
      const privateKey = fs.readFileSync('ssl-keys/server.key', 'utf8')
      const certificate = fs.readFileSync('ssl-keys/server.cert', 'utf8')
      this.credentials = { key: privateKey, cert: certificate }
    } catch (e) {
      if (this.isDevelopmentSsl) {
        console.log(`SSL keys not present, cannot start
-> ssl-keys/server.cert
-> ssl-keysserver.key`)
        process.exit(0)
      }
    }

    if (this.isProduction) {
      this.name = 'Production server'
      this.protocol = 'http'
      this.app.listen(this.port)
    }

    if (this.isDevelopment) {
      this.name = 'Development server'
      this.protocol = 'http'
      this.app.listen(this.port)
    }

    if (this.isDevelopmentSsl && this.credentials) {
      this.protocol = 'https'
      this.name = 'Development SSL server'
      const httpsServer = https.createServer(this.credentials, this.app)
      httpsServer.listen(this.port)
    }
    if (this.protocol) {
      console.log(
        `Running ${this.name} at: ${this.protocol}://localhost:${this.port}`
      )
    } else {
      console.log(`Could NOT start server (NODE_ENV=${process.env.NODE_ENV})`)
    }
  },
})
