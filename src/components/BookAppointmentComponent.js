import React, { useState } from "react";
import styled from "styled-components";

// Styled component for the main container with background image and centering
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("https://t3.ftcdn.net/jpg/02/60/79/68/360_F_260796882_QyjDubhDDk0RZXV9z7XBEw9AKnWCizXy.jpg")
    no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
`;

// Styled component for the form container with translucent background and blur effect
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5); /* Translucent background */
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px); /* Apply blur effect */
`;

// Styled component for the form layout
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

// Styled component for the form labels
const Label = styled.label`
  margin-bottom: 10px;
`;

// Styled component for the form inputs
const Input = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

// Styled component for the form submit button
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

// Styled component for the appointment list
const AppointmentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  width: 300px;
`;

// Styled component for each appointment item in the list
const AppointmentItem = styled.li`
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const BookAppointmentComponent = () => {
  // State to store all booked appointments
  const [appointments, setAppointments] = useState({});
  // State to store the patient's name input
  const [patientName, setPatientName] = useState("");
  // State to store the appointment date input
  const [date, setDate] = useState("");
  // State to store the appointment time input
  const [time, setTime] = useState("");

  // Function to book an appointment
  const bookAppointment = (patientName, date, time) => {
    // Create a unique key for the appointment based on date and time
    const appointmentKey = `${date}_${time}`;
    // Check if the appointment slot is already booked
    if (appointments[appointmentKey]) {
      alert("Sorry, this appointment slot is already booked.");
    } else {
      // Update the state with the new appointment
      setAppointments({
        ...appointments,
        [appointmentKey]: patientName,
      });
      alert("Appointment booked successfully!");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Call the bookAppointment function with current state values
    bookAppointment(patientName, date, time);
  };

  return (
    <Container>
      <FormContainer>
        {/* Form for booking appointments */}
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
        {/* Display the list of current appointments */}
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Current Appointments
        </h2>
        <AppointmentList>
          {Object.keys(appointments).map((key) => (
            <AppointmentItem key={key}>
              {key.replace("_", " at ")} - {appointments[key]}
            </AppointmentItem>
          ))}
        </AppointmentList>
      </FormContainer>
    </Container>
  );
};

export default BookAppointmentComponent;
