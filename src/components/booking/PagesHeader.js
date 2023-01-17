import { Link } from "react-router-dom"

export default function PagesHeader(props){
    return(
        <header className="book-reservation">
            <div className="mx-auto">
                <div className="w-full bg-cover bg-center bg-image" style={{backgroundImage: `url(${props.img})`}}>
                        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-70">
                            <div className="text-center">
                                <h1 className="text-white text-5xl font-semibold  md:text-3xl">{props.title}</h1>
                                <div className="flex" aria-label="Breadcrumb">
                                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                        <li className="inline-flex items-center">
                                        <Link to="/" className="inline-flex items-center text-lg font-medium text-white">
                                            <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                            Home
                                        </Link>
                                        </li>
                                        <li aria-current="page">
                                        <div className="flex items-center">
                                            <svg aria-hidden="true" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                            <span className="ml-1 text-lg font-medium text-white md:ml-2">{props.title}</span>
                                        </div>
                                        </li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                </div>
            </div>
            <div>
            </div>
        </header>
    )
}