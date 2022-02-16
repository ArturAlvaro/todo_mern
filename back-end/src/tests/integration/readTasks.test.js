const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Testa leitura de todas as tasks', function () {
  describe('Testa GET /tasks com sucesso', function () {
    let response = {};

    before(async function () {
      response = await chai.request(app).get('/tasks');
    });

    it('Retorna status 200', function () {
      expect(response).to.have.status(200);
    });

    it('Retorna array de tarefas', function () {
      expect(response.body).to.be.an('array');
    });
  });
});
