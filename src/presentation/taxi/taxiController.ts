import { type Request, type Response } from 'express'
import { prisma } from '../../data/postgres'

export class TaxiController {
  public getTaxis = async (req: Request, res: Response) => {
    const allTaxis = await prisma.taxis.findMany()
    res.json(allTaxis)
  }
}
