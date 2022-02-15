import React from 'react';
import { Input, Label, Button, Section } from './style';

const InputForm = () => (
  <Section>
    <Label htmlFor="todoForm">
      <Input id="todoForm" placeholder="define todo" />
    </Label>
    <Button type="button" onClick={ () => sendTask(todo) }>
      send task
    </Button>
  </Section>
);

export default InputForm;
