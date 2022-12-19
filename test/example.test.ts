import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app, { server } from '../src';

chai.use(chaiHttp);

describe('Example test', () => {
    it('should return a 200 status code', async () => {
        const res = await chai.request(app).get('/');
        server.close();
        expect(res.status).to.equal(200);
    });

    it('should pass', () => {
        expect(true).to.be.true;
    });
});
