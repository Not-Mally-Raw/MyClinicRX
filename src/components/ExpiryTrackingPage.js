import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Papa from 'papaparse';
import data from '../components/medicines.csv'; // Ensure this path is correct

// Main container styled component for centering content
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;
`;

// Table styled component for displaying medicine data
const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
`;

// TableHeader styled component for table headers
const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 2px solid black;
  font-weight: bold;
  background-color: #f2f2f2;
  color: black;
`;

// TableRow styled component for table rows
const TableRow = styled.tr`
  border-bottom: 1px solid black;
`;

// TableCell styled component for table cells
const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  color: black; // Default color is black
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

// DaysRemainingCell styled component with conditional coloring based on days remaining
const DaysRemainingCell = styled(TableCell)`
  color: ${({ daysRemaining }) => {
    if (daysRemaining < 7) return 'red';
    if (daysRemaining >= 7 && daysRemaining <= 30) return 'darkyellow';
    return 'darkgreen';
  }};
`;

// SearchBar styled component for the search input
const SearchBar = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 50%;
  font-size: 1rem;
`;

// Function to calculate the number of days remaining until the expiry date
const calculateDaysRemaining = (expiryDate) => {
  const expiry = new Date(expiryDate); // Convert expiry date string to Date object
  const today = new Date(); // Get today's date
  const timeDiff = expiry - today; // Calculate time difference in milliseconds
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  return daysDiff; // Return the number of days remaining
};

const ExpiryTrackingPage = () => {
  // State to store the list of medicines
  const [medicines, setMedicines] = useState([]);
  // State to store the search term entered in the search bar
  const [searchTerm, setSearchTerm] = useState('');

  // Effect hook to parse the CSV data when the component mounts
  useEffect(() => {
    Papa.parse(data, {
      header: true, // Treat the first row as headers
      download: true, // Download the CSV file
      complete: (result) => {
        // Enrich the data with calculated days remaining until expiry
        const enrichedData = result.data.map((medicine) => ({
          ...medicine,
          daysRemaining: calculateDaysRemaining(medicine['Expiry date']),
        }));
        setMedicines(enrichedData); // Update the medicines state with enriched data
      },
    });
  }, []);

  // Filter medicines based on the search term to display relevant results
  const filteredMedicines = medicines.filter((medicine) =>
    medicine['Medicine name'] && medicine['Medicine name'].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <h1>Expiry Tracking Page</h1>
      <SearchBar
        type="text"
        placeholder="Search for a medicine" // Placeholder text for the search bar
        value={searchTerm} // Bind searchTerm state to the input value
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
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
