import { Router } from 'express'
import { TaxiController } from './taxiController'

export class TaxiRouter {
  static get routes (): Router {
    const router = Router()
    const taxiController = new TaxiController()
    router.get('/', taxiController.getTaxis)
    return router
  }
}
