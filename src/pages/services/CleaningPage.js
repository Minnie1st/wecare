import React, { useState } from 'react';
import styled from 'styled-components';
import ImageUploader from '../../components/ImageUploader';

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
    border-color: var(--cleaning-color);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--cleaning-color);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--cleaning-color);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--cleaning-color);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  width: 100%;
  
  &:hover {
    background-color: #5aa0c7;
  }
`;

function CleaningPage() {
  const [formData, setFormData] = useState({
    serviceType: '',
    location: '',
    expectedDate: '',
    description: '',
    images: []
  });

  const serviceTypes = [
    { id: 'deep', name: 'Deep Cleaning' },
    { id: 'window', name: 'Window Cleaning' },
    { id: 'post-construction', name: 'Post-Construction Cleaning' },
    { id: 'office', name: 'Office Cleaning' },
    { id: 'other', name: 'Other' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (files) => {
    setFormData(prev => ({
      ...prev,
      images: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting cleaning service request:', formData);
    // Add backend submission logic here
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Cleaning Service Request</PageTitle>
        <PageDescription>
          Select the type of service and describe your cleaning needs in detail. Our professionals will provide the best service for you.
        </PageDescription>
      </PageHeader>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Service Type</Label>
            <Select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Select a service type</option>
              {serviceTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </Select>
          </FormGroup>

          <FormGroup>
            <Label>Service Location</Label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your address"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Preferred Service Date</Label>
            <Input
              type="date"
              name="expectedDate"
              value={formData.expectedDate}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Detailed Service Description</Label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide details such as area size, specific cleaning areas, special requirements, etc."
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Upload Photos (Optional)</Label>
            <ImageUploader
              onImagesChange={handleImageChange}
              maxImages={5}
              acceptedFileTypes={['image/jpeg', 'image/png']}
            />
          </FormGroup>

          <SubmitButton type="submit">Submit Request</SubmitButton>
        </form>
      </FormContainer>
    </PageContainer>
  );
}

export default CleaningPage;
