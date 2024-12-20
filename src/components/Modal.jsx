// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToShoppingList } from '../redux/shoppingListSlice';
import Image from './Image';
import PropTypes from 'prop-types';

function Modal({ mImgSrc, mImgAlt, mTitle, mDescription, mPrice }) {
    const dispatch = useDispatch();
    const array = useSelector(state => state.shoppingList.array);

    const getModalElements = () => {
        return {
            closeModal: document.getElementById("close-modal"),
            modalContent: document.getElementsByClassName("modal-content")[0],
            modalImg: document.getElementById("modal-img-src"),
            modalTitle: document.getElementById("modal-title"),
            modalDescription: document.getElementById("modal-description"),
            modal: document.getElementById("bouquet-modal"),
            modalPrice: document.getElementById("modal-price"),
        };
    };

    useEffect(() => {
        const { closeModal, modalContent, modalImg, modalTitle, modalDescription, modalPrice, modal } = getModalElements();

        const handleCloseModal = () => {
            modalContent.id = ""; modalImg.src = ""; modalImg.alt = ""; modalTitle.textContent = ""; modalDescription.textContent = ""; modalPrice.textContent = ""; modal.style.display = "none";
        };

        closeModal.onclick = handleCloseModal;

        const closeModalIfClickOutside = (event) => {
            if (event.target === modal) {
                handleCloseModal();
            }
        };

        window.addEventListener("click", closeModalIfClickOutside);
        return () => {
            window.removeEventListener("click", closeModalIfClickOutside);
        };
    }, []);

    const handleAddBouquet = () => {
        const { modalContent, modalTitle, modalImg, modalDescription, modalPrice } = getModalElements();
        let modalContentId = modalContent.id;
        let modalContentTitleTxtContent = modalTitle.textContent;
        let modalContentImgSrc = modalImg.src;
        let modalContentAlt = modalImg.alt;
        let modalDescriptionTxtContent = modalDescription.textContent;
        let modalPriceTxtContent = modalPrice.textContent;

        const bouquet = { id: modalContentId, title: modalContentTitleTxtContent, imgSrc: modalContentImgSrc, imgAlt: modalContentAlt, description: modalDescriptionTxtContent, price: modalPriceTxtContent };

        dispatch(addToShoppingList(bouquet));
    };

    useEffect(() => {
        localStorage.setItem("shoppingList", JSON.stringify(array));
    }, [array]);

    return (
        <div id="bouquet-modal" className="modal" data-testid="modal-display-test-id">

            <div className="modal-content" id="modal-content" data-testid="modal-test-id">
                <div className="close-modal-div">
                    <span className="close-modal" id="close-modal">&times;</span>
                </div>
                <div className="modal-img-div">
                    <Image src={mImgSrc} imageAlt={mImgAlt} imageId="modal-img-src" imageDataTestid="modal-img-test-id" imageClassName="modal-img" />
                </div>

                <div className="modal-title-div">
                    <h2 id="modal-title" data-testid="modal-title-test-id" className="modal-title">{mTitle}</h2>
                </div>
                <div className="modal-description-div">
                    <p id="modal-description" data-testid="modal-description-test-id">{mDescription}</p>
                </div>
                <hr className="modal-divider"></hr>
                <div className="modal-footer">
                    <div className="modal-price-div">
                        <p id="modal-price" data-testid="modal-price-test-id">{mPrice}</p>
                    </div>
                    <button onClick={handleAddBouquet} className="add-bouquet-btn" id="add-bouquet-btn" data-testid="add-bouquet-btn-test-id">Ajouter au panier</button>
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
    mPrice: PropTypes.number,
}

export default Modal;