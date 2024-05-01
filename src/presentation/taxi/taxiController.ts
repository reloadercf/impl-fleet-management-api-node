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

  public getTrajectories = async (req: Request, res: Response) => {
    if (Object.keys(req.query).length === 0) {
      const allTrajectories = await prisma.trajectories.findMany()
      return res.json(allTrajectories)
    }
    if (req.query.taxi) {
      const getTrajectoriesByTaxi = await prisma.trajectories.findMany({
        where: {
          taxi_id: +req.query.taxi
        }
      })
      return res.json(getTrajectoriesByTaxi)
    }
    if (req.query.date) {
      const getTrajectoriesByDate = await prisma.trajectories.findMany({
        where: {
          date: String(req.query.date)
        }
      })
      return res.json(getTrajectoriesByDate)
    }
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
