import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`;

const PageHeader = styled.div`
  background-color: var(--repair-color);
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

const DiagnosisTool = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const DiagnosisTitle = styled.h2`
  color: var(--repair-color);
  margin-bottom: 20px;
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
    border-color: var(--repair-color);
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
    border-color: var(--repair-color);
  }
`;

const DiagnosisButton = styled.button`
  background-color: var(--repair-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  
  &:hover {
    background-color: #e09620;
  }
`;

const DiagnosisResult = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border-left: 4px solid var(--repair-color);
`;

const RepairItemsSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: var(--repair-color);
`;

const RepairItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const RepairItemCard = styled.div`
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

const RepairItemIcon = styled.div`
  font-size: 32px;
  margin-bottom: 15px;
  color: var(--repair-color);
`;

const RepairItemTitle = styled.h3`
  margin-bottom: 10px;
`;

const RepairItemDescription = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 15px;
`;

const DifficultyIndicator = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DifficultyLabel = styled.span`
  margin-right: 10px;
  font-size: 14px;
  color: var(--text-secondary);
`;

const DifficultyDots = styled.div`
  display: flex;
`;

const DifficultyDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: ${props => props.active ? 'var(--repair-color)' : '#eee'};
`;

const ToolsPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
`;

const ToolTag = styled.span`
  background-color: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: var(--text-secondary);
`;

const PriceEstimator = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
`;

const EstimatorTitle = styled.h2`
  color: var(--repair-color);
  margin-bottom: 20px;
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
  background-color: var(--repair-color);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  grid-column: 1 / -1;
  
  &:hover {
    background-color: #e09620;
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

function RepairPage() {
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [estimateResult, setEstimateResult] = useState(null);
  
  const repairItems = [
    {
      id: 'furniture',
      title: 'Furniture Repair',
      icon: '🪑',
      description: 'Fix broken chairs, tables, cabinets, and other furniture items.',
      difficulty: 2,
      tools: ['Screwdriver', 'Wood glue', 'Clamps', 'Sandpaper'],
      basePrice: 35
    },
    {
      id: 'electrical',
      title: 'Electrical Repair',
      icon: '💡',
      description: 'Fix lighting issues, outlets, switches, and minor electrical problems.',
      difficulty: 3,
      tools: ['Voltage tester', 'Screwdriver', 'Wire stripper', 'Pliers'],
      basePrice: 45
    },
    {
      id: 'appliance',
      title: 'Appliance Repair',
      icon: '🔌',
      description: 'Troubleshoot and fix household appliances like washing machines, dryers, etc.',
      difficulty: 3,
      tools: ['Multimeter', 'Screwdriver set', 'Pliers', 'Socket set'],
      basePrice: 50
    },
    {
      id: 'drywall',
      title: 'Drywall Repair',
      icon: '🧱',
      description: 'Fix holes, cracks, and damage to walls and ceilings.',
      difficulty: 2,
      tools: ['Putty knife', 'Sanding block', 'Joint compound', 'Tape'],
      basePrice: 40
    },
    {
      id: 'door',
      title: 'Door Repair',
      icon: '🚪',
      description: 'Fix squeaky hinges, sticking doors, broken locks, and door frames.',
      difficulty: 2,
      tools: ['Screwdriver', 'Chisel', 'Hammer', 'Lubricant'],
      basePrice: 35
    },
    {
      id: 'floor',
      title: 'Floor Repair',
      icon: '🪵',
      description: 'Fix damaged hardwood, laminate, tile, or vinyl flooring.',
      difficulty: 3,
      tools: ['Pry bar', 'Hammer', 'Saw', 'Adhesive'],
      basePrice: 45
    }
  ];
  
  const handleDiagnosis = (e) => {
    e.preventDefault();
    // In a real app, this would analyze the input and provide a tailored diagnosis
    setDiagnosisResult('Based on your description, this appears to be a moderate difficulty furniture repair issue. We recommend our Furniture Repair service with an estimated cost of €35-50 depending on the exact requirements.');
  };
  
  const handleEstimate = (e) => {
    e.preventDefault();
    // In a real app, this would calculate a more precise estimate based on inputs
    setEstimateResult('€45 - €60');
  };
  
  const renderDifficultyIndicator = (level) => {
    return (
      <DifficultyIndicator>
        <DifficultyLabel>Difficulty:</DifficultyLabel>
        <DifficultyDots>
          <DifficultyDot active={level >= 1} />
          <DifficultyDot active={level >= 2} />
          <DifficultyDot active={level >= 3} />
        </DifficultyDots>
      </DifficultyIndicator>
    );
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Repair Services</PageTitle>
        <PageDescription>
          Professional repair services for your home. From furniture to appliances, we've got you covered.
        </PageDescription>
      </PageHeader>
      
      <DiagnosisTool>
        <DiagnosisTitle>Quick Problem Diagnosis</DiagnosisTitle>
        <DiagnosisForm onSubmit={handleDiagnosis}>
          <FormGroup>
            <Label>Item Type</Label>
            <Select>
              <option value="">Select item type</option>
              <option value="furniture">Furniture</option>
              <option value="electrical">Electrical</option>
              <option value="appliance">Appliance</option>
              <option value="drywall">Drywall/Wall</option>
              <option value="door">Door/Window</option>
              <option value="floor">Flooring</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label>Problem Category</Label>
            <Select>
              <option value="">Select problem category</option>
              <option value="broken">Broken/Damaged</option>
              <option value="not-working">Not Working</option>
              <option value="loose">Loose/Unstable</option>
              <option value="stuck">Stuck/Jammed</option>
              <option value="other">Other</option>
            </Select>
          </FormGroup>
          
          <FormGroup style={{ gridColumn: '1 / -1' }}>
            <Label>Describe the Problem</Label>
            <Textarea placeholder="Please provide details about the issue you're experiencing..."></Textarea>
          </FormGroup>
          
          <DiagnosisButton type="submit">Diagnose Problem</DiagnosisButton>
        </DiagnosisForm>
        
        {diagnosisResult && (
          <DiagnosisResult>
            <strong>Diagnosis Result:</strong> {diagnosisResult}
          </DiagnosisResult>
        )}
      </DiagnosisTool>
      
      <RepairItemsSection>
        <SectionTitle>Common Repair Items</SectionTitle>
        <RepairItemsGrid>
          {repairItems.map(item => (
            <RepairItemCard key={item.id}>
              <RepairItemIcon>{item.icon}</RepairItemIcon>
              <RepairItemTitle>{item.title}</RepairItemTitle>
              <RepairItemDescription>{item.description}</RepairItemDescription>
              {renderDifficultyIndicator(item.difficulty)}
              <ToolsPreview>
                {item.tools.map((tool, index) => (
                  <ToolTag key={index}>{tool}</ToolTag>
                ))}
              </ToolsPreview>
              <div>Starting from €{item.basePrice}/hour</div>
            </RepairItemCard>
          ))}
        </RepairItemsGrid>
      </RepairItemsSection>
      
      <PriceEstimator>
        <EstimatorTitle>Price Estimator</EstimatorTitle>
        <EstimatorForm onSubmit={handleEstimate}>
          <FormGroup>
            <Label>Repair Type</Label>
            <Select>
              <option value="">Select repair type</option>
              <option value="furniture">Furniture Repair</option>
              <option value="electrical">Electrical Repair</option>
              <option value="appliance">Appliance Repair</option>
              <option value="drywall">Drywall Repair</option>
              <option value="door">Door Repair</option>
              <option value="floor">Floor Repair</option>
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
      
      <BookButton>Book Repair Service</BookButton>
    </PageContainer>
  );
}

export default RepairPage;