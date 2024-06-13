import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f5f5f7;
  animation: ${fadeIn} 1s ease-out;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #666;
  margin-bottom: 40px;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  background: #fff;
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

function HomePage() {
  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>MyClinicRx</HeroTitle>
        <HeroSubtitle>Medication Management Made Easy</HeroSubtitle>
        <HeroImage src="https://via.placeholder.com/600x400" alt="Hero" />
      </HeroSection>
      <FeaturesSection>
        <Link to="/inventory" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Feature>
            <FeatureTitle>Inventory Management</FeatureTitle>
            <FeatureDescription>
              Easily add, update, and remove medications, including details like patient history, medicine name, dosage, quantity, and expiry date.
            </FeatureDescription>
          </Feature>
        </Link>
        <Link to="/expiry-tracking" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Feature>
            <FeatureTitle>Expiry Tracking</FeatureTitle>
            <FeatureDescription>
              Automatically calculates and lists medications nearing expiry.
            </FeatureDescription>
          </Feature>
        </Link>
        <Link to="/alert-system" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Feature>
            <FeatureTitle>Alert System</FeatureTitle>
            <FeatureDescription>
              Customizable notifications for approaching expiry dates.
            </FeatureDescription>
          </Feature>
        </Link>
      </FeaturesSection>
    </PageContainer>
  );
}

export default HomePage;
