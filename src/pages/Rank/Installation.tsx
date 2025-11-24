import { InstallationAbout } from "../component/InstallationAbout"
import { Choose } from "../component/Choose"
import { Footer } from "../component/Footer"
import { InstallationHeader } from "../component/InstallationHeader"
import { Navbar } from "../component/Navbar"
import { Services } from "../component/Services"
import { Helmet } from "react-helmet-async"

export const Installation = ()=>{
    return (
        <>
        <Helmet>
            <title>Inverter Solution in Lagos | Green Energy Installation | Green City Concepts</title>
            <link rel='canonical' href={`https://greencityconcepts.com/inverter-installation-in-lagos`}/>
            <meta
                name="description"
                content="Green City Concepts provides professional inverter solutions in Lagos, offering reliable inverter installation, solar system integration, backup power systems, and electrical services for homes and businesses."
            />
        </Helmet>
        <Navbar/>
        <InstallationHeader/>
        <InstallationAbout/>
        <Services/>
        <Choose/>
        <Footer/>
        <a className='whatsappIcon' href='https://wa.link/j0ztbn' target='_blank' rel="noreferrer">
            <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="whatsapp icon"/> chat us now
        </a>
        </>
    )
}   