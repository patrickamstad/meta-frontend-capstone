import { useState, useCallback, useEffect } from "react";
import {Route, Routes} from "react-router-dom";
import './App.css';
import Chicago from './components/Chicago';
import CustomersSay from './components/CustomersSay';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Specials from './components/Specials';
import PagesHeader from './components/booking/PagesHeader';
import NotFoundPage from './components/404/NotFoundPage';
import BookingForm from "./components/booking/BookingForm";
import ConfirmationPage from "./components/booking/ConfirmationPage";
import BookReservation from "./components/images/book_reservation.webp"



function App() {

  const [y, setY] = useState(window.scrollY);
  const [effect, setEffect] = useState('');

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY ) {
        setEffect('fade-in');
      } else if (y < window.scrollY && window.scrollY >= 200 ) {
        setEffect('fade-out');
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <>
      <Nav animation={effect} />
      <Routes>
          <Route path="/" element={[<main key={"00"}>
                                      <Header key={"01"}  />
                                      <Specials key={"02"} />
                                      <CustomersSay key={"03"} />
                                      <Chicago key={"04"} />
                                    </main>]}
          />
         
          <Route path="/booking" element={[<main key={"05"}><PagesHeader key={"06"} title="Book a Reservation" img={BookReservation}/>
                                                            <BookingForm key={"07"} />
                                            </main>
                                          ]}
          />
          
          <Route path="/booking/confirmation" element={<main key={"08"}><PagesHeader key={"09"} title="Book Confirmation" img={BookReservation} /> <ConfirmationPage key={"10"}/></main>}/>
          <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
