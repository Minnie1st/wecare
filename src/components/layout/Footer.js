import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 40px 0 20px;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--page-margin);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: var(--small-heading);
  margin-bottom: 20px;
  color: var(--text-primary);
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 10px;
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px var(--page-margin) 0;
  border-top: 1px solid #e0e0e0;
  text-align: center;
  color: var(--text-secondary);
  font-size: var(--caption);
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Services</FooterTitle>
          <FooterLink to="/services/cleaning">Cleaning</FooterLink>
          <FooterLink to="/services/repair">Repair</FooterLink>
          <FooterLink to="/services/plumbing">Plumbing</FooterLink>
          <FooterLink to="/services/elder-care">Elder Care</FooterLink>
          <FooterLink to="/services/child-care">Child Care</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Company</FooterTitle>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/press">Press</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Support</FooterTitle>
          <FooterLink to="/help">Help Center</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contact</FooterTitle>
          <FooterText>Email: info@wecare.com</FooterText>
          <FooterText>Phone: +372 5555 1234</FooterText>
          <FooterText>Address: Tallinn, Estonia</FooterText>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} WeCare. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;