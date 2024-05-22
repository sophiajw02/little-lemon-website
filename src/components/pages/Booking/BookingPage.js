import { useReducer } from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';
import { fetchAPI, submitAPI } from '../../../utils/api';
import { useNavigate } from "react-router-dom";

const updateTimes = (availableTimes, date) => {
  console.log("available" + date);
  const response = fetchAPI(new Date(date));
  console.log("console" + response);
  return (response.length !== 0) ? response : availableTimes;
}
const initializeTimes = initialAvailableTimes =>
  [...initialAvailableTimes, ...fetchAPI(new Date())];

function BookingPage() {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submit = (data) => {
    const response = submitAPI(data);
    if (response) {
      // alert('Reservation made successfully');
      navigate('/confirmed-booking');
    }
  }

  return (
    <div class="booking-container">
        <h1>Make a Reservation</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submit={submit}
        />
    </div>
  );
};

export default BookingPage;