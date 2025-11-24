import demobackground from '../../assets/invertersimage.png';
import {SendOutlined} from '@ant-design/icons';
import { FlatButton } from './FlatButton';
export const InstallationAbout = ()=>{
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
                            <h3 className='animate-down'>Your Trusted Partner for Inverter Installation & Solar Solutions in Lagos</h3>

                            <p>
                                GC Green Concept is a leading provider of **inverter installation**,focused on delivering top-quality green energy installation solutions, **solar energy solutions**, 
                                and **electrical power services** in Lagos and across Nigeria. We are committed to delivering 
                                reliable, eco-friendly, and cost-effective energy systems tailored to homes, offices, and 
                                commercial facilities.  
                                <br /><br />
                                Our services include professional inverter setup, solar system design and installation, electrical 
                                wiring, backup power solutions, and routine maintenance. With a team of certified engineers and a 
                                proven track record of high-quality installations, we ensure every project meets industry 
                                standards and exceeds customer expectations.
                                <br /><br />
                                Whether you need a durable inverter for 24/7 electricity, a hybrid solar solution, or complete 
                                energy consultation, GC Green Concept is your trusted partner for sustainable and uninterrupted power.
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