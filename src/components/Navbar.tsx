'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components';

interface LinksContainerProps {
  isOpen: boolean;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavBarContainer>
      <Logo>
        <Link href="/">
          <Image src="logo-horizontal.svg" alt="Logomarca da Lacrei Saúde" width={187} height={24} />
        </Link>
      </Logo>
      <LinksContainer isOpen={isMenuOpen}>
        <Link href="/" className='navbar-link'>
          Quem Somos
        </Link>
        <Link href="/ajuda" className='navbar-link'>
          Ajuda
        </Link>
        <Link href="/perguntasFrequentes" className='navbar-link'>
          Perguntas Frequentes
        </Link>
      </LinksContainer>
      <LoginButton>Entrar</LoginButton>
      <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </MobileMenuButton>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 162px;
  background-color: #ffffff;
  color: #ffffff;

  @media (max-width: 360px) {
    padding: 16px;
    flex-wrap: wrap;
  }

  @media (min-width: 375px) and (max-width: 414px) {
    padding: 16px;
    flex-wrap: wrap;
  }

  @media (min-width: 720px) and (max-width: 1366px) {
    padding: 20px 40px;
  }

  @media (min-width: 1366px) and (max-width: 1440px) {
    padding: 24px 80px;
  }

  @media (min-width: 1440px) and (max-width: 1920px) {
    padding: 24px 120px;
  }

  @media (min-width: 1920px) and (max-width: 2559px) {
    padding: 24px 162px;
  }

  @media (min-width: 2560px) {
    padding: 24px 200px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    max-height: 50px;
  }

  @media (max-width: 414px) {
    img {
      width: 100px;
      height: auto;
    }
  }
`;

const LinksContainer = styled.div<LinksContainerProps>`
  display: flex;
  gap: 2rem;

  a {
    font-size: 1rem;
    color: #018762;
    text-decoration: none;
    transition: color 0.3s;
    font-weight: 600;

    &:hover {
      color: #007756;
      text-decoration: underline;
      text-underline-offset: 8px;
    }
  }

  @media (max-width: 720px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    width: 100%;
    align-items: center;
    gap: 1rem;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #018762;
  font-family: 'Nunito', sans-serif;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007756;
  }

  &:pressed {
    background-color: #014c37;
  }

  @media (max-width: 720px) {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    width: 30px;
    height: 3px;
    background: #018762;
    border-radius: 10px;
    transition: all 0.3s linear;
  }

  @media (max-width: 720px) {
    display: flex;
  }
`;

export default Navbar;