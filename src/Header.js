import React from 'react';
import logo from './assets/logo.png';
import './App.css';

const Header = () => {
  return (
    <header>
        <div className='heading'>
            <img className='logo' src={logo} alt="C.R.I. Fluid Systems Logo" />
            {/* <p>Pumping trust. Worldwide.</p> */}
        </div>
    </header>
  );
};

export default Header;
