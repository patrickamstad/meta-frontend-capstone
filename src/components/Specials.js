import specials from './weeks-specials'
import Card from './Card'
import { Link } from 'react-router-dom'

export default function Specials(){
    return(
        <div className="specials-section">
            <div className="container mx-auto">
                <div className="title grid grid-cols-2 gap-1 items-center">
                    <h2 className="text-4xl font-bold mt-0 text-black text-center md:text-5xl">This weeks specials!</h2>
                    <span> <Link to="/online-menu" className='transition ease-in-out delay-100 bg-[#f4c314] hover:bg-[#495e57] hover:text-white text-black font-bold py-4 px-6 rounded-lg'>Online Menu</Link></span>
                </div>
                <div className="card grid md:grid-cols-3 md:gap-10">
                            {
                                specials.map(p =>{
                                    return <Card key={p.id} id={p.id} url={p.url} title={p.title} price={p.price} desc={p.desc} />
                                })
                            }
						</div>
            </div>
        </div>
    )
}