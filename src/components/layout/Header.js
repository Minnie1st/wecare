import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import LanguageSwitcher from '../LanguageSwitcher';

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
  position: relative;
`;

const AuthButton = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  
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
  const [showDropdown, setShowDropdown] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.login')) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showDropdown]);

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
  
          <LanguageSwitcher />
          <AuthButtons>
            <div style={{ marginRight: '10px', position: 'relative' }}>
              <AuthButton as="div" className="login" style={{ cursor: 'pointer' }} onClick={() => setShowDropdown(!showDropdown)}>
                {t('nav.login')}
              </AuthButton>
              {showDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'white',
                  borderRadius: '4px',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  padding: '8px 0',
                  zIndex: 1000,
                  minWidth: '150px'
                }}>
                  <Link to="/client/login" style={{
                    display: 'block',
                    padding: '8px 16px',
                    color: 'var(--text-dark)',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s'
                  }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(46, 125, 50, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                    {t('I am Client')}
                  </Link>
                  <Link to="/provider/login" style={{
                    display: 'block',
                    padding: '8px 16px',
                    color: 'var(--text-dark)',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s'
                  }} onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(46, 125, 50, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                    {t('I am Provider')}
                  </Link>
                </div>
              )}
            </div>
            <div>
              <AuthButton to="/register" className="register">
                {t('nav.register')}
              </AuthButton>
            </div>
          </AuthButtons>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;