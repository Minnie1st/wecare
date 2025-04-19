import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`;

const ProfileHeader = styled.div`
  background-color: #3498db;
  color: white;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
  flex-shrink: 0;
  overflow: hidden;
  border: 4px solid white;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ProfileTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  opacity: 0.9;
`;

const ProfileStats = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
  opacity: 0.9;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContentSection = styled.div`
  background: white;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h3`
  color: #3498db;
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
`;

const ServiceTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--text-primary);
`;

const ServicePrice = styled.div`
  font-size: 16px;
  color: #3498db;
  font-weight: 500;
  margin-bottom: 10px;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewCard = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ReviewAuthor = styled.div`
  font-weight: 500;
`;

const ReviewDate = styled.div`
  color: var(--text-secondary);
  font-size: 14px;
`;

const ReviewContent = styled.p`
  color: var(--text-primary);
  line-height: 1.6;
`;

const Rating = styled.div`
  color: #f1c40f;
  font-size: 18px;
  margin-bottom: 5px;
`;

function ProviderProfilePage() {
  const { t } = useTranslation();

  // 模拟数据
  const provider = {
    name: 'Sarah Johnson',
    title: 'Professional Caregiver',
    image: 'https://example.com/profile.jpg',
    rating: 4.8,
    experience: '5 years',
    completedJobs: 128,
    services: [
      {
        title: 'Elder Care',
        price: '€25/hour',
        description: 'Professional elderly care with medical background'
      },
      {
        title: 'Disability Support',
        price: '€30/hour',
        description: 'Specialized care for people with disabilities'
      },
      {
        title: 'Post-surgery Care',
        price: '€35/hour',
        description: 'Recovery assistance and medical monitoring'
      }
    ],
    reviews: [
      {
        author: 'Michael Brown',
        date: '2024-01-15',
        rating: 5,
        content: 'Sarah was amazing with my mother. Very professional and caring.'
      },
      {
        author: 'Emma Wilson',
        date: '2024-01-10',
        rating: 4.5,
        content: 'Great service, very punctual and attentive to details.'
      }
    ]
  };

  return (
    <PageContainer>
      <ProfileHeader>
        <ProfileImage>
          <img src={provider.image} alt={provider.name} />
        </ProfileImage>
        <ProfileInfo>
          <ProfileName>{provider.name}</ProfileName>
          <ProfileTitle>{provider.title}</ProfileTitle>
          <ProfileStats>
            <span>⭐ {provider.rating} Rating</span>
            <span>📅 {provider.experience} Experience</span>
            <span>✅ {provider.completedJobs} Jobs Completed</span>
          </ProfileStats>
        </ProfileInfo>
      </ProfileHeader>

      <ContentSection>
        <SectionTitle>{t('provider.services')}</SectionTitle>
        <ServiceList>
          {provider.services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServicePrice>{service.price}</ServicePrice>
              <div>{service.description}</div>
            </ServiceCard>
          ))}
        </ServiceList>
      </ContentSection>

      <ContentSection>
        <SectionTitle>{t('provider.reviews')}</SectionTitle>
        <ReviewList>
          {provider.reviews.map((review, index) => (
            <ReviewCard key={index}>
              <ReviewHeader>
                <ReviewAuthor>{review.author}</ReviewAuthor>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewHeader>
              <Rating>
                {'★'.repeat(Math.floor(review.rating))}
                {review.rating % 1 !== 0 && '½'}
                {'☆'.repeat(5 - Math.ceil(review.rating))}
              </Rating>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewCard>
          ))}
        </ReviewList>
      </ContentSection>
    </PageContainer>
  );
}

export default ProviderProfilePage;