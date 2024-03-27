import express from 'express'

interface Options {
  port: number
  public_path?: string
}

export class Server {
  private readonly app = express()
  private readonly port: number
  private readonly publicPath: string

  constructor (options: Options) {
    const { port, public_path = 'public' } = options
    this.port = port
    this.publicPath = public_path
  }

  async start () {
    // middlewares

    // Public Folder
    this.app.use(express.static(this.publicPath))

    this.app.listen(this.port, () => {
      console.log(`server running on port ${this.port}`)
    })
  }
}
