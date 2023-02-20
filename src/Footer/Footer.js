import React from 'react'
import './Footer.css'

export default function Footer() {
  return (

    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Home</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Features</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Pricing</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">FAQs</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">About</a></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>CATEGORIES</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Buy & Sale</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Merchant</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Giving back</a></li>
              <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Help & Support</a></li>
              
            </ul>
          </div>
    
    
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
    
        {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="/"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
          </ul>
        </div> */}

<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <h6>&copy; Copyright2023@ ankur.gupta All rights reserved</h6>
      </div>
      </footer>
    </div>
  )
}
