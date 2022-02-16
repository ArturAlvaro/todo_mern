import PropTypes from 'prop-types';
import React from 'react';
// import { MdOutlineEditNote } from 'react-icons/md';
import { Ul, Li, Div } from './style';

// MdOutlineAutoDelete

const TodoList = ({ tasks }) => (
  <Ul>
    { tasks
      && tasks.map(({ _id: id, task, date }) => (
        <Li key={ id }>
          <p>{ task }</p>
          <p>{ date }</p>
          <Div>
            {/* <MdOutlineEditNote /> */}
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
