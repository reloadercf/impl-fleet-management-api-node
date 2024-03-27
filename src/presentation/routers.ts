/* eslint-disable @typescript-eslint/no-extraneous-class */
import { Router } from 'express'

export class AppTaxiRoutes {
  static get routes (): Router {
    const router = Router()

    router.get('/api/taxi', (req, res) => {
      res.json([
        { id: 'sdf-12', hour: '10:10pm' },
        { id: 'lkj-19', hour: '11:11pm' }
      ])
    })
    return router
  }
}
