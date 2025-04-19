import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SelectorContainer = styled.div`
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SelectorTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: var(--primary-color);
`;

const UserTypeOptions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 20px;
  
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const UserTypeCard = styled(Link)`
  flex: 1;
  padding: 25px 20px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &.client {
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    
    &:hover {
      background-color: var(--primary-color);
      color: var(--text-light);
    }
  }
  
  &.provider {
    border: 2px solid var(--provider-color, #4caf50);
    color: var(--provider-color, #4caf50);
    
    &:hover {
      background-color: var(--provider-color, #4caf50);
      color: var(--text-light);
    }
  }
`;

const UserTypeIcon = styled.div`
  font-size: 40px;
  margin-bottom: 15px;
`;

const UserTypeLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const UserTypeDescription = styled.div`
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.8;
`;

const LoginPrompt = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: var(--text-secondary);
`;

const LoginLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

function UserTypeSelector() {
  const { t } = useTranslation();
  
  return (
    <SelectorContainer>
      <SelectorTitle>{t('auth.selectUserType')}</SelectorTitle>
      
      <UserTypeOptions>
        <UserTypeCard to="/client/register" className="client">
          <UserTypeIcon>👤</UserTypeIcon>
          <UserTypeLabel>{t('auth.clientType')}</UserTypeLabel>
          <UserTypeDescription>{t('auth.clientTypeDesc')}</UserTypeDescription>
        </UserTypeCard>
        
        <UserTypeCard to="/provider/register" className="provider">
          <UserTypeIcon>🛠️</UserTypeIcon>
          <UserTypeLabel>{t('auth.providerType')}</UserTypeLabel>
          <UserTypeDescription>{t('auth.providerTypeDesc')}</UserTypeDescription>
        </UserTypeCard>
      </UserTypeOptions>
      
      <LoginPrompt>
        {t('auth.haveAccount')}
        <LoginLink to="/client/login">{t('auth.signIn')}</LoginLink>
      </LoginPrompt>
    </SelectorContainer>
  );
}

export default UserTypeSelector;