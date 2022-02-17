import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineAutoDelete } from 'react-icons/md';
import { Ul, Li, Div, Button } from './style';

const TodoList = ({ tasks, deleteTask, changeStatus }) => (
  <Ul>
    { tasks
      && tasks.map(({ _id: id, task, date, status }) => (
        <Li key={ id }>
          <p>{ task }</p>
          <p>{ date }</p>
          <Div>
            <Button
              disabled={ status === 'Pendente' }
              type="button"
              onClick={ () => changeStatus(id, task, 'Pendente') }
            >
              Pendente
            </Button>
          </Div>
          <Div>
            <Button
              disabled={ status === 'Em andamento' }
              type="button"
              onClick={ () => changeStatus(id, task, 'Em andamento') }
            >
              Em andamento
            </Button>
          </Div>
          <Div>
            <Button
              disabled={ status === 'Pronto' }
              type="button"
              onClick={ () => changeStatus(id, task, 'Pronto') }
            >
              Pronto
            </Button>
          </Div>
          <Div>
            <MdOutlineAutoDelete onClick={ () => deleteTask(id) } />
          </Div>
        </Li>
      ))}
  </Ul>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  map: PropTypes.func,
}.isRequired;

export default TodoList;
