// InventoryManagement.js

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

const InventoryManagement = () => {
  return (
    <Container>
      <Title>Inventory Management</Title>
      <p>
        Easily add, update, and remove medications, including details like patient history, medicine name, dosage, quantity, and expiry date.
        Implement your specific functionality here.
      </p>
    </Container>
  );
}

export default InventoryManagement;
