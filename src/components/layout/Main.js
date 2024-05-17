import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import BookingPage from '../pages/Booking/BookingPage';
import Unavailable from '../pages/Unavailable/UnavailablePage';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
                <Route path="/about" element={<Unavailable />}></Route>
                <Route path="/menu" element={<Unavailable />}></Route>
                <Route path="/order-online" element={<Unavailable />}></Route>
                <Route path="/login" element={<Unavailable />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Main;