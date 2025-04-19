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
  border-top: 4px solid var(--provider-color, #4caf50);
`;

const ErrorMessage = styled.div`
  color: #f44336;
  background-color: #ffebee;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
`;

const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: var(--provider-color, #4caf50);
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
    border-color: var(--provider-color, #4caf50);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--provider-color, #4caf50);
  color: #ffffff;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3d8b3d;
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
    color: var(--provider-color, #4caf50);
  }
`;

const AuthSwitch = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--text-secondary);
`;

const AuthLink = styled(Link)`
  color: var(--provider-color, #4caf50);
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

function ProviderLoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    // 模拟登录API响应
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    try {
      // 模拟成功登录响应
      const mockResponse = {
        success: true,
        userId: '12345',
        token: 'mock-token-12345',
        message: '登录成功'
      };
      
      if (mockResponse.success) {
        localStorage.setItem('userInfo', JSON.stringify({
          id: mockResponse.userId,
          email: email,
          userType: 'provider',
          token: mockResponse.token
        }));
        navigate('/provider/portal');
      } else {
        setError(mockResponse.message || t('auth.loginFailed'));
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(t('auth.loginError'));
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <AuthContainer>
      <AuthTitle>{t('auth.providerLogin')}</AuthTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
        
        <SubmitButton type="submit" disabled={loading}>
          {loading ? t('auth.signingIn') : t('auth.signIn')}
        </SubmitButton>
      </AuthForm>
      
      <AuthSwitch>
        {t('auth.noAccount')}
        <AuthLink to="/provider/register">{t('auth.signUp')}</AuthLink>
      </AuthSwitch>
      
      <UserTypeSwitch>
        {t('auth.areYouClient')}
        <AuthLink to="/client/login">{t('auth.clientLogin')}</AuthLink>
      </UserTypeSwitch>
    </AuthContainer>
  );
}

export default ProviderLoginPage;