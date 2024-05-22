import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './components/pages/Home/HomePage';
import BookingPage from './components/pages/Booking/BookingPage';
import Unavailable from './components/pages/Unavailable/UnavailablePage';
import ConfirmedBooking from './components/pages/Booking/ConfirmedBooking';

function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/booking" element={<BookingPage />}></Route>
                  <Route path="/about" element={<Unavailable />}></Route>
                  <Route path="/menu" element={<Unavailable />}></Route>
                  <Route path="/order-online" element={<Unavailable />}></Route>
                  <Route path="/login" element={<Unavailable />}></Route>
                  <Route path="/confirmed-booking" element={<ConfirmedBooking />}></Route>
              </Routes>
          </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
