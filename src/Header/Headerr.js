import React from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom";

export default function Header() {
  return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-warning" aria-label="Offcanvas navbar large">
     <div className="container-fluid">
    
       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
         <div className="offcanvas-header">
           <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
           <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div className="offcanvas-body">
           <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
           <img src='cl.png' width={15} height={40}/>
           <li><Link className="nav-link px-2 text-black" to="/home">+ 91 8929368885</Link></li>
           <img src='ltr.png' width={15} height={40}/>
           <li><Link className="nav-link px-2 text-black" to="/home">ankur.gupta@gmail.com</Link></li>
           
           </ul>
         
         </div>
       </div>
     </div>
   </nav>
    
  )
}
