import { Server } from '../src/presentation/server';
import { AppTaxiRoutes } from '../src/presentation/routers';



export const mockServer = new Server({
    port:3000,
    routes: AppTaxiRoutes.routes,
})