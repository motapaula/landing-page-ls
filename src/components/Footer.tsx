'use client'

import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterSection>
        <FooterColumn>
          <FooterTitle><img src="logo-footer.svg" alt="logomarca da Lacrei Saude" width={170} height={48}/></FooterTitle>
          <p>Cuidado de qualidade para a comunidade LGBTQIAP+.</p>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Links Úteis</FooterTitle>
          <FooterLinks>
            <FooterLink>Sobre nós</FooterLink>
            <FooterLink>Serviços</FooterLink>
            <FooterLink>Contato</FooterLink>
            <FooterLink>Blog</FooterLink>
          </FooterLinks>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Ajuda</FooterTitle>
          <FooterLinks>
            <FooterLink>FAQ</FooterLink>
            <FooterLink>Suporte</FooterLink>
            <FooterLink>Política de Privacidade</FooterLink>
            <FooterLink>Termos de Uso</FooterLink>
          </FooterLinks>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Redes Sociais</FooterTitle>
          <SocialNetwork>
            <SocialNetworkIcon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fontWeight="400" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></SocialNetworkIcon>
            <SocialNetworkIcon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fontWeight="400" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></SocialNetworkIcon>
            <SocialNetworkIcon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fontWeight="400" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg></SocialNetworkIcon>
            <SocialNetworkIcon><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fontWeight="400" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg></SocialNetworkIcon>
          </SocialNetwork>
        </FooterColumn>
      </FooterSection>
  );
};

const FooterSection = styled.footer`
  padding: 32px 162px 32px 162px;
  background-color: #fffff;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 150px;
  color: #2d2d2d;
`;

const FooterTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #131313;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #2d2d2d;
`;

const FooterLink = styled.li`
  font-size: 1rem;
  color: #2d2d2d;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const SocialNetwork = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const SocialNetworkIcon = styled.ul`
  list-style: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #018762;
`;

export default Footer;