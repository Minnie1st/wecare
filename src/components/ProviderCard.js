import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const ProviderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Rating = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const ProviderName = styled.h3`
  margin: 0 0 5px;
  color: var(--text-primary);
  font-size: 18px;
`;

const ServiceType = styled.div`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 10px;
`;

const Stats = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 15px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ViewProfileButton = styled(Link)`
  display: block;
  background-color: var(--primary-color);
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;

function ProviderCard({ provider }) {
  return (
    <Card>
      <CardHeader>
        <ProviderImage src={provider.image} alt={provider.name} />
        <Rating>
          ⭐ {provider.rating.toFixed(1)}
        </Rating>
      </CardHeader>
      <CardContent>
        <ProviderName>{provider.name}</ProviderName>
        <ServiceType>{provider.serviceType}</ServiceType>
        <Stats>
          <Stat>👍 {provider.completedJobs} Completed</Stat>
          <Stat>⭐ {provider.rating.toFixed(1)} Rating</Stat>
        </Stats>
        <ViewProfileButton to={`/provider/profile/${provider.id}`}>
          View Profile
        </ViewProfileButton>
      </CardContent>
    </Card>
  );
}

export default ProviderCard;