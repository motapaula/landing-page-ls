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
  padding: 32px 162px 32px 162px;
  background-color: #f9f3ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  text-align: center;
  margin-bottom: 1rem;
`;

const InstructionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InstructionItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StepNumber = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #018762;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  font-size: 1rem;
  color: #4b5563;
`;

export default MoreInfo