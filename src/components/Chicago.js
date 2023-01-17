import RestaurantChefB from './images/restaurantchefB.webp'
import RestaurantTables from './images/restaurant.webp'

export default function Chicago(){
    return(
        <div className="chicago-section relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:items-center ">
                        <div className='md:py-28 md:pr-28 p-10 md:p-0'>
                            <h1 className="text-4xl font-bold mt-0 md:mb-5 text-[#000000] md:text-5xl"> Little Lemon Restaurant</h1>
                            <h2 className="text-3xl font-bold text-black">Chicago</h2>
                            <div className='pt-5 pb-5 md:pb-0'>
                                <img className='mx-auto md:hidden rounded-2xl' src={RestaurantChefB} alt="Delicius Dish in Little Lemon Restaurant" width={350}/>
                            </div>
                            <p className="text-gray mt-5 mb-15"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <p className="text-gray mt-5"> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            </p>
                        </div>
                        <div className='relative pb-5 hidden md:block md:pb-0'>
                            <img className=' rounded-2xl absolute -top-16 left-0' src={RestaurantTables} alt="View of the Restaurant" width={350}/>
                            <img className='absolute -top-23 left-20 mt-32 ml-40 rounded-2xl' src={RestaurantChefB} alt="Delicius Dish in Little Lemon Restaurant" width={350}/>
                        </div>

                    </div>
          </div>
        </div>
    )
}