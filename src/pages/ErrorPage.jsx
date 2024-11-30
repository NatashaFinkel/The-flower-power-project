// eslint-disable-next-line no-unused-vars
import React from 'react';
import Image from '../components/Image';
import { NavLink } from 'react-router-dom';
import errorPageLogo from '../assets/logo-error-page.png';

function ErrorPage() {

    return (
        <div className="main-div">
            <div className="title-div">
                <h1>OUPS !</h1>
            </div>
            <div className="error-page-main-container" data-testid="error-page-main-container-data-testid">
                <Image imageSrc={errorPageLogo} imageAlt="logo de la page d'erreur" imageClassName="error-page-logo" id="error-page-logo" />
                <div className='error-page-txt-div'>
                    <p>La page demandée est introuvable.</p>
                    <NavLink to="/" className="get-back-btn">Retour à la page d&apos;accueil</NavLink>
                </div>
            </div>
        </div>
    )
}
export default ErrorPage;