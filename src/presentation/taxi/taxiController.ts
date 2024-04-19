/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Request, type Response } from 'express'
import { prisma } from '../../data/postgres'

export class TaxiController {
  public getTaxis = async (req: Request, res: Response) => {
    if (Object.keys(req.query).length === 0) {
      const allTaxis = await prisma.taxis.findMany()
      return res.json(allTaxis)
    }
    if (req.query.id) {
      const getTaxiById = await prisma.taxis.findUnique({
        where: {
          id: +req.query.id
        }
      })
      return res.json(getTaxiById)
    }
    if (req.query.plate) {
      const getTaxiByPlate = await prisma.taxis.findMany({
        where: {
          plate: `${req.query.plate}`
        }
      })
      return res.json(getTaxiByPlate)
    }
  }
}
