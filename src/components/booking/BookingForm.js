import { useFormik } from 'formik';
import { useEffect, useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import * as Yup from "yup";

// Meta API
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export default function BookingForm(){

        const [times, setTimesArray] = useState([]);
        const refTime = useRef();

        const navigate = useNavigate();

        const today = new Date();
        today.setDate(today.getDate() - 1);
        today.toLocaleString();

        useEffect(()=>{
            if(localStorage.getItem("visit")=== "1"){
                const timeArray = fetchAPI(new Date(JSON.parse(localStorage.getItem("date"))))
                setTimesArray(timeArray)
            }
        },[])

        const formik = useFormik({
            initialValues: {
                date: !localStorage.getItem("visit") ? "" : JSON.parse(localStorage.getItem("date")),
                guests: !localStorage.getItem("visit") ? "" : JSON.parse(localStorage.getItem("guests")),
                occasion: !localStorage.getItem("visit") ? "Birthday" : JSON.parse(localStorage.getItem("occasion")),
                time: !localStorage.getItem("visit") ? "Select a date" : JSON.parse(localStorage.getItem("time"))
            },
            validationSchema: Yup.object({
                date: Yup.date().typeError("Please enter a valid date, format: MM/DD/YYYY").required("Date is a requiered field").min(today, "Date is too early"),
                guests: Yup.number()
                .typeError("Please enter a valid number")
                .required("Guests number is required")
                .min(1, "Number of Guests atleast 1")
                .max(10, "Maximum number of Guests is 10")
            }),
            onSubmit: () => {
                    localStorage.setItem("date", JSON.stringify(formik.values.date));
                    localStorage.setItem("guests", JSON.stringify(formik.values.guests));
                    localStorage.setItem("occasion", JSON.stringify(formik.values.occasion));
                    !localStorage.getItem("visit") ? localStorage.setItem("time", JSON.stringify(formik.values.time)) : localStorage.setItem("time", JSON.stringify(refTime.current.value));;
                    navigate("/booking/confirmation")
            }
        });

        return(
        <div className="booking-form">
            <div className="container mx-auto">
            <h2 className="text-4xl  text-black pb-6 mx-2 md:text-5x">Let's start!</h2>
                <form onSubmit={formik.handleSubmit} >
                    <div className="form-group">
                        <div>
                        <label htmlFor="date" className='pr-3'>Select a date:</label>
                            <span className="datepicker-toggle">
                                <span className="datepicker-toggle-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                        </svg>
                                </span>
                                <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        onChange={(e)=> {
                                            const timeArray = fetchAPI(new Date(e.target.value))
                                            setTimesArray(timeArray)
                                            formik.handleChange(e)
                                        }
                                        }
                                        onBlur={formik.handleBlur}
                                        value={formik.values.date}
                                        className="datepicker-input" />
                            </span>
                            { !formik.errors.date && formik.values.date.length > 0 ? <p className="mt-2 text-sm text-black-600"> Date selected: {formik.values.date} </p> : null }
                            { formik.errors.date ? <p className="mt-2 text-sm text-red-600"> {formik.errors.date} </p> : null }
                        </div>
                    </div>
                    <div className="form-group relative pt-6">
                        <label htmlFor="time" className="block mb-2 text-md font-medium text-gray-900">Available Times</label>
                        <select
                                id="time"
                                name="time"
                                ref={refTime}
                                placeholder="Select a date to see available times"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            { (times.length === 0 || formik.errors.date) && !localStorage.getItem("visit")   ?
                                <option value="Select a date to see available times">Select a date to see available times</option> :
                                times.map(time=> (<option key={time} value={time}>{time}</option>))
                            }
                        </select>
                    </div>
                    <div className="form-group pt-6">
                        <label htmlFor="guests" className="block mb-2 text-md font-medium text-gray-900">Number of Guests</label>
                        <input
                                type="text"
                                id="guests"
                                name="guests"
                                placeholder="0"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.guests}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        { formik.errors.guests ? <p className="mt-2 text-sm text-red-600"> {formik.errors.guests} </p> : null }
                    </div>
                    <div className="form-group relative mb-6 pt-6">
                        <label htmlFor="occasion" className="block mb-2 text-md font-medium text-gray-900">Occasion</label>
                        <select
                                id="occasion"
                                name="occasion"
                                value={formik.values.occasion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Celebration">Celebration</option>
                            <option value="First Time">First Time</option>
                            <option value="Business Meeting">Business Meeting</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="mt-4 transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#495e57] hover:text-white text-black font-bold py-2 px-8 rounded-lg">Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}