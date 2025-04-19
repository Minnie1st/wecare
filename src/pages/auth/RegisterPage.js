import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import UserTypeSelector from '../../components/auth/UserTypeSelector';

const RegisterContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;

const RegisterTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: var(--primary-color);
`;

function RegisterPage() {
  const { t } = useTranslation();
  
  return (
    <RegisterContainer>
      <RegisterTitle>{t('auth.register')}</RegisterTitle>
      <UserTypeSelector />
    </RegisterContainer>
  );
}

export default RegisterPage;