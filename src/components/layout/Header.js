import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">WeCare</Logo>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services/cleaning">Cleaning</NavLink>
          <NavLink to="/services/repair">Repair</NavLink>
          <NavLink to="/services/plumbing">Plumbing</NavLink>
          <NavLink to="/services/elder-care">Elder Care</NavLink>
          <NavLink to="/services/child-care">Child Care</NavLink>
          <NavLink to="/booking">Book Now</NavLink>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;