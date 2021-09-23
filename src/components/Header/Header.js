import React, {useState, useEffect} from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import login from '../../images/login.png';
import plus from '../../images/plus.png';
import deleteimg from '../../images/delete.svg';
import reload from '../../images/reload.png';
import info from '../../images/info.png';



function Header (){
    return (
        <header className="header button__section">
            <button type="button" className="header__button header__project-button" aria-label="X5Manager">
                <img className="header__icon header__project-icon" src={logo} alt="projectIcon" />
            </button>
            <button type="button" className="header__button header__login-button" aria-label="X5Manager">
                <img className="header__icon  header__login-icon" src={login} alt="loginIcon" />
            </button>
            <button type="button" className="header__button header__add-button" aria-label="X5Manager">
                <img className="header__icon  header__addicon" src={plus} alt="addIcon" />
            </button>
            <button type="button" className="header__button header__delete-button" aria-label="X5Manager">
                <img className="header__icon header__delete-icon" src={deleteimg} alt="deleteIcon" />
            </button>
            <button type="button" className="header__button header__reload-button" aria-label="X5Manager">
                <img className="header__icon header__reload-icon" src={reload} alt="reloadIcon" />
            </button>
            <button type="button" className="header__button header__info-button" aria-label="X5Manager">
                <img className="header__icon header__info-icon" src={info} alt="infoIcon" />
            </button>
        </header>
    )
}
export default Header;