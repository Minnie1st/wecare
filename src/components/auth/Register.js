import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const AuthContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--text-secondary);
  border-radius: 4px;
  font-size: 16px;
  color: var(--text-dark);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    background-color: rgba(46, 125, 50, 0.05);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: var(--text-light);
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;

const AuthSwitch = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
`;

const AuthLink = styled.a`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

function Register() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Register attempt with:', { email, password, confirmPassword });
  };
  
  return (
    <AuthContainer>
      <AuthTitle>{t('auth.register')}</AuthTitle>
      <AuthForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label>{t('auth.email')}</Label>
          <Input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t('auth.password')}</Label>
          <Input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t('auth.confirmPassword')}</Label>
          <Input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </FormGroup>
        
        <SubmitButton type="submit">{t('auth.signUp')}</SubmitButton>
      </AuthForm>
      
      <AuthSwitch>
        {t('auth.haveAccount')}
        <AuthLink href="/login">{t('auth.signIn')}</AuthLink>
      </AuthSwitch>
    </AuthContainer>
  );
}

export default Register;