// eslint-disable-next-line no-unused-vars
import React from 'react';
import FormLabel from '../components/FormLabel';
import FormInput from '../components/FormInput';

function ContactPage() {
    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Contactez-nous !</h1>
            </div>
            <div>
                <form>
                    <FormLabel inputId="client-name" />

                    <FormInput
                        inputClassName="form-input"
                        iconClassName="fa-solid fa-user contact-icon"
                        inputType="text"
                        inputId="client-name"
                        inputPlaceholder="Nom et prénom"
                    />

                    <FormLabel inputClassName="flex-div" inputId="client-email" />

                    <FormInput
                        inputClassName="form-input"
                        iconClassName="fa-solid fa-square-envelope contact-icon"
                        inputType="email"
                        inputId="client-email"
                        inputPlaceholder="Adresse e-mail"
                    />

                    <div className="message-div">
                        <FormLabel inputId="client-message" />
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
        </div>
    );
}

export default ContactPage;
