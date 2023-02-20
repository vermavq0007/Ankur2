import React from 'react'
import {BrowserRouter as Router,Link} from "react-router-dom";

export default function Header() {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-white" aria-label="Offcanvas navbar large">
     <div className="container-fluid">
      
       <img src='Layman.png' width={250} />
       <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
         <div className="offcanvas-header">
           <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
           <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
         <div className="offcanvas-body">
           <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
           <li><Link className="nav-link px-2 text-black" to="/home">Home</Link></li>
           <li><Link className="nav-link px-2 text-black" to="/home">Gallery</Link></li>
           <li><Link className="nav-link px-2 text-black" to="/home">Board & Plywood</Link></li>       
           <li><Link className="nav-link px-2 text-black" to="/home">Hardware</Link></li>
           <li><Link className="nav-link px-2 text-black" to="/home">Rafer & Earn</Link></li>
           <li><Link className="nav-link px-2 text-black" to="/home">Contact Us</Link></li>
           
           </ul>
           <form className="d-flex mt-3 mt-lg-0" role="search">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
             <button className="btn btn-outline-success" type="submit">Search</button>
           </form>
         </div>
       </div>
     </div>
   </nav>
    
  )
}
