import { useEffect, useState } from 'react'
import axios from "axios";

const Navbar = () => {

    
    return ( 
        <>
        {/* <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">Larger shadow</div> */}
        <div className='container-fluid bg-primary pt-2 shadow-sm'>
            <div className='row'>
            <div className='col-4'>
            <nav class="navbar navbar-expand-lg ">
            <ul className="navbar-nav mb-1 ">
                <li className="nav-item">
                <a className="nav-link text-light " aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">Link</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" >Disabled</a>
                </li>
            </ul>
            </nav>
            </div>
            
            <div className='col-4'>
            <form className="d-flex " role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-secondary" type="submit">Search</button>
            </form>
            </div>
            
            <div className='col-4 justfy-content-end'>
            <button className='btn btn-success rounded-pill me-2 '>
                    Login
            </button>
            <button className='btn btn-info rounded-pill '>
                    Register
            </button>
            </div>
            </div>
        </div>

        
        </>

        

     );
}
 
export default Navbar;