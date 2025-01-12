import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <Section>
      <HeroContent>
        <Title>Cuidado com a saúde para todes!</Title>
        <Description>
          Nós te ajudamos a encontrar atendimento de saúde qualificado para pessoas LGBTQIAPN+, priorizando experiências com inclusividade e respeito.
        </Description>
        <ButtonGroup>
        <Link href="/cadastro" passHref>
          <Button className="primary">Junte-se à comunidade!</Button>
        </Link>
        </ButtonGroup>
      </HeroContent>

      <HeroImage>
        <img
          src="hero-image.jpg"
          alt="Imagem de um estetoscópio sobre a bandeira LGBTQIAP+."
        />
      </HeroImage>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: #dff2ed;
  
  /* Mobile Small - até 360px */
  @media (max-width: 360px) {
    flex-direction: column-reverse;
    padding: 24px 16px;
    gap: 24px;
  }

  /* Mobile Medium - 375px a 720px */
  @media (min-width: 375px) and (max-width: 720px) {
    flex-direction: column-reverse;
    padding: 32px 24px;
    gap: 32px;
  }

  /* Mobile Large - 720px a 1366px */
  @media (min-width: 720px) and (max-width: 1366px) {
    flex-direction: row;
    padding: 40px 40px;
    gap: 40px;
    align-items: center;
  }

  /* Desktop Small - 1366px a 1440px */
  @media (min-width: 1366px) and (max-width: 1440px) {
    padding: 48px 80px;
    gap: 60px;
    align-items: center;
  }

  /* Desktop Medium - 1440px a 1920px */
  @media (min-width: 1440px) and (max-width: 1920px) {
    padding: 48px 120px;
    gap: 80px;
    align-items: center;
  }

  /* Desktop Large - 1920px */
  @media (min-width: 1920px) and (max-width: 2559px) {
    padding: 48px 162px;
    gap: 100px;
    align-items: center;
  }

  /* Desktop Ultra Wide - acima de 2560px */
  @media (min-width: 2560px) {
    padding: 64px 200px;
    gap: 120px;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  /* Mobile Small */
  @media (max-width: 360px) {
    max-width: 100%;
    text-align: center;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    max-width: 100%;
    text-align: center;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    max-width: 50%;
    text-align: left;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    max-width: 600px;
    text-align: left;
  }
`;

const Title = styled.h1`
  color: #018762;
  margin-bottom: 1rem;
  font-weight: bold;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 32px;
    line-height: 1.2;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 36px;
    line-height: 1.2;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 40px;
    line-height: 1.3;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 48px;
    line-height: 1.3;
  }
`;

const Description = styled.p`
  color: #2d2d2d;
  margin-bottom: 1.5rem;

  /* Mobile Small */
  @media (max-width: 360px) {
    font-size: 16px;
    line-height: 1.5;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 414px) {
    font-size: 18px;
    line-height: 1.5;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    font-size: 20px;
    line-height: 1.6;
  }

  /* Desktop + */
  @media (min-width: 1366px) {
    font-size: 24px;
    line-height: 1.6;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  /* Mobile Small e Medium */
  @media (max-width: 414px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  border-radius: 0.375rem;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  /* Mobile Small */
  @media (max-width: 360px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.875rem;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 720px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  /* Mobile Large + */
  @media (min-width: 720px) {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  &.primary {
    background-color: #018762;
    color: white;

    &:hover {
      background-color: #007756;
    }

    &:active {
      background-color: #014c37;
    }
  }

  &.secondary {
    background-color: #e5e7eb;
    color: #1f2937;

    &:hover {
      background-color: #d1d5db;
    }
  }
`;

const HeroImage = styled.div`
  /* Mobile Small */
  @media (max-width: 360px) {
    display: none;
  }

  /* Mobile Medium */
  @media (min-width: 375px) and (max-width: 720px) {
    display: none;
  }

  /* Mobile Large */
  @media (min-width: 720px) and (max-width: 1366px) {
    width: 50%;
  }

  /* Desktop Small */
  @media (min-width: 1366px) {
    width: 100%;
    max-width: 700px;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    /* Mobile Small e Medium */
    @media (max-width: 414px) {
      border-radius: 0.375rem;
    }
  }
`;

export default HeroSection;