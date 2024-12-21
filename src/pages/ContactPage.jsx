// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import FormLabel from '../components/FormLabel';
import FormInput from '../components/FormInput';
import PopUp from '../components/PopUp';
import contactPagePopUpImg from '/assets/message-sent-confirmation-popUp-img.webp';

function ContactPage() {
    useEffect(() => {
        document.getElementById("client-email").setAttribute("inputPattern", '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$');
    });

    useEffect(() => {
        const form = document.getElementById("contact-form");
        const popup = document.getElementById("popup");
        const overlay = document.getElementById("overlay");

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (form.checkValidity()) {
                popup.style.display = 'block';
                overlay.style.display = 'block';

                setTimeout(() => {
                    popup.style.display = 'none';
                    overlay.style.display = 'none';
                }, 1000);

                form.reset();
            }
        });
    });

    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Contactez-nous !</h1>
            </div>
            <div>
                <form id="contact-form">
                    <FormLabel inputId="client-name" inputValue="nom et prénom :" />
                    <FormInput
                        inputClassName="form-input"
                        iconClassName="fa-solid fa-user contact-icon"
                        inputType="text"
                        inputId="client-name"
                    />

                    <FormLabel inputClassName="flex-div" inputId="client-email" inputValue="email :" />

                    <FormInput
                        inputClassName="form-input"
                        iconClassName="fa-solid fa-square-envelope contact-icon"
                        inputType="email"
                        inputId="client-email"
                        inputRequirement={true}
                    />

                    <div className="message-div">
                        <FormLabel inputId="client-message" inputValue="On répondra vite, promis !" />
                        <textarea
                            id="client-message"
                            name="client-message"
                            rows="4"
                            cols="50"
                            placeholder="Votre message..."
                        ></textarea>

                        <FormInput
                            inputType="submit"
                            inputId="submit-message"
                            inputValue="Envoyer"
                            inputClassName="form-btn-div"
                        />
                    </div>
                </form>
            </div>
            <PopUp popUpImgSrc={contactPagePopUpImg} popUpImgClassName="contact-page-popup-img" popUpMessage="Votre message a été envoyé avec succès !" />
        </div>
    );
}

export default ContactPage;
