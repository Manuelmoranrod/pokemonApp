import React from "react";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-element"><Link to='/'>Home</Link></li>
        <li className="nav-element"><Link to='/new'>New</Link></li>
        <li className="nav-element"><Link to='/pokemon/:id'>Details</Link></li>
        <li className="nav-element"><Link to='/search'>Search</Link></li>
      </ul>
    </nav>

  );
};

export default NavBar;
