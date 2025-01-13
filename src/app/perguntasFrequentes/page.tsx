'use client';

import React from 'react';
import styled from 'styled-components';

const perguntasFrequentes: React.FC = () => {
  return (
    <FAQContainer>
      <Title>Perguntas Frequentes</Title>
      <FAQList>
        <FAQItem>
          <Pergunta>O que é a Lacrei Saúde?</Pergunta>
          <Resposta>
            A Lacrei Saúde é uma plataforma dedicada a oferecer cuidado de qualidade para a comunidade LGBTQIAP+.
          </Resposta>
        </FAQItem>
        <FAQItem>
          <Pergunta>Como posso me cadastrar?</Pergunta>
          <Resposta>
            Você pode se cadastrar clicando no botão 'Entrar' no canto superior direito da página inicial.
          </Resposta>
        </FAQItem>
        <FAQItem>
          <Pergunta>Quais serviços são oferecidos?</Pergunta>
          <Resposta>
            Oferecemos uma ampla gama de serviços de saúde e bem-estar personalizados para as necessidades da comunidade LGBTQIAP+.
          </Resposta>
        </FAQItem>
        <FAQItem>
          <Pergunta>Posso entrar em contato para tirar dúvidas?</Pergunta>
          <Resposta>
            Claro! Você pode nos contatar pela seção 'Ajuda' no menu principal.
          </Resposta>
        </FAQItem>
      </FAQList>
    </FAQContainer>
  );
};

const FAQContainer = styled.div`
  padding: 32px 16px;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 720px) {
    padding: 32px 64px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #131313;
  margin-bottom: 2rem;

  @media (min-width: 720px) {
    font-size: 2.5rem;
  }
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FAQItem = styled.div``;

const Pergunta = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #2d2d2d;
  margin-bottom: 0.5rem;

  @media (min-width: 720px) {
    font-size: 1.5rem;
  }
`;

const Resposta = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.6;

  @media (min-width: 720px) {
    font-size: 1.1rem;
  }
`;

export default perguntasFrequentes;
