// Import necessary modules
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define CSS animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled components for homepage elements
const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url('https://img.freepik.com/premium-vector/online-medical-consultation-medicine-professional-doctor-connecting-giving-consultation_566886-2040.jpg') no-repeat center center fixed;
  background-size: cover;
  animation: ${fadeIn} 1s ease-out;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: black;
  margin-bottom: 20px;
  text-shadow: 0 4px 6px rgba(255, 255, 255, 0.3);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: black;
  margin-bottom: 40px;
  text-shadow: 0 4px 6px rgba(255, 255, 255, 0.3);
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 0;
`;

const Feature = styled.div`
  flex: 1 1 300px;
  padding: 20px;
  text-align: center;
  margin: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const RefreshText = styled.a`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;

// HomePage component
function HomePage() {
  const refreshPage = () => {
    window.location.reload(); // Reload the current page
  };

  return (
    <PageContainer>
      <HeroTitle>MyClinicRx</HeroTitle>
      <HeroSubtitle>Medication Management Made Easy</HeroSubtitle>
      <FeaturesSection>
        <Feature>
          <FeatureTitle>Inventory Management</FeatureTitle>
          <FeatureDescription>
            Easily add, update, and remove medications, including details like patient history, medicine name, dosage, quantity, and expiry date.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Expiry Tracking</FeatureTitle>
          <FeatureDescription>
            Automatically calculates and lists medications nearing expiry.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureTitle>Book Appointment</FeatureTitle>
          <FeatureDescription>
            Schedule appointments with ease.
          </FeatureDescription>
        </Feature>
      </FeaturesSection>
      <RefreshText onClick={refreshPage}>Sign Out</RefreshText>
    </PageContainer>
  );
}

export default HomePage;