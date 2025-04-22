import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProviderCard from '../components/ProviderCard';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--page-margin);
`;

const HeroSection = styled.div`
  background-color: var(--primary-color);
  color: white;
  padding: 60px 0;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 20px;
`;

const HeroDescription = styled.p`
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 30px;
`;

const HeroButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: var(--primary-color);
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: var(--large-heading);
`;

const ServiceNavigation = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceNavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.color || 'var(--primary-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: white;
  font-size: 32px;
`;

const ServiceName = styled.span`
  font-weight: 500;
  text-align: center;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const ServiceCard = styled.div`
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

const ServiceCardHeader = styled.div`
  height: 160px;
  background-color: ${props => props.color || 'var(--primary-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 48px;
`;

const ServiceCardContent = styled.div`
  padding: var(--card-padding);
`;

const ServiceCardTitle = styled.h3`
  margin-bottom: 10px;
  color: var(--text-primary);
`;

const ServiceCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: var(--text-secondary);
  font-size: var(--caption);
`;

const ServiceCardPrice = styled.span`
  font-weight: 500;
`;

const ServiceCardRating = styled.div`
  display: flex;
  align-items: center;
`;

const ServiceCardButton = styled(Link)`
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

const TestimonialSection = styled.div`
  margin-bottom: 60px;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-weight: 500;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.div`
  font-weight: 500;
`;

const AuthorRole = styled.div`
  font-size: var(--caption);
  color: var(--text-secondary);
`;

const HomePage = () => {
  const { t } = useTranslation();
  const featuredProviders = [
    {
      id: 1,
      name: 'Mari Tamm',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      serviceType: 'Elder Care',
      rating: 4.9,
      completedJobs: 128
    },
    {
      id: 2,
      name: 'Liisa Kask',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      serviceType: 'Child Care',
      rating: 4.8,
      completedJobs: 96
    },
    {
      id: 3,
      name: 'Andres Saar',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      serviceType: 'Home Repair',
      rating: 4.9,
      completedJobs: 156
    }
  ];

  const serviceCategories = [
    { id: 'cleaning', name: 'Cleaning', icon: '🧹', color: 'var(--cleaning-color)', path: '/services/cleaning' },
    { id: 'repair', name: 'Repair', icon: '🔧', color: 'var(--repair-color)', path: '/services/repair' },
    { id: 'plumbing', name: 'Plumbing', icon: '🚿', color: 'var(--plumbing-color)', path: '/services/plumbing' },
    { id: 'elder-care', name: 'Elder Care', icon: '❤️', color: 'var(--elder-care-color)', path: '/services/elder-care' },
    { id: 'child-care', name: 'Child Care', icon: '👶', color: 'var(--child-care-color)', path: '/services/child-care' },
  ];
  
  const popularServices = [
    { id: 'regular-cleaning', name: 'Regular Cleaning', price: '€25/hour', rating: 4.8, providers: 28, category: 'cleaning', path: '/services/cleaning' },
    { id: 'deep-cleaning', name: 'Deep Cleaning', price: '€40/hour', rating: 4.9, providers: 15, category: 'cleaning', path: '/services/cleaning' },
    { id: 'furniture-repair', name: 'Furniture Repair', price: '€35/hour', rating: 4.7, providers: 12, category: 'repair', path: '/services/repair' },
    { id: 'plumbing-repair', name: 'Plumbing Repair', price: '€40/hour', rating: 4.8, providers: 10, category: 'plumbing', path: '/services/plumbing' },
    { id: 'elder-companion', name: 'Elder Companion', price: '€30/hour', rating: 4.9, providers: 18, category: 'elder-care', path: '/services/elder-care' },
    { id: 'child-sitting', name: 'Child Sitting', price: '€28/hour', rating: 4.8, providers: 22, category: 'child-care', path: '/services/child-care' },
  ];
  
  const testimonials = [
    { id: 1, text: 'The cleaning service was excellent! My apartment has never been this clean. Will definitely book again.', author: 'Maria K.', role: 'Regular Customer' },
    { id: 2, text: 'The repair technician was professional and fixed my furniture perfectly. Great service!', author: 'John D.', role: 'New Customer' },
    { id: 3, text: 'I\'m very satisfied with the elder care service. My mother is happy with her caregiver.', author: 'Anna S.', role: 'Regular Customer' },
  ];
  
  const getCategoryColor = (categoryId) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'var(--primary-color)';
  };
  
  const getCategoryIcon = (categoryId) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : '🔍';
  };
  
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>{t('home.hero.title')}</HeroTitle>
        <HeroDescription>
          {t('home.hero.subtitle')}
        </HeroDescription>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <HeroButton to="/service-request">
            {t('home.hero.cta')}
          </HeroButton>
          
        </div>
      </HeroSection>
      
      <SectionTitle>{t('home.featured.title', 'Featured Service Providers')}</SectionTitle>
      <ServiceGrid>
        {featuredProviders.map(provider => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </ServiceGrid>

      <SectionTitle>{t('home.services.title', 'Our Services')}</SectionTitle>
      <ServiceNavigation>
        {serviceCategories.map(category => (
          <ServiceNavItem key={category.id} to={category.path}>
            <ServiceIcon color={category.color}>{category.icon}</ServiceIcon>
            <ServiceName>{category.name}</ServiceName>
          </ServiceNavItem>
        ))}
      </ServiceNavigation>
      
      <SectionTitle>{t('home.popular.title', 'Popular Services')}</SectionTitle>
      <ServiceGrid>
        {popularServices.map(service => (
          <ServiceCard key={service.id}>
            <ServiceCardHeader color={getCategoryColor(service.category)}>
              {getCategoryIcon(service.category)}
            </ServiceCardHeader>
            <ServiceCardContent>
              <ServiceCardTitle>{service.name}</ServiceCardTitle>
              <ServiceCardInfo>
                <ServiceCardPrice>From {service.price}</ServiceCardPrice>
                <ServiceCardRating>
                  ★ {service.rating} ({service.providers} providers)
                </ServiceCardRating>
              </ServiceCardInfo>
              <ServiceCardButton to={`/booking?service=${service.id}`}>{t('home.services.bookService', 'Book a Service')}</ServiceCardButton>
            </ServiceCardContent>
          </ServiceCard>
        ))}
      </ServiceGrid>
      
      <SectionTitle>{t('home.testimonials.title', 'What Our Customers Say')}</SectionTitle>
      <TestimonialSection>
        <TestimonialGrid>
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id}>
              <TestimonialText>"{testimonial.text}"</TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>{testimonial.author.charAt(0)}</AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.author}</AuthorName>
                  <AuthorRole>{testimonial.role}</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialSection>
    </PageContainer>
  );
}

export default HomePage;