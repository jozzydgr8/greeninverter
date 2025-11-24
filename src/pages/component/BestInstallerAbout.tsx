import demobackground from '../../assets/invertersimage.png';
import {SendOutlined} from '@ant-design/icons';
import { FlatButton } from './FlatButton';
export const BestInstallerAbout = ()=>{
    const styles = {
    content:{
        minHeight:'60vh'
    },
    backgroundcontainer: {
        
        backgroundSize:'cover',
       
        backgroundRepeat:'no-repeat',
        backgroundPosition:"center center"}
}
    return(
        <section id='about'>
            <div className="container-fluid">
                <h2>About Us</h2>
                <div className="row" style={{margin:'0'}}>
                    <div 
                        className="col-md-6" 
                        style={{
                            ...styles.content,
                            ...styles.backgroundcontainer, 
                            backgroundImage:`url(${demobackground})`
                        }}>
                    </div>

                    <div className="aboutcontent col-md-6" style={styles.content}>
                        <div>
                            <h3 className='animate-down'>Your Trusted Partner & One of the Best Inverter Installers in Lagos</h3>

                            <p>
                                GC Green Concept a trusted name in green energy installation services is widely recognized as one of the <strong>best inverter installers in Lagos</strong>, 
                                delivering reliable, sustainable, and cost-effective power solutions to homes, offices, and commercial 
                                facilities across Nigeria. Our mission is to provide clean energy options through expertly executed 
                                inverter installations, solar system setups, and professional electrical services.
                                <br /><br />
                                We specialize in high-quality inverter installation, solar panel design and integration, electrical 
                                wiring, backup power configuration, and ongoing maintenance. With certified engineers and a proven 
                                track record of excellence, every project we handle meets top industry standards and consistently 
                                exceeds client expectations.
                                <br /><br />
                                Whether you need a dependable inverter system, a hybrid solar setup, or complete energy consultation, 
                                GC Green Concept offers trusted, durable, and affordable solutions—making us the preferred inverter 
                                and solar installation experts in Lagos.
                            </p>

                            <br />
                            <a href='https://wa.link/j0ztbn'>
                                <FlatButton className="btn btndark animate-up">
                                    <>
                                        Contact Us Now {<SendOutlined/>}
                                    </>
                                </FlatButton>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}