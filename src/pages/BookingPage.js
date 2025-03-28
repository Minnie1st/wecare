import React, { useState } from 'react';
import styled from 'styled-components';

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

const BookingContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BookingModeSelector = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ModeButton = styled.button`
  flex: 1;
  padding: 15px;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#f0f0f0'};
  }
`;

const BookingForm = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const BookingSummary = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 20px;
  height: fit-content;
`;

const SummaryTitle = styled.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SummaryLabel = styled.span`
  color: var(--text-secondary);
`;

const SummaryValue = styled.span`
  font-weight: 500;
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
`;

const BookingSteps = styled.div`
  margin-bottom: 30px;
`;

const StepIndicator = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  
  &:not(:last-child):after {
    content: '';
    position: absolute;
    top: 15px;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: ${props => props.active || props.completed ? 'var(--primary-color)' : '#eee'};
  }
`;

const StepNumber = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--primary-color)' : props.completed ? '#4CAF50' : '#eee'};
  color: ${props => props.active || props.completed ? 'white' : 'var(--text-secondary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
  font-weight: 500;
  position: relative;
  z-index: 1;
`;

const StepLabel = styled.div`
  font-size: 14px;
  color: ${props => props.active ? 'var(--primary-color)' : props.completed ? '#4CAF50' : 'var(--text-secondary)'};
  font-weight: ${props => props.active || props.completed ? '500' : 'normal'};
`;

const FormSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const FormGrid = styled.div`
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
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
    border-color: var(--primary-color);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: ${props => props.secondary ? 'white' : 'var(--primary-color)'};
  color: ${props => props.secondary ? 'var(--primary-color)' : 'white'};
  border: ${props => props.secondary ? '1px solid var(--primary-color)' : 'none'};
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? '#f0f0f0' : '#3a7bc8'};
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : 'transparent'};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ServiceIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.color || 'var(--primary-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: white;
  font-size: 20px;
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceName = styled.h4`
  margin: 0 0 5px;
`;

const ServicePrice = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
`;

const DateTimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
`;

const DateCell = styled.div`
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  background-color: ${props => props.selected ? 'var(--primary-color)' : 'white'};
  color: ${props => props.selected ? 'white' : props.disabled ? '#ccc' : 'var(--text-primary)'};
  border: 1px solid #eee;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    background-color: ${props => props.disabled ? 'white' : props.selected ? 'var(--primary-color)' : '#f0f0f0'};
  }
`;

const TimeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TimeCell = styled.div`
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  background-color: ${props => props.selected ? 'var(--primary-color)' : 'white'};
  color: ${props => props.selected ? 'white' : props.disabled ? '#ccc' : 'var(--text-primary)'};
  border: 1px solid #eee;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    background-color: ${props => props.disabled ? 'white' : props.selected ? 'var(--primary-color)' : '#f0f0f0'};
  }
`;

const ToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-right: 10px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 24px;
  }
  
  span:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + span {
    background-color: var(--primary-color);
  }
  
  input:checked + span:before {
    transform: translateX(26px);
  }
`;

const SwitchLabel = styled.div`
  font-weight: 500;
