import { Router } from 'express'
import { TaxiRouter } from './taxi/taxiRouter'

export class AppTaxiRoutes {
  static get routes (): Router {
    const router = Router()

    router.use('/api/taxi', TaxiRouter.routes)
    return router
  }
}
