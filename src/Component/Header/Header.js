import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <header className='text-blue-500 text-4xl font-medium flex mt-6'>
            <img className='mr-2' src={logo} alt="logo" />
            <h1>TI Fitness Club</h1>
        </header>
    );
};

export default Header;