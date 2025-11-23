import { useEffect, useState } from "react";
import { FlatButton } from "./FlatButton";
import { backgroundimages } from "../../data";
import { Space } from "antd";

export const BestInstallerHeader = ()=>{
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
                                Best Inverter Installers in Lagos – Powering a Brighter, Greener Tomorrow
                            </h1>

                            <p>
                                We are recognized as one of the best inverter installers in Lagos, providing reliable, 
                                efficient, and affordable power solutions for homes and businesses. Our certified engineers 
                                specialize in inverter installation, solar system setup, backup power design, and full-scale 
                                renewable energy integration. With fast installation, high-quality equipment, and expert support, 
                                we ensure you enjoy uninterrupted power 24/7.
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