import { useEffect, useState } from "react";
import { FlatButton } from "./FlatButton";
import { backgroundimages } from "../../data";
import { Space } from "antd";

export const InstallationHeader = ()=>{
     const [currentIndex, setCurrentIndex] = useState(0);
     useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundimages.length);
    }, 7000); 

    return () => clearInterval(interval); 
  }, []);
  useEffect(()=>{
        var container = document.querySelector('.headerwrite');
        var containerButton = document.querySelector('.headerbutton');
        container?.classList.add('sectionAnimationLeft');
        containerButton?.classList.add('sectionAnimationUp')
    },[])

    const styles = {
    container:{
      color:'white',
      height:"90vh"
    },
    content:{
      display:"flex",
      justifyContent:'center',
      alignItems:'center',
      height:"100%",
    },
  
  }
   const currentBackground = backgroundimages[currentIndex].background;
    return(
        <section>
            <div className="header-background"
                 style={{
                 backgroundImage: `url(${currentBackground})`
            }}>
                <div className="header-gradient-background">
                    <div className="container-fluid" style={styles.container}>
                        <div style={{...styles.content, flexDirection:'column', textAlign:'center'}}>
                            <h1 className="headerwrite">
                                Reliable Inverter Installation in Lagos – Powering a Brighter, Greener Tomorrow
                            </h1>

                            <p>
                                We are a trusted Solar and Inverter Installation Service Provider in Lagos, delivering top-quality 
                                power solutions, backup systems, and renewable energy services for homes and businesses. 
                                Our expert engineers provide fast, reliable, and affordable inverter setup, maintenance, 
                                and complete solar power integration.
                            </p>

                            <div className="headerbutton">
                                <Space wrap={true} className="headerbutton">
                                    <a href='https://wa.link/j0ztbn' target="_blank">
                                        <FlatButton title="Learn More About Our Inverter Services" className="btndark btn-lg"/>
                                    </a>

                                    <a href='https://wa.link/j0ztbn' target="_blank">
                                        <FlatButton title="Message Us on WhatsApp" className="btndark btn-lg"/>
                                    </a>

                                    <a href="tel:08108304732" target="_blank">
                                        <FlatButton title="Call Now for Inverter Installation" className="btndanger btn-lg" />
                                    </a>
                                </Space>
                            </div>

                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}