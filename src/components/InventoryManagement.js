import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import csv from 'csvtojson';
import medicinesCSV from './medicines.csv'; // Adjust the path based on your project structure

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

const Input = styled.input`
  width: 50px;
  padding: 5px;
  margin: 0 10px;
`;

const InventoryManagement = () => {
  const [medicines, setMedicines] = useState([]);
  const [quantities, setQuantities] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(medicinesCSV);
      const text = await response.text();
      const json = await csv().fromString(text);
      setMedicines(json);
    } catch (error) {
      console.error("Error fetching and parsing the CSV file", error);
    }
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    setQuantities({
      ...quantities,
      [index]: value
    });
  };

  const handleAdd = (index) => {
    const updatedMedicines = [...medicines];
    const quantityToAdd = parseInt(quantities[index]) || 0;
    updatedMedicines[index]['Quantity'] = parseInt(updatedMedicines[index]['Quantity']) + quantityToAdd;
    setMedicines(updatedMedicines);
  };

  const handleSubtract = (index) => {
    const updatedMedicines = [...medicines];
    const quantityToSubtract = parseInt(quantities[index]) || 0;
    if (updatedMedicines[index]['Quantity'] >= quantityToSubtract) {
      updatedMedicines[index]['Quantity'] = parseInt(updatedMedicines[index]['Quantity']) - quantityToSubtract;
    } else {
      updatedMedicines[index]['Quantity'] = 0;
    }
    setMedicines(updatedMedicines);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Inventory Management</h1>
      <Table>
        <thead>
          <tr>
            <Th>Medicine Name</Th>
            <Th>Expiry Date</Th>
            <Th>Quantity</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <Td>{medicine['Medicine name']}</Td>
              <Td>{medicine['Expiry date']}</Td>
              <Td>{medicine['Quantity']}</Td>
              <Td>
                <Input
                  type="number"
                  min="0"
                  value={quantities[index] || ''}
                  onChange={(e) => handleChange(e, index)}
                />
                <Button onClick={() => handleAdd(index)}>Add</Button>
                <Button onClick={() => handleSubtract(index)}>Subtract</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default InventoryManagement;
