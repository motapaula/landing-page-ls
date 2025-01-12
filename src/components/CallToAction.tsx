import React from 'react';
import styled from 'styled-components';

const CallToAction = () => {
  return (
    <CallToActionSection>
    <CallToActionTitle>Comece agora mesmo!</CallToActionTitle>
    <CallToActionDescription>
      Aproveite todos os benefícios ao se cadastrar na nossa plataforma.
    </CallToActionDescription>
    <ButtonsContainer>
      <Button>Cadastrar-se como Paciente</Button>
      <Button>Cadastrar-se como Profissional</Button>
    </ButtonsContainer>
  </CallToActionSection>
  )
}

const CallToActionSection = styled.section`
  padding: 2rem;
  background-color: #d9c4ee;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const CallToActionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #131313;
`;

const CallToActionDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #2d2d2d;
`;

const ButtonsContainer = styled.div`
  display: flex;
  font-family: 'Nunito', sans-serif;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  color: #ffffff;
  background-color: #018762;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007756;
  }

  &:active {
      background-color: #014c37;
    }

  &:nth-child(2) {
    background-color: #018762;

    &:hover {
      background-color: #007756;
    }

    &:active {
      background-color: #014c37;
    }
  }
`;

export default CallToAction