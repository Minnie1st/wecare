import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`;

const PageHeader = styled.div`
  background-color: var(--elder-care-color);
  color: var(--text-light);
  padding: 40px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div``;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: var(--elder-care-color);
`;

const AssessmentForm = styled.div`
  background: var(--text-light);
  color: var(--text-dark);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--elder-care-color);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--elder-care-color);
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
    border-color: var(--elder-care-color);
  }
`;

const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const SubmitButton = styled.button`
  background-color: var(--elder-care-color);
  color: var(--text-light);
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--text-secondary);
  }
`;

const CaregiverSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const CaregiverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const CaregiverCard = styled.div`
  background: var(--text-light);
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  color: var(--text-dark);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(46, 125, 50, 0.05);
  }
`;

const CaregiverAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 0 auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: var(--elder-care-color);
`;

const CaregiverName = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const CaregiverRating = styled.div`
  text-align: center;
  margin-bottom: 10px;
  color: #f8b400;
`;

const CaregiverQualifications = styled.div`
  margin-bottom: 10px;
`;

const QualificationTag = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

const CaregiverButton = styled.button`
  width: 100%;
  background-color: var(--elder-care-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #7b10d5;
  }
`;

const ScheduleSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 20px;
`;

const CalendarHeader = styled.div`
  text-align: center;
  font-weight: 500;
  padding: 5px;
`;

const CalendarDay = styled.div`
  text-align: center;
  padding: 10px 5px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.selected ? 'var(--elder-care-color)' : props.available ? 'white' : '#f9f9f9'};
  color: ${props => props.selected ? 'white' : props.available ? 'var(--text-primary)' : '#ccc'};
  
  &:hover {
    background-color: ${props => props.selected ? 'var(--elder-care-color)' : props.available ? '#f0f0f0' : '#f9f9f9'};
  }
`;

const TimeSlotGrid = styled.div`
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

const TimeSlot = styled.div`
  text-align: center;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.selected ? 'var(--elder-care-color)' : props.available ? 'white' : '#f9f9f9'};
  color: ${props => props.selected ? 'white' : props.available ? 'var(--text-primary)' : '#ccc'};
  
  &:hover {
    background-color: ${props => props.selected ? 'var(--elder-care-color)' : props.available ? '#f0f0f0' : '#f9f9f9'};
  }
`;

const EmergencyContactSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const ContactList = styled.div`
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ContactInfo = styled.div``;

const ContactName = styled.div`
  font-weight: 500;
`;

const ContactRelation = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
`;

const ContactActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ContactButton = styled.button`
  background-color: ${props => props.secondary ? '#f0f0f0' : 'var(--elder-care-color)'};
  color: ${props => props.secondary ? 'var(--text-primary)' : 'white'};
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.secondary ? '#e0e0e0' : '#7b10d5'};
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: var(--text-primary);
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

const MedicalRequirementsSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const RequirementList = styled.div`
  margin-bottom: 20px;
`;

const RequirementItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const RequirementInfo = styled.div``;

const RequirementTitle = styled.div`
  font-weight: 500;
`;

const RequirementDescription = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
`;

const ServiceSummary = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  position: sticky;
  top: 20px;
`;

const SummaryTitle = styled.h3`
  margin-bottom: 20px;
  color: var(--elder-care-color);
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

const BookButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px 30px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;

