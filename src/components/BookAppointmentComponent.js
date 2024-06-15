import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('https://img.freepik.com/free-vector/appointment-booking-landing-page_23-2148564513.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5); /* Translucent background */
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px); /* Apply blur effect */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
const AppointmentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  width: 300px;
`;

const AppointmentItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const BookAppointmentComponent = () => {
  const [appointments, setAppointments] = useState({});
  const [patientName, setPatientName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const bookAppointment = (patientName, date, time) => {
    const appointmentKey = `${date}_${time}`;
    if (appointments[appointmentKey]) {
      alert("Sorry, this appointment slot is already booked.");
    } else {
      setAppointments({
        ...appointments,
        [appointmentKey]: patientName
      });
      alert("Appointment booked successfully!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookAppointment(patientName, date, time);
  };

  return (
    <Container>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label>Patient Name:</Label>
          <Input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
          <Label>Date:</Label>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Label>Time:</Label>
          <Input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <Button type="submit">Book Appointment</Button>
        </Form>
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Current Appointments</h2>
        <AppointmentList>
          {Object.keys(appointments).map((key) => (
            <AppointmentItem key={key}>
              {key.replace('_', ' at ')} - {appointments[key]}
            </AppointmentItem>
          ))}
        </AppointmentList>
      </FormContainer>
    </Container>
  );
};

export default BookAppointmentComponent;
