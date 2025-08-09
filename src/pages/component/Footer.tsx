import {SendOutlined} from '@ant-design/icons'
export const Footer =()=>{
    return(
        <section id="footer-section">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                    <h3>About GREEN CITY CONCEPTS</h3>
                    <p>
                    We are a leading Solar Solution, Provider and Electrical/Power Provider.
                    </p>
                </div>
                <div className="col-md-4">
                    <h3>Contact Section</h3>
                    Location: Lagos Nigeria, Lagos. <br/><br/>
                    Phone No: <a href="tel:08108304732">+234 810 8304 732</a> <br/><br/>
                    Email: <a href="mailto:info@greenenergyinstallation.com">info@greenenergyinstallation.com</a> <br/><br/>
                </div>
                
                <div className="col-md-4">
                    <h3>Quick Links</h3>
                    <a href="tel:08108304732">Contact Us</a> <hr/>
                    <a href="#about">About</a> <hr/>
                    <a href="#services">Our Services</a><hr/>
                    <a href='https://wa.link/j0ztbn' target="_blank">Send Us a message on Whatsapp <SendOutlined/></a>
                </div>
              </div>

             
            </div>
            <hr/>
            <footer style={{padding:'0 3%'}}><a href='https://jozzycodes.com' target='_blank'>© GREEN CONCEPT 2025</a></footer>
        </section>
    )
}
