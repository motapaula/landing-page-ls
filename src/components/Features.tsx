import React from 'react';
import styled from 'styled-components';
import { MdDiversity1, MdMedicalInformation, MdOutlineShield } from "react-icons/md";

const Features = () => {
  return (
    <section>
      <FeaturesSection>
        <SectionTitle>Recursos Principais</SectionTitle>
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
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Mobile Small - até 360px */
  @media (max-width: 360px) {
    padding: 24px 16px 24px 16px;
   
    gap: 24px;
  }

  /* Mobile Medium - 375px a 414px */
  @media (min-width: 375px) and (max-width: 720px) {
    padding: 32px 24px;
    gap: 28px;
  }

  /* Mobile Large - 720px a 1366px */
  @media (min-width: 720px) and (max-width: 1366px) {
    padding: 40px 40px;
    gap: 32px;
  }

  /* Desktop Small - 1366px a 1440px */
  @media (min-width: 1366px) and (max-width: 1440px) {
    padding: 48px 80px;
    gap: 40px;
  }

  /* Desktop Medium - 1440px a 1920px */
  @media (min-width: 1440px) and (max-width: 1920px) {
    padding: 48px 120px;
    gap: 48px;
  }

  /* Desktop Large - 1920px */
  @media (min-width: 1920px) and (max-width: 2559px) {
    padding: 48px 162px;
    gap: 48px;
  }

  /* Desktop Ultra Wide - acima de 2560px */
  @media (min-width: 2560px) {
    padding: 64px 200px;
    gap: 56px;
  }
`;

const SectionTitle = styled.h2`
  color: #2d2d2d;
  text-align: center;
  
  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 24px;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 26px;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 28px;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 32px;
  }
`;

const FeatureCards = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  
  /* Mobile Small e Medium - até 7200px */
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  /* Mobile Large - 720px a 1366px */
  @media (min-width: 720px) and (max-width: 1366px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25rem;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f9f3ff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* Mobile Small */
  @media (max-width: 360px) {
    width: 100%;
    padding: 24px 16px;
    min-height: 240px;
  }

  /* Mobile Medium */
  @media (min-width: 414px) and (max-width: 720px) {
    width: 100%;
    padding: 24px 16px;
    min-height: 240px;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    width: calc(50% - 1.25rem);
    padding: 32px 24px;
    min-height: 280px;
  }

  /* Desktop Small */
  @media (min-width: 1366px) and (max-width: 1440px) {
    width: 320px;
    padding: 32px 24px;
    height: 288px;
  }

  /* Desktop Medium + */
  @media (min-width: 1440px) {
    width: 356px;
    padding: 32px 24px;
    height: 288px;
  }
`;

const Icon = styled.div`
  color: #7333b2;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 64px;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 720px) {
    font-size: 72px;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 80px;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 90px;
  }
`;

const FeatureTitle = styled.h3`
  font-weight: bold;
  color: #7333b2;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 1.25rem;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 1.3rem;
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

const FeatureDescription = styled.p`
  color: #2d2d2d;
  line-height: 1.5;

  /* Mobile Small e Medium */
  @media (max-width: 720px) {
    font-size: 14px;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 15px;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 16px;
  }
`;

export default Features;