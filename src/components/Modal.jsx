// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import PropTypes from 'prop-types';

function Modal({ mImgSrc, mImgAlt, mTitle, mDescription }) {

    const getModalElements = () => {
        return {
            closeModal: document.getElementById("close-modal"),
            modalContent: document.getElementsByClassName("modal-content")[0],
            modalImg: document.getElementById("modal-img-src"),
            modalTitle: document.getElementById("modal-title"),
            modalDescription: document.getElementById("modal-description"),
            modal: document.getElementById("bouquet-modal"),
            heartIcon: document.getElementById("heart"),
        };
    };

    useEffect(() => {
        const { closeModal, modalContent, modalImg, modalTitle, modalDescription, modal } = getModalElements();
        closeModal.onclick = function () {
            modalContent.id = "";
            modalImg.src = "";
            modalImg.alt = "";
            modalTitle.textContent = "";
            modalDescription.textContent = "";
            modal.style.display = "none";
        };
    });

    const handleAddBouquet = () => {
        const { modalContent, modalTitle, modalImg, modalDescription } = getModalElements();
        let modalContentId = modalContent.id;
        let modalContentTitleTxtContent = modalTitle.textContent;
        let modalContentImgSrc = modalImg.src;
        let modalContentAlt = modalImg.alt;
        let modalDescriptionTxtContent = modalDescription.textContent;

        const bouquet = { id: `${modalContentId}-modal`, title: modalContentTitleTxtContent, imgSrc: modalContentImgSrc, imgAlt: modalContentAlt, description: modalDescriptionTxtContent };

        console.log(bouquet);
    };

    return (
        <div id="bouquet-modal" className="modal">

            <div className="modal-content" id="modal-content">
                <div className="close-modal-div">
                    <span className="close-modal" id="close-modal">&times;</span>
                </div>
                <div className="modal-img-div">
                    <img src={mImgSrc} alt={mImgAlt} id="modal-img-src" data-testid="modal-img-test-id" className="modal-img"></img>
                </div>

                <div className="modal-title-div">
                    <h2 id="modal-title" data-testid="modal-title-test-id" className="modal-title">{mTitle}</h2>

                    <div className="heart-icon-div">
                        <i id="heart" className={`fa-solid fa-heart heart-icon`} onClick={handleAddBouquet}
                        ></i>
                    </div>
                </div>
                <div className="modal-description-div">
                    <p id="modal-description" data-testid="modal-description-test-id">{mDescription}</p>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    mImgSrc: PropTypes.string,
    mImgAlt: PropTypes.string,
    mTitle: PropTypes.string,
    mDescription: PropTypes.string,
}

export default Modal;