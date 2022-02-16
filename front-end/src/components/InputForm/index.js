import React from 'react';
import TodoList from '../TodoList';
import useSendTask from '../../hooks/useSendTask';
import { Input, Label, Button, Section } from './style';

const InputForm = () => {
  const { handleChange, task, sendTask, allTasks } = useSendTask();

  return (
    <Section>
      <Label htmlFor="todoForm">
        <Input
          id="todoForm"
          placeholder="define todo"
          value={ task }
          onChange={ ({ target }) => handleChange(target) }
        />
      </Label>
      <Button type="button" onClick={ () => sendTask(task) }>
        send task
      </Button>
      <TodoList tasks={ allTasks } />
    </Section>
  );
};

export default InputForm;
