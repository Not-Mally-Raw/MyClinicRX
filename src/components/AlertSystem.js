// AlertSystem.js

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;

const AlertSystem = () => {
  return (
    <Container>
      <Title>Alert System</Title>
      <p>
        Customizable notifications for approaching expiry dates.
        Implement your specific functionality here.
      </p>
    </Container>
  );
}

export default AlertSystem;
