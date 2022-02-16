import PropTypes from 'prop-types';
import React from 'react';
import { MdOutlineAutoDelete } from 'react-icons/md';
import { Ul, Li, Div } from './style';

// MdOutlineEditNote

const TodoList = ({ tasks, deleteTask }) => (
  <Ul>
    { tasks
      && tasks.map(({ _id: id, task, date }) => (
        <Li key={ id }>
          <p>{ task }</p>
          <p>{ date }</p>
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
