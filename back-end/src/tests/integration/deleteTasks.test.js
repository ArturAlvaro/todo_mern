const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../api/app');

describe('Testa delete de tarefas', function () {
  describe('Testa delete com sucesso', function () {
    let response = {};
    let newResponse = {};
    let missingTask = {};

    before(async function () {
      try {
        response = await chai.request(app).post('/tasks')
          .send({ task: 'tarefa a ser excluída' });

        const { body: { id } } = response;

        newResponse = await chai.request(app).delete(`/tasks/${id}`);
        missingTask = await chai.request(app).delete('/tasks/algo');
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Verifica rota com id errado', function () {
      expect(missingTask).to.have.status(500);
      expect(missingTask.body.err.message).to.be.equal('task not found');
    });

    it('Retorna status 204', function () {
      expect(newResponse).to.have.status(204);
    });
  });
});
