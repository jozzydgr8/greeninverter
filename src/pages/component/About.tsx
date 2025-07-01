import demobackground from '../../assets/invertersimage.jpg';
import {SendOutlined} from '@ant-design/icons';
import { FlatButton } from './FlatButton';
export const About = ()=>{
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
                    <div className=" col-md-6" style={{...styles.content,...styles.backgroundcontainer, backgroundImage:`url(${demobackground})`}}>

                    </div>
                    <div className="aboutcontent col-md-6"style={styles.content}>
                        <div>
                            <h3>Your Trusted Partner in Solar and Electrical Solutions</h3>
                            <p>
                            GC Green Concept is a trusted provider of solar energy solutions and electrical/power services in Nigeria.
                            With a strong commitment to quality, innovation, and customer satisfaction, we specialize in electrical installations and maintenance, solar system setup and support, as well as power supply solutions. Over the years, we have successfully served several clients across the country,
                            consistently meeting regulatory standards and exceeding customer expectations. 

                        </p>
                         <br/>
                        <a href='https://wa.link/j0ztbn'>
                        <FlatButton className="btn btndark" >
                           <>
                            Contact Us Now {<SendOutlined/>}
                            </>
                        </FlatButton></a>
                        
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}