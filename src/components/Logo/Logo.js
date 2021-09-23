import React, {useState, useEffect} from 'react';
import './Logo.css';
import logo from '../../images/logo.png';

function Logo (){
    return (
        <div className="logo">
            <img className="logo__bm" src={logo} alt="logo" />
        </div>
    )
}
export default Logo;