import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Papa from 'papaparse';
import data from '../components/medicines.csv'; // Ensure this path is correct

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
`;

const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid black;
  font-weight: bold;
  background-color: #f2f2f2;
  color: black;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid black;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  color: black; /* Default color is black */
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const DaysRemainingCell = styled(TableCell)`
  color: ${({ daysRemaining }) => {
    if (daysRemaining < 7) return 'red';
    if (daysRemaining >= 7 && daysRemaining <= 30) return 'darkyellow';
    return 'darkgreen';
  }};
`;

const SearchBar = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 50%;
  font-size: 1rem;
`;

const calculateDaysRemaining = (expiryDate) => {
  const expiry = new Date(expiryDate);
  const today = new Date();
  const timeDiff = expiry - today;
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
};

const ExpiryTrackingPage = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    Papa.parse(data, {
      header: true,
      download: true,
      complete: (result) => {
        const enrichedData = result.data.map((medicine) => ({
          ...medicine,
          daysRemaining: calculateDaysRemaining(medicine['Expiry date']),
        }));
        setMedicines(enrichedData);
      },
    });
  }, []);

  const filteredMedicines = medicines.filter((medicine) =>
    medicine['Medicine name'] && medicine['Medicine name'].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <h1>Expiry Tracking Page</h1>
      <SearchBar
        type="text"
        placeholder="Search for a medicine"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table>
        <thead>
          <tr>
            <TableHeader>Medicine Name</TableHeader>
            <TableHeader>Days Remaining</TableHeader>
            <TableHeader>Expiry Date</TableHeader>
            <TableHeader>Quantity</TableHeader>
          </tr>
        </thead>
        <tbody>
          {filteredMedicines.map((medicine, index) => (
            <TableRow key={index}>
              <TableCell bold>{medicine['Medicine name']}</TableCell>
              <DaysRemainingCell daysRemaining={medicine.daysRemaining}>
                {medicine.daysRemaining}
              </DaysRemainingCell>
              <TableCell>{medicine['Expiry date']}</TableCell>
              <TableCell>{medicine.Quantity}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </PageContainer>
  );
};

export default ExpiryTrackingPage;
