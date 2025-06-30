import { FlatButton } from "./FlatButton"

export const Header = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <h1>
                    We are a leading Solar Solution Provider and Electrical/Power Provider
                </h1>
                <div>
                    <FlatButton className="btndark" title="Contact Us"/>
                </div>
            </div>
        </section>
    )
}