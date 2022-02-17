import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../page/Home';

describe('Testa tela inicial', () => {
  it('Testa se input está na tela', () => {
    render(<Home />);
    const inputTask = screen.getByRole('textbox');
    expect(inputTask).toBeDefined();
  });

  it('Testa se botão de envio de tarefa está na tela', () => {
    render(<Home />);
    const sendButton = screen.getByRole('button', {  name: /send task/i });
    expect(sendButton).toBeDefined();
  });
});
