import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AuthContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: white;
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
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
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

const ForgotPassword = styled.a`
  text-align: right;
  display: block;
  margin-bottom: 20px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const AuthSwitch = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
`;

const AuthLink = styled(Link)`
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const UserTypeSwitch = styled.div`
  text-align: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
  font-size: 14px;
  color: var(--text-secondary);
`;

function ClientLoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // 模拟登录逻辑
    console.log('Client login attempt with:', { email, password });
    
    // 这里应该是实际的登录API调用
    // 根据返回的用户类型进行不同的路由导航
    const mockApiResponse = {
      success: true,
      userType: 'client',
      userId: '12345'
    };
    
    if (mockApiResponse.success) {
      // 导航到客户主页
      navigate('/client/dashboard');
    }
  };
  
  return (
    <AuthContainer>
      <AuthTitle>{t('auth.clientLogin')}</AuthTitle>
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
        
        <ForgotPassword href="#">{t('auth.forgotPassword')}</ForgotPassword>
        
        <SubmitButton type="submit">{t('auth.signIn')}</SubmitButton>
      </AuthForm>
      
      <AuthSwitch>
        {t('auth.noAccount')}
        <AuthLink to="/client/register">{t('auth.signUp')}</AuthLink>
      </AuthSwitch>
      
      <UserTypeSwitch>
        {t('auth.areYouProvider')}
        <AuthLink to="/provider/login">{t('auth.providerLogin')}</AuthLink>
      </UserTypeSwitch>
    </AuthContainer>
  );
}

export default ClientLoginPage;