/* eslint-disable mocha/no-hooks-for-single-case */
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Testa updateTasks', function () {
  let response = {};
  let newResponse;
  
  before(async function () {
    try {
      response = await chai.request(app).post('/tasks').send({
        task: 'minha primeira tarefa',
      });

      const { body: { id } } = response;

      newResponse = await chai.request(app).put(`/tasks/${id}`).send(
        { task: 'testando update na nova tarefa' },
      );
    } catch (e) {
      console.log(e.message);
    }
  });

  it('Atualiza usuário no banco', function () {
    expect(newResponse).to.have.status(200);
    expect(newResponse.body).to.have.all.keys('id', 'task', 'date');
  });
});
