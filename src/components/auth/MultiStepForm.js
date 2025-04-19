import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FormContainer = styled.div`
  width: 100%;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #e0e0e0;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary-color)' : props.completed ? 'var(--primary-color)' : '#e0e0e0'};
  color: ${props => props.active || props.completed ? 'white' : 'var(--text-secondary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  
  ${props => props.providerColor && (props.active || props.completed) && `
    background-color: var(--provider-color, #4caf50);
  `}
`;

const StepLabel = styled.div`
  font-size: 12px;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  text-align: center;
  max-width: 80px;
  
  ${props => props.providerColor && props.active && `
    color: var(--provider-color, #4caf50);
  `}
`;

const StepContent = styled.div`
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.back {
    background-color: transparent;
    border: 1px solid var(--text-secondary);
    color: var(--text-secondary);
    
    &:hover {
      background-color: #f5f5f5;
    }
  }
  
  &.next, &.submit {
    background-color: ${props => props.providerColor ? 'var(--provider-color, #4caf50)' : 'var(--primary-color)'};
    color: white;
    border: none;
    
    &:hover {
      opacity: 0.9;
    }
    
    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  }
`;

function MultiStepForm({ steps, onComplete, isProvider = false }) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = () => {
    if (onComplete) {
      onComplete(formData);
    }
  };
  
  const updateFormData = (data) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  };
  
  const isLastStep = currentStep === steps.length - 1;
  
  return (
    <FormContainer>
      <StepsContainer>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepNumber 
              active={index === currentStep}
              completed={index < currentStep}
              providerColor={isProvider}
            >
              {index < currentStep ? '✓' : index + 1}
            </StepNumber>
            <StepLabel 
              active={index === currentStep}
              providerColor={isProvider}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </StepsContainer>
      
      <StepContent>
        {steps[currentStep].content(formData, updateFormData)}
      </StepContent>
      
      <ButtonContainer>
        {currentStep > 0 && (
          <Button 
            className="back" 
            onClick={handleBack}
          >
            {t('registration.back')}
          </Button>
        )}
        
        {!isLastStep ? (
          <Button 
            className="next" 
            onClick={handleNext}
            providerColor={isProvider}
            disabled={!steps[currentStep].isValid?.(formData)}
          >
            {t('registration.next')}
          </Button>
        ) : (
          <Button 
            className="submit" 
            onClick={handleSubmit}
            providerColor={isProvider}
            disabled={!steps[currentStep].isValid?.(formData)}
          >
            {t('registration.submit')}
          </Button>
        )}
      </ButtonContainer>
    </FormContainer>
  );
}

export default MultiStepForm;