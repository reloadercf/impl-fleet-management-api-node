import { envs } from './config/envs'
import { AppTaxiRoutes } from './presentation/routers'
import { Server } from './presentation/server';

(async () => {
  main()
})()

function main () {
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppTaxiRoutes.routes
  })
  server.start()
}
