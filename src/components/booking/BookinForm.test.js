import {render, screen, waitFor } from "@testing-library/react";
import BookingForm from './BookingForm';
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

test('Renders the BookingForm labels', () => {

    render(<BrowserRouter><BookingForm /></BrowserRouter>);

    const headingElement = screen.getByText("Let's start!");
    expect(headingElement).toBeInTheDocument();

    const date = screen.getByText(/Select a date:/i);
    expect(date).toBeInTheDocument();

    const times = screen.getByText("Available Times");
    expect(times).toBeInTheDocument();

    const guests = screen.getByText(/Number of Guests/i);
    expect(guests).toBeInTheDocument();

    const occasion = screen.getByText(/Occasion/i);
    expect(occasion).toBeInTheDocument();

    const input = screen.getByLabelText(/Select a date:/i);
    expect(input).toHaveAttribute("type","date");
})

test('Number of Guests when recieved a string', async () => {

    render(<BrowserRouter><BookingForm /></BrowserRouter>);

    const inputGuests = screen.getByRole('textbox', {
        name: /number of guests/i
      })

    userEvent.type(inputGuests, "Carlos");
    expect(await screen.findByText('Please enter a valid number')).toBeInTheDocument()
})

test('Number of Guests when recieved 0 guests', async () => {

    render(<BrowserRouter><BookingForm /></BrowserRouter>);

    const inputGuests = screen.getByRole('textbox', {
        name: /number of guests/i
      })

    userEvent.type(inputGuests, "0");
    expect(await screen.findByText('Number of Guests atleast 1')).toBeInTheDocument()
})

