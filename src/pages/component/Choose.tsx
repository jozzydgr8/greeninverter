import { Col, Row } from "antd"
import { FlatButton } from "./FlatButton"
import { reason } from "../../data"

export const Choose = ()=>{
    return(
        <section>
            <div className="container-fluid">
                
                <div className="row">
                    <div className="col-md-6">
                        <h3>Why Choose GREEN CITY CONCEPTS</h3>
                        <div>
                        <p>
                        We're not just another gas delivery service. Our commitment to safety reliability and
                        customer satisfaction sets us apart in the industry. With <a>DPR</a> and <a>SON</a> certifications.
                        You can trust that you're getting the highest quality LPG products and service.
                        </p>
                        <div>
                            <FlatButton className="btndark" title="Learn More About Us"/>
                            <FlatButton title="Contact Us" className="btnlight"/>
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
                    <h2>Need Reliable Inverter Solutions?</h2>
                    <p>Experience the convenience of clean, reliable, and affordable solar power — delivered and installed for your peace of mind.</p>
                    <div>
                        <FlatButton title="Chat us Now" className="btndark"/>  
                         <a href="tel:08108304732">+234 810 8304 732</a>
                    </div>
                </div>
            </div>
        </section>
    )
}