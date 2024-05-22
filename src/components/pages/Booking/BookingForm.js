import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatchOnDateChange, submit }) =>  {
    const defDate = new Date().toISOString().split('T')[0];
    const defTime = availableTimes[0];
    const minGuests = 1;
    const defOccasion = 'Birthday';

    const [date, setDate] = useState(defDate);
    const [time, setTime] = useState(defTime);
    const [guests, setGuests] = useState(minGuests);
    const [occasion, setOccasion] = useState(defOccasion);

    const handleDate = (e) => {
        setDate(e.target.value);
        dispatchOnDateChange(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit({ date, time, guests, occasion });
        console.log('Form submitted');
        console.log({ date, time, guests, occasion });
    };

    return (
        <div class="booking-form-container">
            <form class="booking-form"
                onSubmit={handleSubmit}>
                <label for="res-date">Date</label>
                <input type="date" id="res-date"
                    value={date}
                    onChange={handleDate}
                />
                <label for="res-time">Time</label>
                <select id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}>
                   {availableTimes.map(times =>
                        <option data-testid="booking-time-option" key={times}>
                          {times}
                        </option>
                    )}
                </select>
                <label for="guests">Number of Guests</label>
                <input type="number" placeholder={guests} min="1" max="10" id="guests"
                    onChange={e => setGuests(e.target.value)}/>
                <label for="occasion">Occasion</label>
                <select id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}>
                   <option>Birthday</option>
                   <option>Anniversary</option>
                </select>
                <input class="reservation-submit" type="submit" value="Make Your Reservation"/>
            </form>
        </div>
    )
};

export default BookingForm;