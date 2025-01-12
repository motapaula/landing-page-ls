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
  );
};

const CallToActionSection = styled.section`
  background-color: #d9c4ee;
  color: #ffffff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Mobile Small - até 360px */
  @media (max-width: 360px) {
    padding: 24px 16px 24px 16px;
    gap: 16px;
  }

  /* Mobile Medium - 375px a 720px */
  @media (min-width: 375px) and (max-width: 720px) {
    padding: 28px 24px 28px 24px;
    gap: 20px;
  }

  /* Mobile Large - 720px a 1366px */
  @media (min-width: 720px) and (max-width: 1366px) {
    padding: 32px 40px;
    gap: 24px;
  }

  /* Desktop Small - 1366px a 1440px */
  @media (min-width: 1366px) and (max-width: 1440px) {
    padding: 32px 80px;
    gap: 24px;
  }

  /* Desktop Medium - 1440px a 1920px */
  @media (min-width: 1440px) and (max-width: 1920px) {
    padding: 32px 120px;
    gap: 24px;
  }

  /* Desktop Large - 1920px */
  @media (min-width: 1920px) and (max-width: 2559px) {
    padding: 32px 162px;
    gap: 24px;
  }

  /* Desktop Ultra Wide - acima de 2560px */
  @media (min-width: 2560px) {
    padding: 40px 200px;
    gap: 32px;
  }
`;

const CallToActionTitle = styled.h2`
  font-weight: bold;
  color: #131313;
  margin-bottom: 0.5rem;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 1.75rem;
    margin-bottom: 0.375rem;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 1.875rem;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 2rem;
  }
`;

const CallToActionDescription = styled.p`
  color: #2d2d2d;
  max-width: 600px;
  margin: 0 auto;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 0.9375rem;
    margin-bottom: 0.75rem;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 0.975rem;
    margin-bottom: 1rem;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  font-family: 'Nunito', sans-serif;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  
  /* Mobile Small e Medium - até 414px */
  @media (max-width: 414px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    max-width: 300px;
  }

  /* Mobile Large - até 720px */
  @media (min-width: 415px) and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 350px;
  }

  /* Desktop Small e acima */
  @media (min-width: 721px) {
    flex-direction: row;
    gap: 1rem;
  }
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

  /* Mobile Small e Medium */
  @media (max-width: 414px) {
    width: 100%;
    padding: 0.625rem 1.25rem;
    font-size: 0.9375rem;
  }

  /* Mobile Large */
  @media (min-width: 415px) and (max-width: 720px) {
    width: 100%;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

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

export default CallToAction;