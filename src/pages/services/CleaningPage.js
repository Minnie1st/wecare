import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`;

const PageHeader = styled.div`
  background-color: var(--cleaning-color);
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

const CategoryTabs = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
  }
`;

const CategoryTab = styled.button`
  padding: 12px 24px;
  background: ${props => props.active ? 'var(--cleaning-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  border-bottom: 2px solid ${props => props.active ? 'var(--cleaning-color)' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.active ? 'var(--cleaning-color)' : '#f0f0f0'};
  }
`;

const ServiceContent = styled.div`
  margin-top: 30px;
`;

const ServiceDescription = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ServiceFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const FeatureTitle = styled.h3`
  color: var(--cleaning-color);
  margin-bottom: 10px;
`;

const PriceCalculator = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const CalculatorTitle = styled.h3`
  margin-bottom: 20px;
  color: var(--cleaning-color);
`;

const CalculatorForm = styled.form`
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
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const CalculateButton = styled.button`
  background-color: var(--cleaning-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #5aa0c7;
  }
`;

const PriceResult = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

const CleaningChecklist = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ChecklistTitle = styled.h3`
  margin-bottom: 20px;
  color: var(--cleaning-color);
`;

const ChecklistItems = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ChecklistItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CheckIcon = styled.span`
  color: var(--cleaning-color);
  margin-right: 10px;
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

function CleaningPage() {
  const [activeCategory, setActiveCategory] = useState('regular');
  const [price, setPrice] = useState(null);
  
  const categories = [
    { id: 'regular', name: 'Regular Cleaning' },
    { id: 'deep', name: 'Deep Cleaning' },
    { id: 'window', name: 'Window Cleaning' },
    { id: 'post-construction', name: 'Post-construction Cleaning' },
    { id: 'office', name: 'Office Cleaning' },
  ];
  
  const calculatePrice = (e) => {
    e.preventDefault();
    // Simple price calculation logic (would be more complex in a real app)
    const basePrice = activeCategory === 'regular' ? 25 : 
                     activeCategory === 'deep' ? 40 : 
                     activeCategory === 'window' ? 30 : 
                     activeCategory === 'post-construction' ? 50 : 35;
    
    setPrice(basePrice);
  };
  
  const getChecklistItems = () => {
    switch(activeCategory) {
      case 'regular':
        return [
          'Dusting all accessible surfaces',
          'Vacuuming carpets and floors',
          'Mopping hard floors',
          'Cleaning kitchen surfaces',
          'Cleaning bathroom fixtures',
          'Taking out trash'
        ];
      case 'deep':
        return [
          'All regular cleaning tasks',
          'Inside oven cleaning',
          'Inside refrigerator cleaning',
          'Interior window cleaning',
          'Baseboards and door frames',
          'Cabinet fronts cleaning',
          'Light fixture cleaning'
        ];
      case 'window':
        return [
          'Interior window cleaning',
          'Exterior window cleaning',
          'Window sill cleaning',
          'Window track cleaning',
          'Screen cleaning',
          'Window frame cleaning'
        ];
      case 'post-construction':
        return [
          'Dust removal from all surfaces',
          'Debris removal',
          'Detailed cleaning of all rooms',
          'Floor cleaning and polishing',
          'Paint spot removal',
          'Fixture cleaning',
          'Final inspection'
        ];
      case 'office':
        return [
          'Desk and workspace cleaning',
          'Common area cleaning',
          'Restroom sanitization',
          'Kitchen/break room cleaning',
          'Trash removal',
          'Floor cleaning',
          'Glass partition cleaning'
        ];
      default:
        return [];
    }
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Cleaning Services</PageTitle>
        <PageDescription>
          Professional cleaning services tailored to your needs. Choose from our range of cleaning options.
        </PageDescription>
      </PageHeader>
      
      <CategoryTabs>
        {categories.map(category => (
          <CategoryTab 
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </CategoryTab>
        ))}
      </CategoryTabs>
      
      <ServiceContent>
        <ServiceDescription>
          <h2>{categories.find(c => c.id === activeCategory).name}</h2>
          <p>
            {activeCategory === 'regular' && 'Our regular cleaning service covers all the basics to keep your home clean and tidy on a regular basis.'}
            {activeCategory === 'deep' && 'Deep cleaning service tackles the areas that need extra attention, getting to the grime that regular cleaning doesn\'t reach.'}
            {activeCategory === 'window' && 'Our window cleaning service leaves your windows spotless and streak-free, inside and out.'}
            {activeCategory === 'post-construction' && 'After construction or renovation, our specialized cleaning removes all dust, debris, and construction residue.'}
            {activeCategory === 'office' && 'Keep your workplace clean and professional with our office cleaning services tailored for businesses.'}
          </p>
        </ServiceDescription>
        
        <ServiceFeatures>
          <FeatureCard>
            <FeatureTitle>Service Scope</FeatureTitle>
            <p>
              {activeCategory === 'regular' && 'Covers all living areas including kitchen, bathrooms, bedrooms, and living spaces.'}
              {activeCategory === 'deep' && 'Comprehensive cleaning of all areas with special attention to neglected spaces and built-up grime.'}
              {activeCategory === 'window' && 'All accessible windows in your property, including frames, sills, and screens.'}
              {activeCategory === 'post-construction' && 'Entire property affected by construction or renovation work.'}
              {activeCategory === 'office' && 'Reception areas, workstations, meeting rooms, kitchens, and restrooms.'}
            </p>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>Time Estimation</FeatureTitle>
            <p>
              {activeCategory === 'regular' && 'Approximately 2-3 hours for an average-sized home.'}
              {activeCategory === 'deep' && 'Approximately 4-6 hours depending on the size and condition of your home.'}
              {activeCategory === 'window' && 'Approximately 2-4 hours depending on the number and size of windows.'}
              {activeCategory === 'post-construction' && 'Approximately 6-8 hours or more depending on the scope of construction.'}
              {activeCategory === 'office' && 'Varies based on office size, typically 2-4 hours for small to medium offices.'}
            </p>
          </FeatureCard>
        </ServiceFeatures>
        
        <PriceCalculator>
          <CalculatorTitle>Price Calculator</CalculatorTitle>
          <CalculatorForm onSubmit={calculatePrice}>
            <FormGroup>
              <Label>Property Size</Label>
              <Select>
                <option value="small">Small (up to 50 m²)</option>
                <option value="medium">Medium (51-100 m²)</option>
                <option value="large">Large (101-150 m²)</option>
                <option value="xlarge">Extra Large (151+ m²)</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Frequency</Label>
              <Select>
                <option value="once">One-time service</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="monthly">Monthly</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Number of Bedrooms</Label>
              <Select>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Number of Bathrooms</Label>
              <Select>
                <option value="1">1 Bathroom</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
              </Select>
            </FormGroup>
            
            <CalculateButton type="submit">Calculate Price</CalculateButton>
          </CalculatorForm>
          
          {price && (
            <PriceResult>
              Estimated price: €{price} per hour
            </PriceResult>
          )}
        </PriceCalculator>
        
        <CleaningChecklist>
          <ChecklistTitle>Cleaning Checklist</ChecklistTitle>
          <ChecklistItems>
            {getChecklistItems().map((item, index) => (
              <ChecklistItem key={index}>
                <CheckIcon>✓</CheckIcon> {item}
              </ChecklistItem>
            ))}
          </ChecklistItems>
        </CleaningChecklist>
        
        <BookButton>Book Now</BookButton>
      </ServiceContent>
    </PageContainer>
  );
}

export default CleaningPage;