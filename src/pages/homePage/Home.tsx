import { About } from "../component/About"
import { Choose } from "../component/Choose"
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"
import { Navbar } from "../component/Navbar"
import { Services } from "../component/Services"

export const Home = ()=>{
    return (
        <>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Choose/>
        <Footer/>
        <a className='whatsappIcon' href='https://wa.link/j0ztbn' target='_blank' rel="noreferrer">
            <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="whatsapp icon"/> chat us now
        </a>
        </>
    )
}   