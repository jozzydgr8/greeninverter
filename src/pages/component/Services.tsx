import { service } from "../../data"

export const Services = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="servicegrid">
                   {
  service.map((serviceItem, index) => (
    <div className="servicergridcontent" key={index}>
      <div
        style={{
          backgroundImage: `url(${serviceItem.image})`,
          height: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          borderRadius: "8px",
        }}
      ></div>
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        padding: "15px",
        gap: "10px",
      }}>
        <h3>{serviceItem.title}</h3>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}>
          {
            serviceItem.service.map((item, i) => (
              <div key={i} style={{
                backgroundColor: "#e0f7e9", // light green tint for energy theme
                color: "#0d684f",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "500",
              }}>
                {item}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  ))
}

                </div>
            </div>
        </section>
    )
}