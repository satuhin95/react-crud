import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (

         <nav className="navbar navbar-expand-lg navbar-dark bg-success">
             <div className="container">
  <NavLink to="/" className="navbar-brand">React</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <NavLink to="/"  exact className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" exact className="nav-link">About</NavLink>
      </li>
      <li className="nav-item">
    
        <NavLink to="/contact" exact className="nav-link">Contact</NavLink>
      </li>
    </ul>
  </div>
  <Link className="btn btn-outline-light" to="/users/add">Add New</Link>
  </div>
</nav>
            
    
    );
};

export default Navbar;