import { type Request, type Response } from 'express'

export class TaxiController {
  public getTaxis = (req: Request, res: Response) => {
    res.json([
      { id: 'sdf-12', hour: '10:10pm' },
      { id: 'lkj-19', hour: '11:11pm' }
    ])
  }
}
