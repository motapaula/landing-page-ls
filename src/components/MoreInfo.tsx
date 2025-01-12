import React from 'react';
import styled from 'styled-components';

const MoreInfo = () => {
  return (
    <section>
      <SignUpInfo>
        <Title>Como ter acesso ao Lacrei Saúde?</Title>
        <InstructionsList>
          <InstructionItem>
            <StepNumber>1</StepNumber>
            <StepContent>Cadastre-se em nosso site.</StepContent>
          </InstructionItem>
          <InstructionItem>
            <StepNumber>2</StepNumber>
            <StepContent>Confirme suas informações pessoais com nossa equipe.</StepContent>
          </InstructionItem>
          <InstructionItem>
            <StepNumber>3</StepNumber>
            <StepContent>Escolha a especialidade dos profissionais de saúde através da busca do nosso site.</StepContent>
          </InstructionItem>
          <InstructionItem>
            <StepNumber>4</StepNumber>
            <StepContent>Entre em contato com a pessoa profissional para marcar a consulta.</StepContent>
          </InstructionItem>
        </InstructionsList>
      </SignUpInfo>
    </section>
  );
};

const SignUpInfo = styled.section`
  background-color: #f9f3ff;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Mobile Small - até 360px */
  @media (max-width: 360px) {
    padding: 24px 16px;
    gap: 16px;
  }

  /* Mobile Medium - 375px a 414px */
  @media (min-width: 375px) and (max-width: 414px) {
    padding: 28px 24px;
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
    gap: 28px;
  }

  /* Desktop Medium - 1440px a 1920px */
  @media (min-width: 1440px) and (max-width: 1920px) {
    padding: 32px 120px;
    gap: 32px;
  }

  /* Desktop Large - 1920px */
  @media (min-width: 1920px) and (max-width: 2559px) {
    padding: 32px 162px;
    gap: 32px;
  }

  /* Desktop Ultra Wide - acima de 2560px */
  @media (min-width: 2560px) {
    padding: 40px 200px;
    gap: 40px;
  }
`;

const Title = styled.h2`
  color: #1f2937;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 1.625rem;
    margin-bottom: 0.875rem;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 1.75rem;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 2rem;
  }
`;

const InstructionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  /* Mobile Small */
  @media (max-width: 360px) {
    gap: 0.75rem;
    max-width: 100%;
    padding: 24px 16px;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 720px) {
    gap: 0.875rem;
    max-width: 100%;
    padding: 24px 16px;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    gap: 1rem;
    max-width: 550px;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    gap: 1rem;
    max-width: 600px;
  }
`;

const InstructionItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Mobile Small */
  @media (max-width: 360px) {
    padding: 0.75rem;
    gap: 0.75rem;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 720px) {
    padding: 0.875rem;
    gap: 0.875rem;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    padding: 1rem;
    gap: 1rem;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const StepNumber = styled.div`
  font-weight: bold;
  color: #018762;
  flex-shrink: 0;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 1.25rem;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 1.325rem;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 1.4rem;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 1.5rem;
  }
`;

const StepContent = styled.div`
  color: #4b5563;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 0.875rem;
    line-height: 1.4;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export default MoreInfo;