import { useState } from "react";
import { Link} from "react-router-dom";

// Meta API
const submitAPI = function(formData) {
    return true;
};

export default function ConfirmationPage(){

    const date = JSON.parse(localStorage.getItem("date"))
    const time = JSON.parse(localStorage.getItem("time"))
    const guests = JSON.parse(localStorage.getItem("guests"))
    const occasion = JSON.parse(localStorage.getItem("occasion"))
    localStorage.setItem("visit", 1)

    const [submit, setSubmit] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        const data = {date: date, time: time, guests : guests, occasion : occasion}
        if(submitAPI(JSON.stringify(data))){
            console.log("Data sent successfully")
            console.log(JSON.stringify(data))
            setSubmit(1)
        }
    }

    return(
        <div className="booking-form">
            <div className="container mx-auto">
                <h2 className="text-4xl  text-black pb-6 mx-2 md:text-5x">Confirm if data is correct!</h2>
                <p className="text-xl pb-4">Booking date: <span className="font-semibold">{date}</span></p>
                <p className="text-xl pb-4">Time: <span className="font-semibold">{time}</span></p>
                <p className="text-xl pb-4">Number of guests: <span className="font-semibold">{guests}</span></p>
                <p className="text-xl pb-4">Reservation type: <span className="font-semibold">{occasion}</span></p>
                <div className="text-center">
                    <Link to="/booking" className="mr-6 mt-4 transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#495e57] hover:text-white text-black font-bold py-2 px-8 rounded-lg">Edit</Link>
                    <Link type="submit" onClick={handleSubmit} className="mt-4 transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#495e57] hover:text-white text-black font-bold py-2 px-8 rounded-lg">Book Now</Link>
                </div>
                { submit ? <p className="mt-4 text-sm text-green-600 text-center"><span className="font-[700]">Well done!</span> Reservation successfully completed.</p> : null}
            </div>
        </div>
    )
}