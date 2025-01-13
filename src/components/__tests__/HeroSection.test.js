import { render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import HeroSection from '../HeroSection';

// Verificação do botão principal da Hero Section

describe('HeroSection Button', () => {
  test('verifica se o botão principal está renderizado e se possui a classe Primary', () => {
    render(<HeroSection />);
    const button = screen.getByRole('button', { name: /Junte-se à comunidade!/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('primary');
  });
});

// Verificação se o botão principal da Hero section redireciona para a página 'Cadastro'
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));
  
  describe('Navegação da HeroSection', () => {
    test('o botão redireciona para /cadastro', () => {
      const push = jest.fn();
      useRouter.mockReturnValue({ push });
      
      render(<HeroSection />);
      const button = screen.getByRole('button', { name: /Junte-se à comunidade!/i });
      button.click();
      
      expect(push).toHaveBeenCalledWith('/cadastro');
    });
  });
