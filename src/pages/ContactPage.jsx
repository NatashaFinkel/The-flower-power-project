// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import FormLabel from '../components/FormLabel';
import FormInput from '../components/FormInput';

function ContactPage() {
    useEffect(() => {
        document.getElementById("client-email").setAttribute("inputPattern", '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,}$');
    })

    return (
        <div className="main-div">
            <div className="title-div">
                <h1>Contactez-nous !</h1>
            </div>
            <div>
                <form>
                    <FormLabel inputId="client-name" inputValue="nom et prénom :" />
                    <FormInput
                        inputClassName="form-input"
                        iconClassName="fa-solid fa-user contact-icon"
                        inputType="text"
                        inputId="client-name"
                        inputPlaceholder="Nom et prénom"
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
        </div>
    );
}

export default ContactPage;
