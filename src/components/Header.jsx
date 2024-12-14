// eslint-disable-next-line no-unused-vars
import React from 'react';
import Image from './Image';
import LogoImage from '/assets/logo-3.webp';

function Header() {
    return (
        <header>
            <div className="logo-div">
                <Image imageSrc={LogoImage} imageClassName="logo" imageAlt="Logo de l'application" imageDataTestid="logo-test-id" />
            </div>
        </header>
    )
}
export default Header;