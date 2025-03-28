import React from 'react';
import { useTranslation } from 'react-i18next';
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

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  height: fit-content;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const MenuLink = styled.a`
  display: block;
  padding: 10px 15px;
  color: var(--text-primary);
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover, &.active {
    background-color: #f5f5f5;
    color: var(--primary-color);
  }
  
  &.active {
    font-weight: 500;
  }
`;

const ContentArea = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;
  color: var(--primary-color);
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
`;

const ServicesList = styled.div`
  margin-top: 30px;
`;

const ServiceCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h3`
  margin-bottom: 5px;
`;

const ServiceDescription = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 10px;
`;

const ServiceMeta = styled.div`
  display: flex;
  gap: 15px;
  font-size: 14px;
  color: var(--text-secondary);
`;

const ServiceActions = styled.div`
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    margin-top: 15px;
    align-self: flex-end;
  }
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.edit {
    background-color: #f0f0f0;
    color: var(--text-primary);
    
    &:hover {
      background-color: #e0e0e0;
    }
  }
  
  &.delete {
    background-color: #fff0f0;
    color: #e53935;
    
    &:hover {
      background-color: #ffe0e0;
    }
  }
`;

const AddServiceButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: #3a7bc8;
  }
`;

function ProviderPortalPage() {
  const { t } = useTranslation();
  
  // 模拟数据
  const stats = [
    { label: t('provider.clients'), value: '24' },
    { label: t('provider.services'), value: '5' },
    { label: t('provider.earnings'), value: '€1,250' },
    { label: t('provider.reviews'), value: '4.8/5' }
  ];
  
  const services = [
    {
      id: 1,
      title: 'Regular House Cleaning',
      description: 'Weekly or bi-weekly cleaning service for residential homes.',
      price: '€25/hr',
      bookings: 12
    },
    {
      id: 2,
      title: 'Deep Cleaning',
      description: 'Thorough cleaning service for homes that need extra attention.',
      price: '€40/hr',
      bookings: 8
    },
    {
      id: 3,
      title: 'Office Cleaning',
      description: 'Professional cleaning service for office spaces and commercial properties.',
      price: '€35/hr',
      bookings: 4
    }
  ];
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('provider.portal')}</PageTitle>
        <PageDescription>
          Manage your services, schedule, and client interactions all in one place.
        </PageDescription>
      </PageHeader>
      
      <DashboardContainer>
        <Sidebar>
          <SidebarMenu>
            <MenuItem>
              <MenuLink href="#" className="active">{t('provider.dashboard')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('provider.services')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('provider.schedule')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('provider.clients')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('provider.reviews')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('provider.earnings')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('provider.editProfile')}</MenuLink>
            </MenuItem>
          </SidebarMenu>
        </Sidebar>
        
        <ContentArea>
          <SectionTitle>{t('provider.dashboard')}</SectionTitle>
          
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
          
          <ServicesList>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <SectionTitle>{t('provider.services')}</SectionTitle>
              <AddServiceButton>
                + {t('provider.addService')}
              </AddServiceButton>
            </div>
            
            {services.map(service => (
              <ServiceCard key={service.id}>
                <ServiceInfo>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceMeta>
                    <span>Price: {service.price}</span>
                    <span>Bookings: {service.bookings}</span>
                  </ServiceMeta>
                </ServiceInfo>
                <ServiceActions>
                  <ActionButton className="edit">Edit</ActionButton>
                  <ActionButton className="delete">Delete</ActionButton>
                </ServiceActions>
              </ServiceCard>
            ))}
          </ServicesList>
        </ContentArea>
      </DashboardContainer>
    </PageContainer>
  );
}

export default ProviderPortalPage;