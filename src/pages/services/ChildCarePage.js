import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`;

const PageHeader = styled.div`
  background-color: var(--child-care-color);
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
  color: var(--child-care-color);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
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
  color: var(--child-care-color);
`;

const ServiceTitle = styled.h3`
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
`;

const ServiceButton = styled.button`
  background-color: var(--child-care-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6d119;
  }
`;

const CaregiversSection = styled.div`
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
  background: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
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
  color: var(--child-care-color);
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
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const QualificationTag = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
`;

const CaregiverButton = styled.button`
  background-color: var(--child-care-color);
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  margin-top: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6d119;
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
  border-radius: 4px;
  cursor: ${props => props.available ? 'pointer' : 'not-allowed'};
  background-color: ${props => {
    if (!props.available) return '#f0f0f0';
    if (props.selected) return 'var(--child-care-color)';
    return 'white';
  }};
  color: ${props => {
    if (!props.available) return '#aaa';
    if (props.selected) return 'white';
    return 'var(--text-primary)';
  }};
  border: 1px solid ${props => props.selected ? 'var(--child-care-color)' : '#eee'};
  
  &:hover {
    background-color: ${props => props.available && !props.selected ? '#f9f9f9' : ''};
  }
`;

const TimeSlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
`;

const TimeSlot = styled.div`
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  cursor: ${props => props.available ? 'pointer' : 'not-allowed'};
  background-color: ${props => {
    if (!props.available) return '#f0f0f0';
    if (props.selected) return 'var(--child-care-color)';
    return 'white';
  }};
  color: ${props => {
    if (!props.available) return '#aaa';
    if (props.selected) return 'white';
    return 'var(--text-primary)';
  }};
  border: 1px solid ${props => props.selected ? 'var(--child-care-color)' : '#eee'};
  
  &:hover {
    background-color: ${props => props.available && !props.selected ? '#f9f9f9' : ''};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

// Input component is used in the form
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--child-care-color);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: var(--child-care-color);
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
    border-color: var(--child-care-color);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--child-care-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e6d119;
  }
`;

const InfoCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
`;

const InfoTitle = styled.h3`
  margin-bottom: 15px;
  color: var(--child-care-color);
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const InfoItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CheckIcon = styled.span`
  color: var(--child-care-color);
  margin-right: 10px;
`;

function ChildCarePage() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  
  const childCareServices = [
    {
      id: 1,
      title: 'Babysitting',
      icon: '👶',
      description: 'Professional babysitting services for infants and toddlers in your home.'
    },
    {
      id: 2,
      title: 'Daycare',
      icon: '🏠',
      description: 'Safe and nurturing daycare environment with educational activities and playtime.'
    },
    {
      id: 3,
      title: 'After-School Care',
      icon: '🎒',
      description: 'Supervision and assistance with homework for school-aged children after school hours.'
    },
    {
      id: 4,
      title: 'Special Needs Care',
      icon: '❤️',
      description: 'Specialized care for children with special needs by trained professionals.'
    },
    {
      id: 5,
      title: 'Overnight Care',
      icon: '🌙',
      description: 'Overnight childcare services for parents who work night shifts or need evening coverage.'
    },
    {
      id: 6,
      title: 'Educational Support',
      icon: '📚',
      description: 'Educational activities and tutoring to support your child\'s learning and development.'
    }
  ];
  
  const caregivers = [
    {
      id: 1,
      name: 'Sophie M.',
      rating: 4.9,
      qualifications: ['Early Childhood Education', 'First Aid Certified', '5+ Years Experience', 'Multilingual'],
      initial: 'S'
    },
    {
      id: 2,
      name: 'David L.',
      rating: 4.8,
      qualifications: ['Child Psychology', 'CPR Certified', '3+ Years Experience', 'Special Needs Training'],
      initial: 'D'
    },
    {
      id: 3,
      name: 'Emma R.',
      rating: 4.7,
      qualifications: ['Elementary Education', 'Art Therapy', '4+ Years Experience', 'Music Education'],
      initial: 'E'
    }
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
        <PageTitle>Child Care Services</PageTitle>
        <PageDescription>
          Professional and reliable childcare services tailored to your family's needs. Our qualified caregivers provide safe, nurturing, and educational care for children of all ages.
        </PageDescription>
      </PageHeader>
      
      <ContentContainer>
        <MainContent>
          <SectionTitle>Our Child Care Services</SectionTitle>
          <ServiceGrid>
            {childCareServices.map(service => (
              <ServiceCard key={service.id}>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServiceButton>Learn More</ServiceButton>
              </ServiceCard>
            ))}
          </ServiceGrid>
          
          <CaregiversSection>
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
          </CaregiversSection>
          
          <ScheduleSection>
            <SectionTitle>Schedule Child Care</SectionTitle>
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
            
            <FormGroup>
              <Label>Number of Children</Label>
              <Select>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3 Children</option>
                <option value="4+">4+ Children</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Ages of Children</Label>
              <Select>
                <option value="">Select age range</option>
                <option value="infant">Infant (0-1 years)</option>
                <option value="toddler">Toddler (1-3 years)</option>
                <option value="preschool">Preschool (3-5 years)</option>
                <option value="school-age">School Age (6-12 years)</option>
                <option value="mixed">Mixed Ages</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Contact Email</Label>
              <Input type="email" placeholder="Your email address" />
            </FormGroup>
            
            <FormGroup>
              <Label>Special Requirements</Label>
              <Textarea placeholder="Please provide any special requirements or instructions..." />
            </FormGroup>
            
            <SubmitButton>Book Child Care</SubmitButton>
          </ScheduleSection>
        </MainContent>
        
        <Sidebar>
          <InfoCard>
            <InfoTitle>Why Choose Our Child Care</InfoTitle>
            <InfoList>
              <InfoItem><CheckIcon>✓</CheckIcon> Qualified and vetted caregivers</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> Personalized care plans</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> Educational activities and development</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> Flexible scheduling options</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> Regular progress reports</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> Safe and nurturing environment</InfoItem>
            </InfoList>
          </InfoCard>
          
          <InfoCard>
            <InfoTitle>Safety Measures</InfoTitle>
            <InfoList>
              <InfoItem><CheckIcon>✓</CheckIcon> Background-checked caregivers</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> First aid and CPR certified</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> Child safety protocols</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> Regular safety training</InfoItem>
              <InfoItem><CheckIcon>✓</CheckIcon> Emergency response plans</InfoItem>
            </InfoList>
          </InfoCard>
          
          <InfoCard>
            <InfoTitle>Frequently Asked Questions</InfoTitle>
            <InfoList>
              <InfoItem><strong>What ages do you provide care for?</strong><br />We offer care for children of all ages, from infants to teenagers.</InfoItem>
              <InfoItem><strong>How are caregivers selected?</strong><br />All caregivers undergo thorough background checks, interviews, and training.</InfoItem>
              <InfoItem><strong>Can I meet the caregiver before booking?</strong><br />Yes, we encourage pre-service meetings to ensure a good match.</InfoItem>
              <InfoItem><strong>What is your cancellation policy?</strong><br />Cancellations made 24 hours in advance receive a full refund.</InfoItem>
            </InfoList>
          </InfoCard>
        </Sidebar>
      </ContentContainer>
    </PageContainer>
  );
}

export default ChildCarePage;