import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 15px 0;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--page-margin);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 8px 12px;
  border-radius: 4px;
  
  &:hover {
    color: var(--primary-color);
    background-color: rgba(46, 125, 50, 0.1);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 20px;
`;

const AuthButton = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &.login {
    color: var(--text-dark);
    border: 1px solid var(--text-dark);
    
    &:hover {
      background-color: rgba(46, 125, 50, 0.1);
    }
  }
  
  &.register {
    color: var(--text-light);
    background-color: var(--primary-color);
    
    &:hover {
      background-color: var(--text-secondary);
    }
  }
`;

function Header() {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">WeCare</Logo>
        <Navigation>
          <NavLink to="/">{t('nav.home')}</NavLink>
          <NavLink to="/services/cleaning">{t('nav.cleaning')}</NavLink>
          <NavLink to="/services/repair">{t('nav.repair')}</NavLink>
          <NavLink to="/services/plumbing">{t('nav.plumbing')}</NavLink>
          <NavLink to="/services/elder-care">{t('nav.elderCare')}</NavLink>
          <NavLink to="/services/child-care">{t('nav.childCare')}</NavLink>
          <NavLink to="/booking">{t('nav.bookNow')}</NavLink>
          <LanguageSwitcher />
          <AuthButtons>
            <AuthButton to="/login" className="login">{t('nav.login')}</AuthButton>
            <AuthButton to="/register" className="register">{t('nav.register')}</AuthButton>
          </AuthButtons>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;