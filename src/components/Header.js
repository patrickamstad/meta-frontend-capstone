import { Link } from 'react-router-dom'
import  DeliciusDish from './images/delicius_dish.webp'
import  DeliciusDishD from './images/delicius_dish_d.webp'

export default function Header(){
    return(
        <header className="main-header bg-[#495e57]">
            <div className="container mx-auto justify-content">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
                    <div className='md:py-28 md:pr-28 p-10 md:p-0'>
                        <h1 className="text-5xl font-bold mt-0 md:mb-5 text-[#f4c314] md:text-6xl"> Little Lemon Restaurant</h1>
                        <h2 className="text-4xl font-bold text-white">Chicago</h2>
                        <p className="text-white mt-5 mb-10"> We are a family owned Mediterranean restaurant, focused on
                            traditional recipes served with a modern twist
                        </p>
                        <Link to="/booking" className='transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#333333] hover:text-white text-black font-bold py-3 px-6 rounded-lg'>Reserve a Table</Link>
                    </div>
                    <div className='pb-5 md:pb-0'>
                        <img className='mx-auto md:hidden md:mt-10 rounded-2xl abolute' src={DeliciusDish} alt="Delicius Dish in Little Lemon Restaurant" width={350}/>
                        <img className='mx-auto md:block rounded-2xl hidden' src={DeliciusDishD} alt="Delicius Dish in Little Lemon Restaurant" width={550}/>
                    </div>
                </div>
            </div>
        </header>
    )
}