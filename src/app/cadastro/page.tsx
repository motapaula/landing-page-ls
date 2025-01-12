'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

const HelpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Cadastro realizado com sucesso!');
    setFormData({ name: '', email: '', phoneNumber: '' });
  };

  return (
    <HelpContainer>
      <Title>Cadastro</Title>
      <Description>
        Junte-se à nossa comunidade para ter acesso a profissionais especializados!
      </Description>
      <ContactForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome social completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="phoneNumber">Telefone</Label>
          <TextArea
            id="phoneNumber"
            name="phoneNumber"
            placeholder="digite seu telefone com DDD"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Solicitar Cadastro</SubmitButton>
      </ContactForm>
    </HelpContainer>
  );
};

const HelpContainer = styled.div`
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
  margin-bottom: 1rem;

  @media (min-width: 720px) {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #2d2d2d;
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (min-width: 720px) {
    font-size: 1.2rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #2d2d2d;
  font-family: 'Nunito', sans-serif;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-family: 'Nunito', sans-serif;

  &:focus {
    outline: none;
    border-color: #018762;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-family: 'Nunito', sans-serif;

  &:focus {
    outline: none;
    border-color: #018762;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
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
`;

export default HelpPage;
