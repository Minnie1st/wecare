import React, { useState } from 'react';
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
  font-size: 28px;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const ServiceCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
`;

const ServiceIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--primary-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  margin-right: 15px;
`;

const ServiceInfo = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ServiceTitle = styled.div`
  font-weight: 500;
  margin-bottom: 5px;
`;

const ServiceStatus = styled.div`
  font-size: 14px;
  color: ${props => props.status === 'completed' ? 'green' : 
    props.status === 'scheduled' ? 'orange' : 'var(--text-secondary)'};
`;

const CancelButton = styled.button`
  padding: 6px 12px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d32f2f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function ClientDashboardPage() {
  const { t } = useTranslation();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [cancelReason, setCancelReason] = useState('');

  const handleCancelClick = (service) => {
    setSelectedService(service);
    setShowCancelModal(true);
  };

  const handleConfirmCancel = async () => {
    if (selectedService && cancelReason) {
      // TODO: 调用API取消服务
      console.log('取消服务:', selectedService, '原因:', cancelReason);
      setShowCancelModal(false);
      setCancelReason('');
      setSelectedService(null);
    }
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{t('client.dashboard')}</PageTitle>
        <PageDescription>{t('client.dashboardDesc', 'Manage your service requests and bookings')}</PageDescription>
      </PageHeader>
      
      <DashboardContainer>
        <Sidebar>
          <SidebarMenu>
            <MenuItem>
              <MenuLink href="#" className="active">{t('client.dashboard')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('client.bookings')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('client.services')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('client.messages')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('client.payments')}</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#">{t('client.profile')}</MenuLink>
            </MenuItem>
          </SidebarMenu>
        </Sidebar>
        
        <ContentArea>
          <SectionTitle>{t('client.dashboard')}</SectionTitle>
          
          <StatsGrid>
            <StatCard>
              <StatValue>3</StatValue>
              <StatLabel>{t('client.activeBookings')}</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>12</StatValue>
              <StatLabel>{t('client.completedServices')}</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>2</StatValue>
              <StatLabel>{t('client.pendingRequests')}</StatLabel>
            </StatCard>
          </StatsGrid>
          
          <SectionTitle>{t('client.recentServices')}</SectionTitle>
          
          <ServicesList>
            <ServiceCard>
              <ServiceIcon>🧹</ServiceIcon>
              <ServiceInfo>
                <div>
                  <ServiceTitle>{t('services.cleaning')}</ServiceTitle>
                  <ServiceStatus status="scheduled">{t('client.scheduled')}: 2023-06-15</ServiceStatus>
                </div>
                <CancelButton
                  onClick={() => handleCancelClick({
                    type: 'cleaning',
                    date: '2023-06-15'
                  })}
                >
                  {t('Cancel')}
                </CancelButton>
              </ServiceInfo>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>🔧</ServiceIcon>
              <ServiceInfo>
                <div>
                  <ServiceTitle>{t('services.repair')}</ServiceTitle>
                  <ServiceStatus status="completed">{t('client.completed')}: 2023-06-10</ServiceStatus>
                </div>
                <CancelButton
                  onClick={() => handleCancelClick({
                    type: 'repair',
                    date: '2023-06-10'
                  })}
                  disabled={true}
                >
                  {t('Cancel')}
                </CancelButton>
              </ServiceInfo>
            </ServiceCard>
            
            <ServiceCard>
              <ServiceIcon>👵</ServiceIcon>
              <ServiceInfo>
                <div>
                  <ServiceTitle>{t('services.elderCare')}</ServiceTitle>
                  <ServiceStatus status="pending">{t('client.pending')}</ServiceStatus>
                </div>
                <CancelButton
                  onClick={() => handleCancelClick({
                    type: 'elderCare',
                    status: 'pending'
                  })}
                  disabled={false}
                >
                  {t('Cancel')}
                </CancelButton>
              </ServiceInfo>
            </ServiceCard>
          </ServicesList>
        </ContentArea>
      </DashboardContainer>
      {showCancelModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              width: '400px'
            }}
          >
            <h3 style={{ marginBottom: '20px' }}>{t('Client Cancel Service')}</h3>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px' }}>
                {t('Reason')}:
              </label>
              <textarea
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ddd',
                  minHeight: '100px'
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                onClick={() => {
                  setShowCancelModal(false);
                  setCancelReason('');
                  setSelectedService(null);
                }}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  cursor: 'pointer'
                }}
              >
                {t('Cancel')}
              </button>
              <button
                onClick={handleConfirmCancel}
                disabled={!cancelReason}
                style={{
                  padding: '8px 16px',
                  backgroundColor: cancelReason ? '#f44336' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: cancelReason ? 'pointer' : 'not-allowed'
                }}
              >
                {t('Confirm')}
              </button>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

export default ClientDashboardPage;