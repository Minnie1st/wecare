import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import UserTypeSelector from './UserTypeSelector';

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
  
  return (
    <AuthContainer>
      <AuthTitle>{t('auth.register')}</AuthTitle>
      <UserTypeSelector />
    </AuthContainer>
  );
}

export default Register;