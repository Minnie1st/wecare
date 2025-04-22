import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MultiStepForm from '../../components/auth/MultiStepForm';

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

function ClientRegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // 基本信息步骤
  const BasicInfoStep = (formData, updateFormData) => {
    return (
      <AuthForm>
        <FormGroup>
          <Label>{t('auth.name')}</Label>
          <Input 
            type="text" 
            value={formData.name || ''} 
            onChange={(e) => updateFormData({ name: e.target.value })} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t('auth.email')}</Label>
          <Input 
            type="email" 
            value={formData.email || ''} 
            onChange={(e) => updateFormData({ email: e.target.value })} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t('auth.password')}</Label>
          <Input 
            type="password" 
            value={formData.password || ''} 
            onChange={(e) => updateFormData({ password: e.target.value })} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t('auth.confirmPassword')}</Label>
          <Input 
            type="password" 
            value={formData.confirmPassword || ''} 
            onChange={(e) => updateFormData({ confirmPassword: e.target.value })} 
            required 
          />
        </FormGroup>
      </AuthForm>
    );
  };
  
  // 验证步骤
  const VerificationStep = (formData, updateFormData) => {
    return (
      <AuthForm>
        <FormGroup>
          <Label>{t('registration.verifyEmail')}</Label>
          <p>{t('registration.verificationCodeSent', { target: formData.email })}</p>
          <Input 
            type="text" 
            placeholder={t('registration.enterVerificationCode')} 
            value={formData.emailCode || ''} 
            onChange={(e) => updateFormData({ emailCode: e.target.value })} 
            required 
          />
        </FormGroup>
      </AuthForm>
    );
  };
  
  // 完善资料步骤
  const CompleteProfileStep = (formData, updateFormData) => {
    return (
      <AuthForm>
        <FormGroup>
          <Label>{t('registration.address')}</Label>
          <Input 
            type="text" 
            value={formData.address || ''} 
            onChange={(e) => updateFormData({ address: e.target.value })} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t('registration.city')}</Label>
          <Input 
            type="text" 
            value={formData.city || ''} 
            onChange={(e) => updateFormData({ city: e.target.value })} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t('registration.zipCode')}</Label>
          <Input 
            type="text" 
            value={formData.zipCode || ''} 
            onChange={(e) => updateFormData({ zipCode: e.target.value })} 
            required 
          />
        </FormGroup>
      </AuthForm>
    );
  };
  
  // 定义注册步骤
  const registrationSteps = [
    {
      label: t('registration.steps.basicInfo'),
      content: BasicInfoStep,
      isValid: (data) => data.name && data.email && data.password && 
                        data.confirmPassword && data.password === data.confirmPassword
    },
    {
      label: t('registration.steps.verification'),
      content: VerificationStep,
      isValid: (data) => data.emailCode
    },
    {
      label: t('registration.steps.complete'),
      content: CompleteProfileStep,
      isValid: (data) => data.address && data.city && data.zipCode
    }
  ];
  
  const handleComplete = (formData) => {
    console.log('Client registration complete with:', formData);
    // 注册成功后跳转到注册成功页面
    navigate('/client/register-success');
  };
  
  return (
    <AuthContainer>
      <AuthTitle>{t('auth.clientRegister')}</AuthTitle>
      <MultiStepForm 
        steps={registrationSteps} 
        onComplete={handleComplete} 
        isProvider={false}
      />
      
      <AuthSwitch>
        {t('auth.haveAccount')}
        <AuthLink to="/client/login">{t('auth.signIn')}</AuthLink>
      </AuthSwitch>
      
      <UserTypeSwitch>
        {t('auth.areYouProvider')}
        <AuthLink to="/provider/register">{t('auth.providerRegister')}</AuthLink>
      </UserTypeSwitch>
    </AuthContainer>
  );
}

export default ClientRegisterPage;