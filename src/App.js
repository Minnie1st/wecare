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
import ClientDashboardPage from './pages/client/ClientDashboardPage';
import ProviderProfilePage from './pages/provider/ProviderProfilePage';
import PaymentPage from './pages/PaymentPage';

// Auth Components
import UnifiedLogin from './components/auth/UnifiedLogin';
import Register from './components/auth/Register';
import ClientLoginPage from './pages/auth/ClientLoginPage';
import ClientRegisterPage from './pages/auth/ClientRegisterPage';
import ProviderLoginPage from './pages/auth/ProviderLoginPage';
import ProviderRegisterPage from './pages/auth/ProviderRegisterPage';
import RegistrationSuccessPage from './pages/auth/RegistrationSuccessPage';

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
          <Route path="/login" element={<UnifiedLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/client/login" element={<ClientLoginPage />} />
          <Route path="/client/register" element={<ClientRegisterPage />} />
          <Route path="/client/register-success" element={<RegistrationSuccessPage />} />
          <Route path="/provider/login" element={<ProviderLoginPage />} />
          <Route path="/provider/register" element={<ProviderRegisterPage />} />
          <Route path="/provider/register-success" element={<RegistrationSuccessPage />} />
          <Route path="/client/dashboard" element={<ClientDashboardPage />} />
          <Route path="/provider/portal" element={<ProviderPortalPage />} />
          <Route path="/provider/service" element={<ServiceProviderPage />} />
          <Route path="/provider/services" element={<ProviderPortalPage />} />
          <Route path="/provider/schedule" element={<ProviderPortalPage />} />
          <Route path="/provider/profile" element={<ProviderPortalPage />} />
          <Route path="/provider/profile/:id" element={<ProviderProfilePage />} />
          <Route path="/service-request" element={<ServiceRequestPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;