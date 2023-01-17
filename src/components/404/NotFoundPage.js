import { Link } from "react-router-dom"

export default function NotFoundPage(){
    return(
        <main className="not-found bg-[#495e57]">
            <div className="container mx-auto justify-content text-center">
                <div className="grid grid-cols-1 gap-2 items-center">
                    <div className='md:py-28 md:pr-28 p-10 md:p-0'>
                        <h1 className="text-5xl font-bold mt-0 md:mb-5 text-[#f4c314] md:text-6xl"> Oops!</h1>
                        <p className="text-white mt-5 mb-10"> This page is under construction</p>
                        <Link to="/" className='transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#333333] hover:text-white text-black font-bold py-3 px-6 rounded-lg'>Back To Home</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}