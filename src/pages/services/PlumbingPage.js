import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`;

const PageHeader = styled.div`
  background-color: var(--plumbing-color);
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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 32px;
  margin-bottom: 15px;
  color: var(--plumbing-color);
`;

const ServiceTitle = styled.h3`
  margin-bottom: 10px;
  color: var(--text-primary);
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
`;

const ServicePrice = styled.div`
  font-weight: 500;
  margin-bottom: 15px;
`;

const ServiceButton = styled.button`
  background-color: var(--plumbing-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #45c9ad;
  }
`;

const EmergencySection = styled.div`
  background: #fff4e5;
  border-radius: 8px;
  padding: var(--card-padding);
  margin-bottom: 40px;
  border-left: 4px solid #ff9800;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const EmergencyIcon = styled.div`
  font-size: 48px;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const EmergencyContent = styled.div`
  flex: 1;
`;

const EmergencyTitle = styled.h3`
  margin-bottom: 10px;
  color: #e65100;
`;

const EmergencyDescription = styled.p`
  margin-bottom: 15px;
`;

const EmergencyButton = styled.button`
  background-color: #ff9800;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e65100;
  }
`;

const DiagnosisSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: var(--plumbing-color);
`;

const DiagnosisForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--plumbing-color);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--plumbing-color);
  }
`;

const DiagnosisButton = styled.button`
  background-color: var(--plumbing-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  
  &:hover {
    background-color: #45c9ad;
  }
`;

const DiagnosisResult = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border-left: 4px solid var(--plumbing-color);
`;

const PriceEstimator = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 40px;
`;

const EstimatorForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const EstimateButton = styled.button`
  background-color: var(--plumbing-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  
  &:hover {
    background-color: #45c9ad;
  }
`;

const EstimateResult = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

const BookButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 40px auto 0;
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;

function PlumbingPage() {
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [estimateResult, setEstimateResult] = useState(null);
  
  const plumbingServices = [
    {
      id: 'leak',
      title: 'Leak Repair',
      icon: '🚿',
      description: 'Fix leaking pipes, faucets, and fixtures to prevent water damage.',
      price: '€40/hour'
    },
    {
      id: 'drain',
      title: 'Drain Cleaning',
      icon: '🚽',
      description: 'Clear clogged drains and pipes to restore proper water flow.',
      price: '€35/hour'
    },
    {
      id: 'installation',
      title: 'Fixture Installation',
      icon: '🛁',
      description: 'Install new sinks, toilets, showers, and other plumbing fixtures.',
      price: '€45/hour'
    },
    {
      id: 'pipe',
      title: 'Pipe Repair',
      icon: '🔧',
      description: 'Repair or replace damaged pipes in your plumbing system.',
      price: '€50/hour'
    },
    {
      id: 'water-heater',
      title: 'Water Heater Service',
      icon: '♨️',
      description: 'Repair, maintenance, and installation of water heaters.',
      price: '€55/hour'
    },
    {
      id: 'inspection',
      title: 'Plumbing Inspection',
      icon: '🔍',
      description: 'Comprehensive inspection of your plumbing system to identify issues.',
      price: '€30/hour'
    }
  ];
  
  const handleDiagnosis = (e) => {
    e.preventDefault();
    // In a real app, this would analyze the input and provide a tailored diagnosis
    setDiagnosisResult('Based on your description, this appears to be a standard drain clog issue. We recommend our Drain Cleaning service with an estimated cost of €35-45 depending on the severity of the clog.');
  };
  
  const handleEstimate = (e) => {
    e.preventDefault();
    // In a real app, this would calculate a more precise estimate based on inputs
    setEstimateResult('€40 - €55');
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Plumbing Services</PageTitle>
        <PageDescription>
          Professional plumbing services for your home. From leaks to installations, we've got you covered.
        </PageDescription>
      </PageHeader>
      
      <EmergencySection>
        <EmergencyIcon>🚨</EmergencyIcon>
        <EmergencyContent>
          <EmergencyTitle>Emergency Plumbing Service</EmergencyTitle>
          <EmergencyDescription>
            Experiencing a plumbing emergency? Our team is available 24/7 for urgent plumbing issues like burst pipes, major leaks, or sewage backups.
          </EmergencyDescription>
          <EmergencyButton>Call Emergency Service</EmergencyButton>
        </EmergencyContent>
      </EmergencySection>
      
      <SectionTitle>Our Plumbing Services</SectionTitle>
      <ServiceGrid>
        {plumbingServices.map(service => (
          <ServiceCard key={service.id}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServicePrice>Starting from {service.price}</ServicePrice>
            <ServiceButton>Book Service</ServiceButton>
          </ServiceCard>
        ))}
      </ServiceGrid>
      
      <DiagnosisSection>
        <SectionTitle>Plumbing Problem Diagnosis</SectionTitle>
        <DiagnosisForm onSubmit={handleDiagnosis}>
          <FormGroup>
            <Label>Problem Area</Label>
            <Select>
              <option value="">Select problem area</option>
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="basement">Basement</option>
              <option value="outdoor">Outdoor</option>
              <option value="other">Other</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label>Problem Type</Label>
            <Select>
              <option value="">Select problem type</option>
              <option value="leak">Leak/Drip</option>
              <option value="clog">Clog/Slow Drain</option>
              <option value="pressure">Low Water Pressure</option>
              <option value="noise">Noisy Pipes</option>
              <option value="other">Other</option>
            </Select>
          </FormGroup>
          
          <FormGroup style={{ gridColumn: '1 / -1' }}>
            <Label>Describe the Problem</Label>
            <Textarea placeholder="Please provide details about the plumbing issue you're experiencing..."></Textarea>
          </FormGroup>
          
          <DiagnosisButton type="submit">Diagnose Problem</DiagnosisButton>
        </DiagnosisForm>
        
        {diagnosisResult && (
          <DiagnosisResult>
            <strong>Diagnosis Result:</strong> {diagnosisResult}
          </DiagnosisResult>
        )}
      </DiagnosisSection>
      
      <PriceEstimator>
        <SectionTitle>Price Estimator</SectionTitle>
        <EstimatorForm onSubmit={handleEstimate}>
          <FormGroup>
            <Label>Service Type</Label>
            <Select>
              <option value="">Select service type</option>
              <option value="leak">Leak Repair</option>
              <option value="drain">Drain Cleaning</option>
              <option value="installation">Fixture Installation</option>
              <option value="pipe">Pipe Repair</option>
              <option value="water-heater">Water Heater Service</option>
              <option value="inspection">Plumbing Inspection</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label>Complexity</Label>
            <Select>
              <option value="simple">Simple (1-2 hours)</option>
              <option value="moderate">Moderate (2-4 hours)</option>
              <option value="complex">Complex (4+ hours)</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label>Urgency</Label>
            <Select>
              <option value="standard">Standard</option>
              <option value="urgent">Urgent (within 24 hours)</option>
              <option value="emergency">Emergency (same day)</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label>Materials Needed</Label>
            <Select>
              <option value="none">None/Minimal</option>
              <option value="basic">Basic Materials</option>
              <option value="specialized">Specialized Materials</option>
            </Select>
          </FormGroup>
          
          <EstimateButton type="submit">Calculate Estimate</EstimateButton>
        </EstimatorForm>
        
        {estimateResult && (
          <EstimateResult>
            Estimated Price Range: {estimateResult}
          </EstimateResult>
        )}
      </PriceEstimator>
      
      <BookButton>Book Plumbing Service</BookButton>
    </PageContainer>
  );
}

export default PlumbingPage;