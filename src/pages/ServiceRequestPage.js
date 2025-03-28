import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`;

const PageHeader = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const PageDescription = styled.p`
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const ServiceRequestPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { value } = e.target;
    
    // Directly navigate to corresponding service page based on selection
    switch(value) {
      case 'cleaning':
        navigate('/services/cleaning');
        break;
      case 'repair':
        navigate('/services/repair');
        break;
      case 'plumbing':
        navigate('/services/plumbing');
        break;
      case 'elderCare':
        navigate('/services/elder-care');
        break;
      case 'childCare':
        navigate('/services/child-care');
        break;
      default:
        break;
    }
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('serviceRequest.title')}</PageTitle>
        <PageDescription>{t('serviceRequest.description')}</PageDescription>
      </PageHeader>
      
      <FormContainer>
        <FormGroup>
          <Label>{t('serviceRequest.serviceType')}</Label>
          <Select 
            name="serviceType" 
            onChange={handleChange}
            defaultValue=""
            required
          >
            <option value="">{t('serviceRequest.selectType')}</option>
            <option value="cleaning">{t('nav.cleaning')}</option>
            <option value="repair">{t('nav.repair')}</option>
            <option value="plumbing">{t('nav.plumbing')}</option>
            <option value="elderCare">{t('nav.elderCare')}</option>
            <option value="childCare">{t('nav.childCare')}</option>
          </Select>
        </FormGroup>
      </FormContainer>
    </PageContainer>
  );
};

export default ServiceRequestPage;