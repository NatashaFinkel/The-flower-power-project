// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import PropTypes from 'prop-types';

function Modal({ modalImgSrc, modalImgAlt, modalTitle, modalDescription }) {

    const getModalElements = () => {
        return {
            closeModal: document.getElementById("close-modal"),
            modalContent: document.getElementsByClassName("modal-content")[0],
            modalImg: document.getElementById("modal-img-src"),
            modalTitle: document.getElementById("modal-title"),
            modalContentDescription: document.getElementById("modal-description"),
            modal: document.getElementById("bouquet-modal"),
            heartIcon: document.getElementById("heart"),
        };
    };

    useEffect(() => {
        const { closeModal, modalContent, modalImg, modalTitle, modalContentDescription, modal } = getModalElements();
        closeModal.onclick = function () {
            modalContent.id = "";
            modalImg.src = "";
            modalImg.alt = "";
            modalTitle.textContent = "";
            modalContentDescription.textContent = "";
            modal.style.display = "none";
        };
    });

    const handleAddBouquet = () => {
        let modalContent = document.getElementsByClassName("modal-content")[0];
        let modalContentId = modalContent.id;
        let modalContentTitle = document.getElementById("modal-title");
        let modalContentTitleTxtContent = modalContentTitle.textContent;
        let modalContentImg = document.getElementById("modal-img-src");
        let modalContentImgSrc = modalContentImg.src;
        let modalContentAlt = modalContentImg.alt;

        let modalContentDescription = document.getElementById("modal-description");
        let modalContentDescriptionTxtContent = modalContentDescription.textContent;

        const bouquet = { id: modalContentId, title: modalContentTitleTxtContent, imgSrc: modalContentImgSrc, imgAlt: modalContentAlt, description: modalContentDescriptionTxtContent };

        console.log(bouquet);
    };

    return (
        <div id="bouquet-modal" className="modal">

            <div className="modal-content" id="modal-content">
                <div className="close-modal-div">
                    <span className="close-modal" id="close-modal">&times;</span>
                </div>
                <div className="modal-img-div">
                    <img src={modalImgSrc} alt={modalImgAlt} id="modal-img-src" data-testid="modal-img-test-id" className="modal-img"></img>
                </div>

                <div className="modal-title-div">
                    <h2 id="modal-title" data-testid="modal-title-test-id" className="modal-title">{modalTitle}</h2>

                    <div className="heart-icon-div">
                        <i id="heart" className={`fa-solid fa-heart heart-icon`} onClick={handleAddBouquet}
                        ></i>
                    </div>
                </div>
                <div className="modal-description-div">
                    <p id="modal-description" data-testid="modal-description-test-id">{modalDescription}</p>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    modalImgSrc: PropTypes.string,
    modalImgAlt: PropTypes.string,
    modalTitle: PropTypes.string,
    modalDescription: PropTypes.string,
}

export default Modal;