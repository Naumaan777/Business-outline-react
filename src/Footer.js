import React from 'react';
import './App.css';
import phone from './assets/phone.png';
import facebook from './assets/facebook.png';
import website from './assets/web.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p><a className='media' href="#"><img src={phone} alt="phone" /></a>Toll free 1800 200 1234</p> 
        <p><a className='media' href="#"><img src={facebook} alt="Facebook" /></a>www.facebook.com/cripumps</p>
        <p><a className='media' href="#"><img src={website} alt="website" /></a>www.crigroups.com</p>
      </div>
    </footer>
  );
};

export default Footer;
