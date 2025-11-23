import { BestInstallerAbout } from "../component/BestInstallerAbout"
import { Choose } from "../component/Choose"
import { Footer } from "../component/Footer"
import { BestInstallerHeader } from "../component/BestInstallerHeader"
import { Navbar } from "../component/Navbar"
import { Services } from "../component/Services"
import { Helmet } from "react-helmet-async"

export const BestInstaller = ()=>{
    return (
        <>
        <Helmet>
            <title>Best Inverter Installers in Lagos | Green City Concepts</title>
            <link rel='canonical' href={`https://greencityconcepts.com/best-inverter-installers-in-lagos`}/>
            <meta
                name="description"
                content="Green City Concepts is one of the best inverter installers in Lagos, providing reliable inverter installation, solar solutions, backup power systems, and electrical services for homes and businesses."
            />
        </Helmet>
        <Navbar/>
        <BestInstallerHeader/>
        <BestInstallerAbout/>
        <Services/>
        <Choose/>
        <Footer/>
        <a className='whatsappIcon' href='https://wa.link/j0ztbn' target='_blank'rel="noreferrer">
            <img  src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="whatsapp icon"/> chat us now
        </a>
        </>
    )
}   