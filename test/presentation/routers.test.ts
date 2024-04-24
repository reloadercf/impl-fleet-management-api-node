import request from 'supertest';
import { mockServer } from '../mockServer';

describe('API testing',()=>{
    // Arrange 
    beforeAll(async()=>{
        await mockServer.start();
    })

    it('Should have status 200 on enpoint get on api/taxi', async()=>{
        const temporalPath = '/api/taxi'
        await request(mockServer.app).get(temporalPath).expect(200)
    })
    
    it('Should have status 200 on enpoint get on api/taxi/trajectories', async()=>{
        const temporalPath = '/api/taxi/trajectories'
        await request(mockServer.app).get(temporalPath).expect(200)
    })
})