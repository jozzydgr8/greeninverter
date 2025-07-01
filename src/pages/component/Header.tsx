import { useEffect, useState } from "react";
import { FlatButton } from "./FlatButton";
import { backgroundimages } from "../../data";
import { Space } from "antd";

export const Header = ()=>{
     const [currentIndex, setCurrentIndex] = useState(0);
     useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundimages.length);
    }, 7000); 

    return () => clearInterval(interval); 
  }, []);
    const styles = {
    container:{
      color:'white',
      height:"90vh"
    },
    content:{
      display:"flex",
      justifyContent:'center',
      alignItems:'center',
      height:"100%"
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
                        <div style={{...styles.content, flexDirection:'column'}}>
                            <h1>
                                Powering a Brighter, Greener Tomorrow
                            </h1>
                            <p>
                                We are a leading Solar Solution Provider and Electrical/Power Provider
                            </p>
                            <div>
                                <Space wrap={true} className="headerbutton">
                                    <a href='https://wa.link/j0ztbn' target="_blank">
                                    <FlatButton title="Learn more" className="btndark btn-lg"/>
                                    </a>
                                    <a href='https://wa.link/j0ztbn' target="_blank">
                                    <FlatButton title="Message Us" className="btndark btn-lg"/>
                                    </a>
                                    <a href="tel:08108304732" target="_blank">
                                         <FlatButton title="Call Now" className="btndanger btn-lg" />
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