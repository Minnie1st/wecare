import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SuccessContainer = styled.div`
  max-width: 500px;
  margin: 60px auto;
  padding: 40px 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-top: 4px solid ${props => props.isProvider ? 'var(--provider-color, #4caf50)' : 'var(--primary-color)'};
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.isProvider ? 'var(--provider-color, #4caf50)' : 'var(--primary-color)'};
  color: white;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
`;

const SuccessTitle = styled.h2`
  margin-bottom: 15px;
  color: ${props => props.isProvider ? 'var(--provider-color, #4caf50)' : 'var(--primary-color)'};
  font-size: 24px;
`;

const SuccessMessage = styled.p`
  margin-bottom: 30px;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &.primary {
    background-color: ${props => props.isProvider ? 'var(--provider-color, #4caf50)' : 'var(--primary-color)'};
    color: white;
    
    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  }
  
  &.secondary {
    border: 1px solid ${props => props.isProvider ? 'var(--provider-color, #4caf50)' : 'var(--primary-color)'};
    color: ${props => props.isProvider ? 'var(--provider-color, #4caf50)' : 'var(--primary-color)'};
    
    &:hover {
      background-color: ${props => props.isProvider ? 'rgba(76, 175, 80, 0.1)' : 'rgba(46, 125, 50, 0.1)'};
      transform: translateY(-2px);
    }
  }
`;

function RegistrationSuccessPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const isProvider = location.pathname.includes('/provider');
  
  return (
    <SuccessContainer isProvider={isProvider}>
      <SuccessIcon isProvider={isProvider}>✓</SuccessIcon>
      <SuccessTitle isProvider={isProvider}>
        {t('registration.success.title')}
      </SuccessTitle>
      <SuccessMessage>
        {isProvider 
          ? t('registration.success.providerMessage', { defaultValue: 'Your service provider account has been successfully registered. You can now log in and start setting up your services.' })
          : t('registration.success.clientMessage', { defaultValue: 'Your client account has been successfully registered. You can now log in and start using our services.' })}
      </SuccessMessage>
      
      <ButtonContainer>
        <Button 
          to={isProvider ? '/provider/login' : '/client/login'} 
          className="primary"
          isProvider={isProvider}
        >
          {t('registration.success.login', { defaultValue: 'Log In Now' })}
        </Button>
        <Button 
          to="/" 
          className="secondary"
          isProvider={isProvider}
        >
          {t('registration.success.home', { defaultValue: 'Return to Home' })}
        </Button>
      </ButtonContainer>
    </SuccessContainer>
  );
}

export default RegistrationSuccessPage;