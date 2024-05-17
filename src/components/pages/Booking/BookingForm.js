import { useState } from 'react';

function BookingForm() {
    const [date, setDate] = useState(new Date().getFullYear());
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const invalidDateErrorMessage = "Please choose a valid date";
    const invalidTimeErrorMessage = "Please choose a valid time";
    const invalidGuestsErrorMessage = "Please enter a valid number of guests between 1 and 10";
    const invalidOccasionErrorMessage = "Please choose a valid occasion";

    const handleSubmit = (e) => {
        console.log('Form submitted');
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
    };

    return (
        <div class="booking-form-container">
            <form class="booking-form"
                onSubmit={handleSubmit}>
                <label for="res-date">Choose date</label>
                <input type="date" id="res-date"/>
                <label for="res-time">Choose time</label>
                <select id="res-time ">
                   <option>17:00</option>
                   <option>18:00</option>
                   <option>19:00</option>
                   <option>20:00</option>
                   <option>21:00</option>
                   <option>22:00</option>
                </select>
                <label for="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"/>
                <label for="occasion">Occasion</label>
                <select id="occasion">
                   <option>Birthday</option>
                   <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation"/>
            </form>
        </div>
    )
};

export default BookingForm;