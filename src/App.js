import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './i18n';

// Pages
import HomePage from './pages/HomePage';
import CleaningPage from './pages/services/CleaningPage';
import RepairPage from './pages/services/RepairPage';
import ElderCarePage from './pages/services/ElderCarePage';
import ChildCarePage from './pages/services/ChildCarePage';
import PlumbingPage from './pages/services/PlumbingPage';
import BookingPage from './pages/BookingPage';
import ProviderPortalPage from './pages/provider/ProviderPortalPage';
import ServiceProviderPage from './pages/provider/ServiceProviderPage';
import ServiceRequestPage from './pages/ServiceRequestPage';

// Auth Components
import Login from './components/auth/Login';
import Register from './components/auth/Register';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/cleaning" element={<CleaningPage />} />
          <Route path="/services/repair" element={<RepairPage />} />
          <Route path="/services/plumbing" element={<PlumbingPage />} />
          <Route path="/services/elder-care" element={<ElderCarePage />} />
          <Route path="/services/child-care" element={<ChildCarePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/provider/portal" element={<ProviderPortalPage />} />
          <Route path="/provider/service" element={<ServiceProviderPage />} />
          <Route path="/service-request" element={<ServiceRequestPage />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;