function ElderCarePage() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  
  const caregivers = [
    {
      id: 1,
      name: 'Maria K.',
      rating: 4.9,
      qualifications: ['Certified Nurse', 'First Aid', '5+ Years Experience', 'Dementia Care'],
      initial: 'M'
    },
    {
      id: 2,
      name: 'John D.',
      rating: 4.8,
      qualifications: ['Home Health Aide', 'CPR Certified', '3+ Years Experience', 'Mobility Assistance'],
      initial: 'J'
    },
    {
      id: 3,
      name: 'Anna S.',
      rating: 4.7,
      qualifications: ['Registered Nurse', 'Medication Management', '7+ Years Experience', 'Alzheimer\'s Care'],
      initial: 'A'
    }
  ];
  
  const emergencyContacts = [
    { id: 1, name: 'Robert Johnson', relation: 'Son', phone: '+372 5551234' },
    { id: 2, name: 'Emily Smith', relation: 'Daughter', phone: '+372 5555678' }
  ];
  
  const medicalRequirements = [
    { id: 1, title: 'Medication Schedule', description: 'Blood pressure medication 3 times daily' },
    { id: 2, title: 'Mobility Assistance', description: 'Help with walking and transfers' },
    { id: 3, title: 'Dietary Restrictions', description: 'Low sodium diet, no dairy' }
  ];
  
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date,
        available: Math.random() > 0.3 // Randomly set availability for demo
      });
    }
    
    return days;
  };
  
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 18; hour++) {
      slots.push({
        time: `${hour}:00`,
        available: Math.random() > 0.3 // Randomly set availability for demo
      });
      if (hour < 18) {
        slots.push({
          time: `${hour}:30`,
          available: Math.random() > 0.3 // Randomly set availability for demo
        });
      }
    }
    return slots;
  };
  
  const calendarDays = generateCalendarDays();
  const timeSlots = generateTimeSlots();
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const toggleDaySelection = (day) => {
    if (!day.available) return;
    
    const dateStr = day.date.toDateString();
    if (selectedDays.some(d => d.toDateString() === dateStr)) {
      setSelectedDays(selectedDays.filter(d => d.toDateString() !== dateStr));
    } else {
      setSelectedDays([...selectedDays, day.date]);
    }
  };
  
  const toggleTimeSlotSelection = (slot) => {
    if (!slot.available) return;
    setSelectedTimeSlot(slot.time === selectedTimeSlot ? null : slot.time);
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Elder Care Services</PageTitle>
        <PageDescription>
          Professional and compassionate care services for elderly loved ones. Our qualified caregivers provide personalized support.
        </PageDescription>
      </PageHeader>
      
      <ContentContainer>
        <MainContent>
          <AssessmentForm>
            <SectionTitle>Care Needs Assessment</SectionTitle>
            <FormGroup>
              <Label>Care Recipient's Name</Label>
              <Input type="text" placeholder="Enter full name" />
            </FormGroup>
            
            <FormGroup>
              <Label>Age</Label>
              <Input type="number" placeholder="Enter age" min="60" max="120" />
            </FormGroup>
            
            <FormGroup>
              <Label>Care Level Needed</Label>
              <Select>
                <option value="">Select care level</option>
                <option value="basic">Basic Care - Companionship & Light Assistance</option>
                <option value="moderate">Moderate Care - Personal Care & Mobility Help</option>
                <option value="advanced">Advanced Care - Medical Assistance & Full Support</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Assistance Needed (Select all that apply)</Label>
              <CheckboxGroup>
                <CheckboxItem>
                  <Checkbox type="checkbox" id="mobility" />
                  <label htmlFor="mobility">Mobility Assistance</label>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" id="medication" />
                  <label htmlFor="medication">Medication Management</label>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" id="bathing" />
                  <label htmlFor="bathing">Bathing & Hygiene</label>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" id="meals" />
                  <label htmlFor="meals">Meal Preparation</label>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" id="housekeeping" />
                  <label htmlFor="housekeeping">Light Housekeeping</label>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" id="transportation" />
                  <label htmlFor="transportation">Transportation</label>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" id="companionship" />
                  <label htmlFor="companionship">Companionship</label>
                </CheckboxItem>
                <CheckboxItem>
                  <Checkbox type="checkbox" id="specialized" />
                  <label htmlFor="specialized">Specialized Care</label>
                </CheckboxItem>
              </CheckboxGroup>
            </FormGroup>
            
            <FormGroup>
              <Label>Additional Information</Label>
              <Textarea placeholder="Please provide any additional details about care needs..." />
            </FormGroup>
            
            <SubmitButton>Submit Assessment</SubmitButton>
          </AssessmentForm>
          
          <CaregiverSection>
            <SectionTitle>Our Qualified Caregivers</SectionTitle>
            <CaregiverGrid>
              {caregivers.map(caregiver => (
                <CaregiverCard key={caregiver.id}>
                  <CaregiverAvatar>{caregiver.initial}</CaregiverAvatar>
                  <CaregiverName>{caregiver.name}</CaregiverName>
                  <CaregiverRating>{'★'.repeat(Math.floor(caregiver.rating))} {caregiver.rating}</CaregiverRating>
                  <CaregiverQualifications>
                    {caregiver.qualifications.map((qual, index) => (
                      <QualificationTag key={index}>{qual}</QualificationTag>
                    ))}
                  </CaregiverQualifications>
                  <CaregiverButton>Select Caregiver</CaregiverButton>
                </CaregiverCard>
              ))}
            </CaregiverGrid>
          </CaregiverSection>
          
          <ScheduleSection>
            <SectionTitle>Service Schedule Setup</SectionTitle>
            <Label>Select Days</Label>
            <CalendarGrid>
              {weekdays.map(day => (
                <CalendarHeader key={day}>{day}</CalendarHeader>
              ))}
              {calendarDays.map((day, index) => (
                <CalendarDay 
                  key={index}
                  available={day.available}
                  selected={selectedDays.some(d => d.toDateString() === day.date.toDateString())}
                  onClick={() => toggleDaySelection(day)}
                >
                  {day.date.getDate()}
                </CalendarDay>
              ))}
            </CalendarGrid>
            
            <Label>Select Time</Label>
            <TimeSlotGrid>
              {timeSlots.map((slot, index) => (
                <TimeSlot 
                  key={index}
                  available={slot.available}
                  selected={selectedTimeSlot === slot.time}
                  onClick={() => toggleTimeSlotSelection(slot)}
                >
                  {slot.time}
                </TimeSlot>
              ))}
            </TimeSlotGrid>
          </ScheduleSection>
          
          <EmergencyContactSection>
            <SectionTitle>Emergency Contacts</SectionTitle>
            <ContactList>
              {emergencyContacts.map(contact => (
                <ContactItem key={contact.id}>
                  <ContactInfo>
                    <ContactName>{contact.name}</ContactName>
                    <ContactRelation>{contact.relation} • {contact.phone}</ContactRelation>
                  </ContactInfo>
                  <ContactActions>
                    <ContactButton secondary>Edit</ContactButton>
                    <ContactButton secondary>Remove</ContactButton>
                  </ContactActions>
                </ContactItem>
              ))}
            </ContactList>
            <AddButton>+ Add Emergency Contact</AddButton>
          </EmergencyContactSection>
          
          <MedicalRequirementsSection>
            <SectionTitle>Medical Requirements</SectionTitle>
            <RequirementList>
              {medicalRequirements.map(req => (
                <RequirementItem key={req.id}>
                  <RequirementInfo>
                    <RequirementTitle>{req.title}</RequirementTitle>
                    <RequirementDescription>{req.description}</RequirementDescription>
                  </RequirementInfo>
                  <ContactActions>
                    <ContactButton secondary>Edit</ContactButton>
                    <ContactButton secondary>Remove</ContactButton>
                  </ContactActions>
                </RequirementItem>
              ))}
            </RequirementList>
            <AddButton>+ Add Medical Requirement</AddButton>
          </MedicalRequirementsSection>
        </MainContent>
        
        <Sidebar>
          <ServiceSummary>
            <SummaryTitle>Service Summary</SummaryTitle>
            <SummaryItem>
              <SummaryLabel>Care Level:</SummaryLabel>
              <SummaryValue>Moderate Care</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Caregiver:</SummaryLabel>
              <SummaryValue>Maria K.</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Schedule:</SummaryLabel>
              <SummaryValue>
                {selectedDays.length > 0 
                  ? `${selectedDays.length} days selected` 
                  : 'No days selected'}
              </SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Time:</SummaryLabel>
              <SummaryValue>{selectedTimeSlot || 'Not selected'}</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Duration:</SummaryLabel>
              <SummaryValue>4 hours</SummaryValue>
            </SummaryItem>
            <TotalPrice>
              <span>Total:</span>
              <span>€120</span>
            </TotalPrice>
            <BookButton>Book Care Service</BookButton>
          </ServiceSummary>
        </Sidebar>
      </ContentContainer>
    </PageContainer>
  );
}

export default ElderCarePage;