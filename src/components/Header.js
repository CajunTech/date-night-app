import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
          <img className='headerImg' src='/images/dna_icon.png' alt='dna logo'/>
          <h1 className='headerText'>Date Night App</h1>
        </div>
    );
}

export default Header;