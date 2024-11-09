// eslint-disable-next-line no-unused-vars
import React from 'react';
import LogoImage from '../assets/logo-3.png';

function Header() {
    return (
        <header>
            <div className="logo-div">
                <img src={LogoImage} className="logo" alt="Logo de l'application" data-testid="logo-testid" />
            </div>
        </header>
    )
}
export default Header;