import React from "react";
import {NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate=useNavigate();
    
    return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/"  className="nav-link active" aria-current="page">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/products" className="nav-link active" aria-current="page">Products</NavLink></li>
            <li className="nav-item"><NavLink to="/contact" className="nav-link active" aria-current="page">Contact</NavLink></li>
            <li className="nav-item"><NavLink to="/about" className="nav-link active" aria-current="page">About</NavLink></li>
            <li className="nav-item"><NavLink to="/housing" className="nav-link active" aria-current="page">Housing</NavLink></li>
            <li className="nav-item mx-2"><button className="btn btn-outline-success" onClick={()=>navigate('/products')}>Go to Products</button></li>
            <li className="nav-item mx-2"><button className="btn btn-outline-success" onClick={()=>navigate('/',{replace:true})}>Go to Home</button></li>
            {/* replace:true , try clicking browser back button (arrow), the history of the previous page will be skipped and replaced with previous to previous page */}
            </ul>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
