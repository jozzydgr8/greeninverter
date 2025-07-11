import greenLogo from '../../assets/greeninverterlogo.jpg'


export const Navbar = ()=>{
    return(

                <>
                <nav className="navbar navbar-expand-lg " data-bs-theme='light'>
                  <div className="container-fluid">
                
                      <img className='navbar-brand' src={greenLogo} alt='logo'/>
                    
                    {/* <a className='navbar-brand'>Jozzy Codes</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                          <a href={'/'} className={'nav-link'}>Home</a>
                          
                        </li>
                        
                        <li className="nav-item">
                        <a href={'/#services'} className={'nav-link'}>Services</a>
                        </li>
                        
                      
                        <li className="nav-item">
                        <a href='https://wa.link/j0ztbn' target='_blank'><button className='btn btndark'>Contact Us</button></a>
                          {/* <a><button className='btn' onClick={onClick}> Toggle Night </button></a> */}
                        
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                </>
    )
}