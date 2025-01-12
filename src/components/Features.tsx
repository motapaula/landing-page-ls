import React from 'react'
import styled from 'styled-components';
import { MdDiversity1, MdMedicalInformation, MdOutlineShield } from "react-icons/md";

const Features = () => {
  return (
    <section>
      <FeaturesSection>
      <h2>Recursos Principais</h2>
      <FeatureCards>
        <FeatureCard>
          <Icon><MdDiversity1 /></Icon>
          <FeatureTitle>Inclusividade</FeatureTitle>
          <FeatureDescription>
            A Equipe do Lacrei está comprometida com acessibilidade e inclusividade.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <Icon><MdMedicalInformation /></Icon>
          <FeatureTitle>Profissionais Especializades</FeatureTitle>
          <FeatureDescription>
            As pessoas profissionais cadastradas são sensíveis às demandas da comunidade LGBTQIAP+.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <Icon><MdOutlineShield /></Icon>
          <FeatureTitle>Rigorosa privacidade de dados</FeatureTitle>
          <FeatureDescription>
            Proteção avançada para garantir a integridade dos seus dados.
          </FeatureDescription>
        </FeatureCard>
      </FeatureCards>
    </FeaturesSection>
     </section>
  );
};

const FeaturesSection = styled.section`
  padding: 2rem 1.5rem;
  background-color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 24px 162px 48px 162px;
`;

const FeatureCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 24px;
  font-size: 16px;
  width: 356px;
  height: 288px;
  padding: 32px 24px 32px 24px;
  vertical-gap-between-items: 8px 16px 32px;
  background-color: #f9f3ff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 20rem;
`;

const Icon = styled.div`
  font-size: 90px;
  color: #7333b2;
  margin-bottom: 8px;
  align-items: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 24px;
  color: #7333b2;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #2d2d2d;
  line-height: 1.5rem;
`;


export default Features