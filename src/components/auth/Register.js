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