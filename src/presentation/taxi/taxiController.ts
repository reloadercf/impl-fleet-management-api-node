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
          plate: String(req.query.plate)
        }
      })
      return res.json(getTaxiByPlate)
    }
  }

  public getTrajectories = async (req: Request, res: Response) => { // con fecha
    if (Object.keys(req.query).length === 0) {
      const allTrajectories = await prisma.trajectories.findMany()
      return res.json(allTrajectories)
    }
    if (req.query.taxi && req.query.date) {
      const queryDate = new Date(String(req.query.date))
      queryDate.setDate(queryDate.getDate() + 1)
      const subtractDay = new Date(String(req.query.date))
      subtractDay.setDate(queryDate.getDate() - 1)
      console.log(queryDate, 'and', subtractDay)
      const getTrajectoriesFiltered = await prisma.trajectories.findMany({
        where: {
          taxi_id: +req.query.taxi,
          AND: [
            { date: { gte: subtractDay } },
            { date: { lte: queryDate } }
          ]
        }
      })
      console.log(getTrajectoriesFiltered)
      return res.json(getTrajectoriesFiltered)
    }
    res.status(404).send('bat request')
  }

  public getLastLocationTaxis = async (req: Request, res: Response) => {
    if (Object.keys(req.query).length === 0) {
      const getLastLocation = await prisma.taxis.findMany({
        relationLoadStrategy: 'join',
        include: {
          trajectories: {
            orderBy: {
              date: 'desc'
            },
            take: 1
          }
        }
      })
      return res.json(getLastLocation)
    }
  }
}
