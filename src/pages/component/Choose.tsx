import { Col, Row } from "antd"
import { FlatButton } from "./FlatButton"
import { reason } from "../../data"

export const Choose = ()=>{
    return(
        <section>
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="animate-down">Why Choose GREEN CITY CONCEPTS?</h3>
                        <div>
                        <p>
                        Green Concept delivers clean, reliable, and affordable energy solutions you can trust. 
                        From solar and inverter systems to expert electrical services, we’re committed to quality, 
                        safety, and customer satisfaction. Power your home or business the smart, sustainable way — with Green Concept.
                        </p>
                        <div className="animate-up">
                            <a href='https://wa.link/j0ztbn' target="_blank" rel="noreferrer"><FlatButton className="btndark" title="Learn More"/></a>
                            <a href='tel:08108304732' target="_blank" rel="noreferrer"><FlatButton title="Contact Us" className="btnlight"/></a>
                            
                        </div>
                        </div>


                    </div>

                    <div className="col-md-6">
                        <Row gutter={[16, 24]}>
                            {
                                reason.map((feature, index)=>(
                                    <Col md={12} sm={24} xs={24}>
                                        <div className="choosecard" style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                            <div>{feature.icon}</div>
                                            <h3>{feature.title}</h3>
                                            <p>{feature.desc}</p>
                                        </div>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                </div>
                <div style={{textAlign:'center', padding:'7% 0'}}>
                    <h2 className="animate-left">Need Reliable Inverter Solutions?</h2>
                    <p>Experience the convenience of clean, reliable, and affordable solar power — delivered and installed for your peace of mind.</p>
                    <div className="animate-up">
                        <a href='https://wa.link/j0ztbn' target="_blank" rel="noreferrer">
                        <FlatButton title="Chat us Now" className="btndark"/> 
                        </a>
                
                         <a href="tel:08108304732">+234 810 8304 732</a>
                    </div>
                </div>
            </div>
        </section>
    )
}