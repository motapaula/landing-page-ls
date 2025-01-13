import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';


describe('Navbar', () => {
  test('deve renderizar todos os links e o botão de login', () => {
    render(<Navbar />);
    
    // Verifica se os links principais estão presentes
    expect(screen.getByText('Quem Somos')).toBeInTheDocument();
    expect(screen.getByText('Ajuda')).toBeInTheDocument();
    expect(screen.getByText('Perguntas Frequentes')).toBeInTheDocument();
    
    // Verifica se o botão de login está presente
    expect(screen.getByText('Entrar')).toBeInTheDocument();
    
    // Verifica se o logo está presente
    expect(screen.getByAltText('Logomarca da Lacrei Saúde')).toBeInTheDocument();
  });

  // Testes de Interação
  describe('Interações do Usuário', () => {
    test('deve aplicar estilo hover no botão de login', () => {
      render(<Navbar />);
      const loginButton = screen.getByText('Entrar');
      
      fireEvent.mouseEnter(loginButton);
      expect(loginButton).toHaveStyleRule('background-color', '#007756', {
        modifier: ':hover'
      });
    });

    test('deve aplicar estilo pressed no botão de login', () => {
      render(<Navbar />);
      const loginButton = screen.getByText('Entrar');
      
      fireEvent.mouseDown(loginButton);
      expect(loginButton).toHaveStyleRule('background-color', '#014c37', {
        modifier: ':pressed'
      });
    });

    test('deve aplicar underline nos links ao hover', () => {
      render(<Navbar />);
      const link = screen.getByText('Quem Somos');
      
      fireEvent.mouseEnter(link);
      expect(link).toHaveStyleRule('text-decoration', 'underline', {
        modifier: ':hover'
      });
    });
  });
});