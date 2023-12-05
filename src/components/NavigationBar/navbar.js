import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png'
import contactUs from '../../assets/contactUs.png'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
          <Link to="/" className="desktopMenuListItem">
            Home
          </Link>
          <Link to="/exercises" className="desktopMenuListItem">
            Exercises
          </Link>
          <Link to="/symptom-tracker" className="desktopMenuListItem">
            Symptom Tracker
          </Link>
        </div>
        <Link to="/contact-us" className="desktopMenuButton">
          <img src={contactUs} alt="" className="desktopMenuImg" />
        </Link>
      </nav>
    );
  };
  
  export default Navbar;

