import { service } from "../../data"

export const Services = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="servicegrid">
                    {
                        service.map((service,index)=>(
                            <div className="servicergridcontent" key={index}>
                                <div
                                    style={{
                                    backgroundImage: `url(${service.image})`,
                                    height: "200px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                    backgroundRepeat: "no-repeat",
                                    }}
                                ></div>
                                <div
                                    style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flex: 1,
                                    padding: "15px",
                                    }}
                                >
                                <h3>{service.title}</h3>
                                <ul>
                                    {
                                    service.service.map((service, index)=>(
                                        <li>
                                            {service}
                                        </li>
                                    ))
                                }
                                </ul>
                                
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}