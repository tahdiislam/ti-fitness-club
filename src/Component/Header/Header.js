import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
      <header>
        <a href="#home" className="text-blue-600 text-4xl font-semibold flex mt-6">
          <img className="mr-2" src={logo} alt="logo" />
          <h1>TI Fitness Club</h1>
        </a>
      </header>
    );
};

export default Header;