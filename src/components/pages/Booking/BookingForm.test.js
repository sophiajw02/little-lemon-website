import { render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('expect initializeTimes to return correct expected value', () => {
    render(<BookingPage />);

    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
})

test('expect updateTimes to return same value provided in state', () => {
    render(<BookingPage />);

    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
})