/* eslint-disable mocha/no-hooks-for-single-case */
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Testa criação de task', function () {
  describe('Quando a tarefa é vazia', function () {
    let response = {};

    before(async function () {
      try {
        response = await chai.request(app).post('/tasks').send({
          task: '',
        });
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Retorna a mensagem de erro correta', function () {
      expect(response).to.have.status(500);
      expect(response.body.err.message).to.be.equal('"task" is not allowed to be empty');
    });
  });

  describe('Quando as entradas são válidas', function () {
    let response = {};

    before(async function () {
      try {
        response = await chai.request(app).post('/tasks').send({
          task: 'minha primeira tarefa',
        });
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Retorna a mensagem correta', function () {
      expect(response).to.have.status(201);
      expect(response.body).to.have.all.keys('id', 'task', 'date', 'status');
    });
  });
});
