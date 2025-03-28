import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ImageUploader from '../../components/ImageUploader';

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

const FormSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
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
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
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
    border-color: var(--primary-color);
  }
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

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin: 0 auto;
  
  &:hover {
    background-color: #3a7bc8;
    transform: translateY(-2px);
  }
`;

const ServiceProviderPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceType: '',
    title: '',
    description: '',
    price: '',
    location: '',
    availability: '',
    experience: '',
    images: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (files) => {
    setFormData({
      ...formData,
      images: files
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting service details:', formData);
    // API call logic can be added here
    
    // Redirect to service provider portal upon success
    alert('Service successfully posted!');
    navigate('/provider/portal');
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Post a Service</PageTitle>
        <PageDescription>Describe your service in detail, upload relevant images, and attract more clients.</PageDescription>
      </PageHeader>
      
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Basic Information</SectionTitle>
            
            <FormGroup>
              <Label>Service Type</Label>
              <Select 
                name="serviceType" 
                value={formData.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select a service type</option>
                <option value="cleaning">Cleaning</option>
                <option value="repair">Repair</option>
                <option value="plumbing">Plumbing</option>
                <option value="elderCare">Elderly Care</option>
                <option value="childCare">Child Care</option>
                <option value="other">Other</option>
              </Select>
            </FormGroup>
            
            <FormGroup>
              <Label>Service Title</Label>
              <Input 
                type="text" 
                name="title" 
                value={formData.title}
                onChange={handleChange}
                placeholder="Briefly describe your service, e.g., Professional Home Cleaning" 
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label>Service Description</Label>
              <Textarea 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your service, unique features, and advantages" 
                required
              />
            </FormGroup>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Service Details</SectionTitle>
            <FormGroup>
              <Label>Price</Label>
              <Input 
                type="text" 
                name="price" 
                value={formData.price}
                onChange={handleChange}
                placeholder="Price, e.g., $50/hour or $200 per session" 
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Location</Label>
              <Input 
                type="text" 
                name="location" 
                value={formData.location}
                onChange={handleChange}
                placeholder="Serviceable locations" 
                required
              />
            </FormGroup>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Upload Images</SectionTitle>
            <ImageUploader onChange={handleImageChange} maxImages={5} label="Upload service-related images" />
          </FormSection>
          
          <SubmitButton type="submit">Post Service</SubmitButton>
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default ServiceProviderPage;
