import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const PaymentContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PaymentForm = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const OrderSummary = styled.div`
  background: white;
  border-radius: 8px;
  padding: var(--card-padding);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 20px;
  height: fit-content;
`;

const SummaryTitle = styled.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SummaryLabel = styled.span`
  color: var(--text-secondary);
`;

const SummaryValue = styled.span`
  font-weight: 500;
`;

const TotalPrice = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
`;

const PaymentMethodContainer = styled.div`
  margin-bottom: 30px;
`;

const PaymentMethodTitle = styled.h3`
  margin-bottom: 20px;
  color: var(--primary-color);
`;

const PaymentMethodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
`;

const PaymentMethodOption = styled.div`
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : '#ddd'};
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--primary-color);
  }
`;

const PaymentMethodIcon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PaymentMethodLabel = styled.div`
  font-weight: 500;
`;

const CardDetailsForm = styled.form`
  margin-top: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const PayButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 20px;
  
  &:hover {
    background-color: #3a7bc8;
    transform: translateY(-2px);
  }
`;

function PaymentPage() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolder, setCardHolder] = useState('');

  const handlePaymentMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里添加支付处理逻辑
    console.log('Processing payment with:', {
      method: selectedMethod,
      cardDetails: {
        number: cardNumber,
        expiry: expiryDate,
        cvv,
        holder: cardHolder
      }
    });

    // 模拟支付成功
    setTimeout(() => {
      alert('支付成功！');
      navigate('/client/dashboard');
    }, 1500);
  };

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Payment</PageTitle>
        <PageDescription>Please select a payment method to complete your order</PageDescription>
      </PageHeader>

      <PaymentContainer>
        <PaymentForm>
          <PaymentMethodContainer>
            <PaymentMethodTitle>Select Payment Method</PaymentMethodTitle>
            <PaymentMethodGrid>
              <PaymentMethodOption
                selected={selectedMethod === 'credit_card'}
                onClick={() => handlePaymentMethodSelect('credit_card')}
              >
                <PaymentMethodIcon>💳</PaymentMethodIcon>
                <PaymentMethodLabel>Credit Card</PaymentMethodLabel>
              </PaymentMethodOption>
              <PaymentMethodOption
                selected={selectedMethod === 'paypal'}
                onClick={() => handlePaymentMethodSelect('paypal')}
              >
                <PaymentMethodIcon>🌐</PaymentMethodIcon>
                <PaymentMethodLabel>PayPal</PaymentMethodLabel>
              </PaymentMethodOption>
              <PaymentMethodOption
                selected={selectedMethod === 'swedbank'}
                onClick={() => handlePaymentMethodSelect('swedbank')}
              >
                <PaymentMethodIcon>🏦</PaymentMethodIcon>
                <PaymentMethodLabel>Swedbank</PaymentMethodLabel>
              </PaymentMethodOption>
              <PaymentMethodOption
                selected={selectedMethod === 'seb'}
                onClick={() => handlePaymentMethodSelect('seb')}
              >
                <PaymentMethodIcon>🏦</PaymentMethodIcon>
                <PaymentMethodLabel>SEB Bank</PaymentMethodLabel>
              </PaymentMethodOption>
            </PaymentMethodGrid>
          </PaymentMethodContainer>

          {selectedMethod === 'credit_card' && (
            <CardDetailsForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Cardholder Name</Label>
                <Input
                  type="text"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Card Number</Label>
                <Input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="**** **** **** ****"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Expiry Date</Label>
                <Input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>CVV</Label>
                <Input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="***"
                  required
                />
              </FormGroup>
              <PayButton type="submit">Confirm Payment</PayButton>
            </CardDetailsForm>
          )}

          {(selectedMethod === 'paypal' || selectedMethod === 'swedbank' || selectedMethod === 'seb') && (
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <div style={{ marginBottom: '20px' }}>You will be redirected to the selected payment service</div>
              <PayButton onClick={handleSubmit}>Proceed to Payment</PayButton>
            </div>
          )}
        </PaymentForm>

        <OrderSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryItem>
            <SummaryLabel>Service Type</SummaryLabel>
            <SummaryValue>House Cleaning</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Duration</SummaryLabel>
            <SummaryValue>2 hours</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Service Fee</SummaryLabel>
            <SummaryValue>€20.00</SummaryValue>
          </SummaryItem>
          <SummaryItem>
            <SummaryLabel>Platform Fee</SummaryLabel>
            <SummaryValue>€2.00</SummaryValue>
          </SummaryItem>
          <TotalPrice>
            <span>Total</span>
            <span>€22.00</span>
          </TotalPrice>
        </OrderSummary>
      </PaymentContainer>
    </PageContainer>
  );
}

export default PaymentPage;