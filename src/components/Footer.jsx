// eslint-disable-next-line no-unused-vars
import React from 'react';

function Footer() {
    return (
        <footer>
            <div itemScope itemType="https://schema.org/Organization" className="footer">
                <div className="footer-legal-infos-div">
                    <p>Informations légales :</p><br></br>
                    <p>Mentions légales</p><br></br>
                    <p>CGV</p>
                </div>
                <div className="footer-shop-div">
                    <p>Notre boutique : </p><br></br>
                    <p className="brand-name" itemProp="legalName">Le jardin aux fleurs sauvages</p>
                    <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <span itemProp="streetAddress">1 rue du petit ruisseau</span><br></br>
                        <span itemProp="postalCode">77600 </span>
                        <span itemProp="addressLocality">Bussy-Saint-Georges</span>
                    </p><br></br>
                    <p>Ouverture du lundi au vendredi, de 10h à 19h.</p>
                </div>
                <div className="footer-contact-shop-div">
                    <p>Contactez-nous : </p><br></br>
                    <div className="footer-telephone-div">
                        <i className="fa-solid fa-phone telephone"></i>
                        <p itemProp="telephone">01 28 01 19 92</p><br></br>
                    </div><br></br>
                    <div className="footer-contact-form">
                        <i className="fa-solid fa-envelope enveloppe"></i>
                        <a href="/contact">Formulaire de contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;