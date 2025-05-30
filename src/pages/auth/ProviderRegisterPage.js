import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MultiStepForm from '../../components/auth/MultiStepForm';
import ImageUploader from '../../components/ImageUploader';

const AuthContainer = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 30px;
  background: var(--text-light);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-top: 4px solid var(--provider-color, #4caf50);
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
  border: 1px solid var(--text-secondary);
  border-radius: 4px;
  font-size: 16px;
  color: var(--text-dark);
  
  &:focus {
    outline: none;
    border-color: var(--provider-color, #4caf50);
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

const ServiceCategorySelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid var(--text-secondary);
  border-radius: 4px;
  font-size: 16px;
  color: var(--text-dark);
  
  &:focus {
    outline: none;
    border-color: var(--provider-color, #4caf50);
    background-color: rgba(46, 125, 50, 0.05);
  }
`;

const ReviewMessage = styled.div`
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid var(--provider-color, #4caf50);
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const TimeSlotContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const DayColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DayLabel = styled.div`
  font-weight: 500;
  margin-bottom: 10px;
`;

const TimeSlot = styled.div`
  padding: 8px;
  margin: 2px 0;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  font-size: 12px;
  
  background-color: ${props => props.selected ? 'var(--provider-color, #4caf50)' : '#f0f0f0'};
  color: ${props => props.selected ? 'white' : 'var(--text-dark)'};
  
  &:hover {
    background-color: ${props => props.selected ? 'var(--provider-color, #4caf50)' : '#e0e0e0'};
  }
`;

function ProviderRegisterPage() {
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
          <Label>{t('auth.phoneNumber')}</Label>
          <Input 
            type="tel" 
            value={formData.phone || ''} 
            onChange={(e) => updateFormData({ phone: e.target.value })} 
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
        
        <FormGroup>
          <Label>{t('registration.verifyPhone')}</Label>
          <p>{t('registration.verificationCodeSent', { target: formData.phone })}</p>
          <Input 
            type="text" 
            placeholder={t('registration.enterVerificationCode')} 
            value={formData.phoneCode || ''} 
            onChange={(e) => updateFormData({ phoneCode: e.target.value })} 
            required 
          />
        </FormGroup>
      </AuthForm>
    );
  };
  
  // 文档上传步骤
  const DocumentsStep = (formData, updateFormData) => {
    const handleIdUpload = (files) => {
      updateFormData({ idProof: files });
    };
    
    const handleCertificatesUpload = (files) => {
      updateFormData({ certificates: files });
    };
    
    const handleExperienceUpload = (files) => {
      updateFormData({ experienceProof: files });
    };
    
    return (
      <AuthForm>
        <ImageUploader 
          onChange={handleIdUpload} 
          maxImages={1} 
          label={t('registration.uploadId')} 
        />
        
        <ImageUploader 
          onChange={handleCertificatesUpload} 
          maxImages={3} 
          label={t('registration.uploadCertificates')} 
        />
        
        <ImageUploader 
          onChange={handleExperienceUpload} 
          maxImages={2} 
          label={t('registration.uploadExperience')} 
        />
        
        <FormGroup>
          <Label>{t('auth.experience')}</Label>
          <Input 
            type="number" 
            min="0" 
            value={formData.experience || ''} 
            onChange={(e) => updateFormData({ experience: e.target.value })} 
            required 
          />
        </FormGroup>
      </AuthForm>
    );
  };
  
  // 平台审核步骤
  const ReviewStep = (formData, updateFormData) => {
    return (
      <AuthForm>
        <ReviewMessage>
          <h3>{t('registration.thankYou', { defaultValue: 'Thank You for Your Application' })}</h3>
          <p>{t('registration.reviewMessage')}</p>
        </ReviewMessage>
        
        <FormGroup>
          <Label>{t('registration.applicationStatus', { defaultValue: 'Application Status' })}</Label>
          <p>{t('registration.underReview', { defaultValue: 'Under Review' })}</p>
        </FormGroup>
        
        <FormGroup>
          <Label>{t('registration.submissionTime', { defaultValue: 'Submission Time' })}</Label>
          <p>{new Date().toLocaleString()}</p>
        </FormGroup>
      </AuthForm>
    );
  };
  
  // 服务设置步骤
  const ServiceSetupStep = (formData, updateFormData) => {
    const selectedTimeSlots = formData.timeSlots || {};
    
    const toggleTimeSlot = (day, time) => {
      const newTimeSlots = { ...selectedTimeSlots };
      const key = `${day}-${time}`;
      
      if (newTimeSlots[key]) {
        delete newTimeSlots[key];
      } else {
        newTimeSlots[key] = true;
      }
      
      updateFormData({ timeSlots: newTimeSlots });
    };
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const times = ['Morning', 'Afternoon', 'Evening'];

    const TimeSlotContainer = styled.div`
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;
      overflow-x: auto;
      padding: 10px;
      max-width: 100%;
      &::-webkit-scrollbar {
        height: 8px;
      }
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 4px;
      }
    `;

    const DayColumn = styled.div`
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 100px;
    `;

    const TimeSlot = styled.div`
      padding: 8px;
      text-align: center;
      border: 1px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      background-color: ${props => props.selected ? '#4CAF50' : '#fff'};
      color: ${props => props.selected ? '#fff' : '#333'};
      &:hover {
        background-color: ${props => props.selected ? '#45a049' : '#f5f5f5'};
      }
    `;
    
    return (
      <AuthForm>
        <FormGroup>
          <Label>{t('registration.serviceCategory')}</Label>
          <ServiceCategorySelect 
            value={formData.serviceCategory || ''} 
            onChange={(e) => updateFormData({ serviceCategory: e.target.value })} 
            required
          >
            <option value="">{t('registration.selectServiceCategory', { defaultValue: 'Please select service category' })}</option>
            <option value="cleaning">{t('services.cleaning', { defaultValue: 'Cleaning Service' })}</option>
            <option value="repair">{t('services.repair', { defaultValue: 'Repair Service' })}</option>
            <option value="plumbing">{t('services.plumbing', { defaultValue: 'Plumbing Service' })}</option>
            <option value="elderCare">{t('services.elderCare', { defaultValue: 'Elder Care' })}</option>
            <option value="childCare">{t('services.childCare', { defaultValue: 'Child Care' })}</option>
          </ServiceCategorySelect>
        </FormGroup>
        
        <FormGroup>
          <Label>{t('registration.priceSettings')}</Label>
          <Input 
            type="number" 
            min="0" 
            placeholder={t('registration.hourlyRate', { defaultValue: 'Hourly rate (€)' })} 
            value={formData.hourlyRate || ''} 
            onChange={(e) => updateFormData({ hourlyRate: e.target.value })} 
            required 
          />
        </FormGroup>
        
        <FormGroup>
          <Label>{t('registration.availability')}</Label>
          <TimeSlotContainer>
            {days.map(day => (
              <DayColumn key={day}>
                <DayLabel>{day}</DayLabel>
                {times.map(time => (
                  <TimeSlot 
                    key={`${day}-${time}`}
                    selected={selectedTimeSlots[`${day}-${time}`]}
                    onClick={() => toggleTimeSlot(day, time)}
                  >
                    {time}
                  </TimeSlot>
                ))}
              </DayColumn>
            ))}
          </TimeSlotContainer>
        </FormGroup>
      </AuthForm>
    );
  };
  
  // 定义注册步骤
  const registrationSteps = [
    {
      label: t('registration.steps.basicInfo'),
      content: BasicInfoStep,
      isValid: (data) => data.name && data.email && data.phone && data.password && 
                        data.confirmPassword && data.password === data.confirmPassword
    },
    {
      label: t('registration.steps.verification'),
      content: VerificationStep,
      isValid: (data) => data.emailCode && data.phoneCode
    },
    {
      label: t('registration.steps.documents'),
      content: DocumentsStep,
      isValid: (data) => data.experience
    },
    {
      label: t('registration.steps.review'),
      content: ReviewStep,
      isValid: () => true
    },
    {
      label: t('registration.steps.serviceSetup'),
      content: ServiceSetupStep,
      isValid: (data) => data.serviceCategory && data.hourlyRate && 
                        data.timeSlots && Object.keys(data.timeSlots).length > 0
    }
  ];
  
  const handleComplete = (formData) => {
    console.log('Provider registration complete with:', formData);
    // 注册成功后跳转到注册成功页面
    navigate('/provider/register-success');
  };
  
  return (
    <AuthContainer>
      <AuthTitle>{t('auth.providerRegister')}</AuthTitle>
      <MultiStepForm 
        steps={registrationSteps} 
        onComplete={handleComplete} 
        isProvider={true}
      />
      
      <AuthSwitch>
        {t('auth.haveAccount')}
        <AuthLink to="/provider/login">{t('auth.signIn')}</AuthLink>
      </AuthSwitch>
      
      <UserTypeSwitch>
        {t('auth.areYouClient')}
        <AuthLink to="/client/register">{t('auth.clientRegister')}</AuthLink>
      </UserTypeSwitch>
    </AuthContainer>
  );
}

export default ProviderRegisterPage;