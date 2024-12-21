// eslint-disable-next-line no-unused-vars
import React from 'react';
import Image from '../components/Image';
import AppNavLink from '../components/AppNavLink';
import errorPageLogo from '/assets/error-page-logo-img.webp';

function ErrorPage() {
    return (
        <div className="main-div">
            <div className="title-div">
                <h1>OUPS !</h1>
            </div>
            <div
                className="error-page-main-container"
                data-testid="error-page-main-container-data-testid"
            >
                <Image
                    imageSrc={errorPageLogo}
                    imageAlt="logo de la page d'erreur"
                    imageClassName="error-page-logo"
                    id="error-page-logo"
                />
                <div className="error-page-txt-div">
                    <p>La page demandée est introuvable.</p>
                    <AppNavLink
                        navLinkDirection="/"
                        navLinkClassName="get-back-btn"
                        navLinkTxt="Retour à la page d'accueil"
                    />
                </div>
            </div>
        </div>
    );
}
export default ErrorPage;