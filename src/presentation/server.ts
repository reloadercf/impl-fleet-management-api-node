import express, { type Router } from 'express'

interface Options {
  port: number
  public_path?: string
  routes: Router
}

export class Server {
  private readonly app = express()
  private readonly port: number
  private readonly publicPath: string
  private readonly routes: Router

  constructor (options: Options) {
    const { port, public_path = 'public', routes } = options
    this.port = port
    this.publicPath = public_path
    this.routes = routes
  }

  async start () {
    // middlewares

    // routes
    this.app.use(this.routes)

    // Public Folder
    this.app.use(express.static(this.publicPath))

    this.app.listen(this.port, () => {
      console.log(`server running on port ${this.port}`)
    })
  }
}