`;

function BookingPage() {
  const [bookingMode, setBookingMode] = useState('quick');
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [address, setAddress] = useState('');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [regularService, setRegularService] = useState(false);
  
  const services = [
    { id: 'cleaning', name: 'Regular Cleaning', price: '€25/hour', color: 'var(--cleaning-color)', icon: '🧹' },
    { id: 'deep-cleaning', name: 'Deep Cleaning', price: '€40/hour', color: 'var(--cleaning-color)', icon: '🧽' },
    { id: 'repair', name: 'Home Repair', price: '€35/hour', color: 'var(--repair-color)', icon: '🔧' },
    { id: 'plumbing', name: 'Plumbing Service', price: '€40/hour', color: 'var(--plumbing-color)', icon: '🚿' },
    { id: 'elder-care', name: 'Elder Care', price: '€30/hour', color: 'var(--elder-care-color)', icon: '❤️' },
    { id: 'child-care', name: 'Child Care', price: '€28/hour', color: 'var(--child-care-color)', icon: '👶' },
  ];
  
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };
  
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 18; hour++) {
      slots.push(`${hour}:00`);
      if (hour < 18) slots.push(`${hour}:30`);
    }
    return slots;
  };
  
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const renderServiceSelection = () => {
    return (
      <FormSection>
        <SectionTitle>Select Service</SectionTitle>
        <div>
          {services.map(service => (
            <ServiceCard 
              key={service.id} 
              selected={selectedService === service.id}
              onClick={() => setSelectedService(service.id)}
            >
              <ServiceCardHeader>
                <ServiceIcon color={service.color}>{service.icon}</ServiceIcon>
                <ServiceInfo>
                  <ServiceName>{service.name}</ServiceName>
                  <ServicePrice>Starting from {service.price}</ServicePrice>
                </ServiceInfo>
              </ServiceCardHeader>
            </ServiceCard>
          ))}
        </div>
      </FormSection>
    );
  };
  
  const renderDateTimeSelection = () => {
    const dates = generateDates();
    const timeSlots = generateTimeSlots();
    
    return (
      <FormSection>
        <SectionTitle>Select Date & Time</SectionTitle>
        <Label>Date</Label>
        <DateTimeGrid>
          {dates.slice(0, 7).map((date, index) => (
            <DateCell 
              key={index}
              selected={selectedDate && date.toDateString() === selectedDate.toDateString()}
              onClick={() => setSelectedDate(date)}
            >
              <div>{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div>{date.getDate()}</div>
            </DateCell>
          ))}
        </DateTimeGrid>
        
        <Label>Time</Label>
        <TimeGrid>
          {timeSlots.map((time, index) => (
            <TimeCell 
              key={index}
              selected={selectedTime === time}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </TimeCell>
          ))}
        </TimeGrid>
      </FormSection>
    );
  };
  
  const renderAddressForm = () => {
    return (
      <FormSection>
        <SectionTitle>Enter Address</SectionTitle>
        <FormGroup>
          <Label>Street Address</Label>
          <Input 
            type="text" 
            value={address.street || ''}
            onChange={(e) => setAddress({...address, street: e.target.value})}
            placeholder="Enter street address"
          />
        </FormGroup>
        
        <FormGrid>
          <FormGroup>
            <Label>City</Label>
            <Input 
              type="text" 
              value={address.city || ''}
              onChange={(e) => setAddress({...address, city: e.target.value})}
              placeholder="Enter city"
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Postal Code</Label>
            <Input 
              type="text" 
              value={address.postalCode || ''}
              onChange={(e) => setAddress({...address, postalCode: e.target.value})}
              placeholder="Enter postal code"
            />
          </FormGroup>
        </FormGrid>
        
        <FormGroup>
          <Label>Additional Instructions</Label>
          <Textarea 
            value={address.instructions || ''}
            onChange={(e) => setAddress({...address, instructions: e.target.value})}
            placeholder="Apartment number, access code, etc."
          />
        </FormGroup>
      </FormSection>
    );
  };
  
  const renderAdvancedOptions = () => {
    return (
      <FormSection>
        <SectionTitle>Advanced Options</SectionTitle>
        
        <ToggleSwitch>
          <Switch>
            <input 
              type="checkbox" 
              checked={regularService}
              onChange={() => setRegularService(!regularService)}
            />
            <span></span>
          </Switch>
          <SwitchLabel>Schedule as regular service</SwitchLabel>
        </ToggleSwitch>
        
        {regularService && (
          <FormGroup>
            <Label>Frequency</Label>
            <Select>
              <option value="weekly">Weekly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
            </Select>
          </FormGroup>
        )}
        
        <FormGroup>
          <Label>Special Requirements</Label>
          <Textarea 
            value={specialRequirements}
            onChange={(e) => setSpecialRequirements(e.target.value)}
            placeholder="Any special requirements or preferences?"
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Preferred Service Provider</Label>
          <Select>
            <option value="">No preference</option>
            <option value="provider1">Maria K. (4.9 ★)</option>
            <option value="provider2">John D. (4.8 ★)</option>
            <option value="provider3">Anna S. (4.7 ★)</option>
          </Select>
        </FormGroup>
      </FormSection>
    );
  };
  
  const renderConfirmation = () => {
    return (
      <FormSection>
        <SectionTitle>Confirm Booking</SectionTitle>
        
        <SummaryItem>
          <SummaryLabel>Service:</SummaryLabel>
          <SummaryValue>
            {selectedService && services.find(s => s.id === selectedService)?.name}
          </SummaryValue>
        </SummaryItem>
        
        <SummaryItem>
          <SummaryLabel>Date & Time:</SummaryLabel>
          <SummaryValue>
            {selectedDate && formatDate(selectedDate)} at {selectedTime}
          </SummaryValue>
        </SummaryItem>
        
        <SummaryItem>
          <SummaryLabel>Address:</SummaryLabel>
          <SummaryValue>
            {address.street}, {address.city} {address.postalCode}
          </SummaryValue>
        </SummaryItem>
        
        {bookingMode === 'advanced' && (
          <>
            <SummaryItem>
              <SummaryLabel>Regular Service:</SummaryLabel>
              <SummaryValue>{regularService ? 'Yes' : 'No'}</SummaryValue>
            </SummaryItem>
            
            {specialRequirements && (
              <SummaryItem>
                <SummaryLabel>Special Requirements:</SummaryLabel>
                <SummaryValue>{specialRequirements}</SummaryValue>
              </SummaryItem>
            )}
          </>
        )}
        
        <TotalPrice>
          <span>Total Estimate:</span>
          <span>€35.00</span>
        </TotalPrice>
      </FormSection>
    );
  };
  
  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return renderServiceSelection();
      case 2:
        return renderDateTimeSelection();
      case 3:
        return renderAddressForm();
      case 4:
        return bookingMode === 'advanced' ? renderAdvancedOptions() : renderConfirmation();
      case 5:
        return renderConfirmation();
      default:
        return null;
    }
  };
  
  const renderBookingSummary = () => {
    return (
      <BookingSummary>
        <SummaryTitle>Booking Summary</SummaryTitle>
        
        {selectedService && (
          <SummaryItem>
            <SummaryLabel>Service:</SummaryLabel>
            <SummaryValue>
              {services.find(s => s.id === selectedService)?.name}
            </SummaryValue>
          </SummaryItem>
        )}
        
        {selectedDate && (
          <SummaryItem>
            <SummaryLabel>Date:</SummaryLabel>
            <SummaryValue>{formatDate(selectedDate)}</SummaryValue>
          </SummaryItem>
        )}
        
        {selectedTime && (
          <SummaryItem>
            <SummaryLabel>Time:</SummaryLabel>
            <SummaryValue>{selectedTime}</SummaryValue>
          </SummaryItem>
        )}
        
        {address.street && (
          <SummaryItem>
            <SummaryLabel>Location:</SummaryLabel>
            <SummaryValue>{address.city || 'Not specified'}</SummaryValue>
          </SummaryItem>
        )}
        
        {(currentStep === 4 && bookingMode === 'quick') || currentStep === 5 ? (
          <TotalPrice>
            <span>Total:</span>
            <span>€35.00</span>
          </TotalPrice>
        ) : null}
        
        {(currentStep === 4 && bookingMode === 'quick') || currentStep === 5 ? (
          <Button style={{ width: '100%', marginTop: '20px' }}>
            Confirm Booking
          </Button>
        ) : null}
      </BookingSummary>
    );
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Book a Service</PageTitle>
        <PageDescription>
          Schedule your service in a few simple steps
        </PageDescription>
      </PageHeader>
      
      <BookingModeSelector>
        <ModeButton 
          active={bookingMode === 'quick'}
          onClick={() => setBookingMode('quick')}
        >
          Quick Booking
        </ModeButton>
        <ModeButton 
          active={bookingMode === 'advanced'}
          onClick={() => setBookingMode('advanced')}
        >
          Advanced Booking
        </ModeButton>
      </BookingModeSelector>
      
      <BookingContainer>
        <BookingForm>
          <BookingSteps>
            <StepIndicator>
              <Step active={currentStep === 1} completed={currentStep > 1}>
                <StepNumber active={currentStep === 1} completed={currentStep > 1}>1</StepNumber>
                <StepLabel active={currentStep === 1} completed={currentStep > 1}>Service</StepLabel>
              </Step>
              
              <Step active={currentStep === 2} completed={currentStep > 2}>
                <StepNumber active={currentStep === 2} completed={currentStep > 2}>2</StepNumber>
                <StepLabel active={currentStep === 2} completed={currentStep > 2}>Date & Time</StepLabel>
              </Step>
              
              <Step active={currentStep === 3} completed={currentStep > 3}>
                <StepNumber active={currentStep === 3} completed={currentStep > 3}>3</StepNumber>
                <StepLabel active={currentStep === 3} completed={currentStep > 3}>Address</StepLabel>
              </Step>
              
              {bookingMode === 'advanced' ? (
                <>
                  <Step active={currentStep === 4} completed={currentStep > 4}>
                    <StepNumber active={currentStep === 4} completed={currentStep > 4}>4</StepNumber>
                    <StepLabel active={currentStep === 4} completed={currentStep > 4}>Options</StepLabel>
                  </Step>
                  
                  <Step active={currentStep === 5}>
                    <StepNumber active={currentStep === 5}>5</StepNumber>
                    <StepLabel active={currentStep === 5}>Confirm</StepLabel>
                  </Step>
                </>
              ) : (
                <Step active={currentStep === 4}>
                  <StepNumber active={currentStep === 4}>4</StepNumber>
                  <StepLabel active={currentStep === 4}>Confirm</StepLabel>
                </Step>
              )}
            </StepIndicator>
          </BookingSteps>
          
          {renderStepContent()}
          
          <ButtonGroup>
            {currentStep > 1 && (
              <Button secondary onClick={prevStep}>
                Back
              </Button>
            )}
            
            {((bookingMode === 'quick' && currentStep < 4) || 
              (bookingMode === 'advanced' && currentStep < 5)) && (
              <Button onClick={nextStep}>
                Next
              </Button>
            )}
          </ButtonGroup>
        </BookingForm>
        
        {renderBookingSummary()}
      </BookingContainer>
    </PageContainer>
  );
}

export default BookingPage;