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
            heartIcon: document.getElementById("heart"),
            modalPrice: document.getElementById("modal-price"),
        };
    };

    useEffect(() => {
        const { closeModal, modalContent, modalImg, modalTitle, modalDescription, modalPrice, modal } = getModalElements();
        closeModal.onclick = function () {
            modalContent.id = "";
            modalImg.src = "";
            modalImg.alt = "";
            modalTitle.textContent = "";
            modalDescription.textContent = "";
            modalPrice.textContent = "";
            modal.style.display = "none";
        };
    });

    const handleAddBouquet = () => {
        const { modalContent, modalTitle, modalImg, modalDescription, modalPrice } = getModalElements();
        let modalContentId = modalContent.id;
        let modalContentTitleTxtContent = modalTitle.textContent;
        let modalContentImgSrc = modalImg.src;
        let modalContentAlt = modalImg.alt;
        let modalDescriptionTxtContent = modalDescription.textContent;
        let modalPriceTxtContent = modalPrice.textContent;

        const bouquet = { id: modalContentId, title: modalContentTitleTxtContent, imgSrc: modalContentImgSrc, imgAlt: modalContentAlt, description: modalDescriptionTxtContent, price: modalPriceTxtContent };
        console.log(bouquet);
        dispatch(addToShoppingList(bouquet));
    };

    useEffect(() => {
        localStorage.setItem("shoppingList", JSON.stringify(array));
    }, [array]);

    return (
        <div id="bouquet-modal" className="modal">

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
                        <p id="modal-price">{mPrice}</p>
                    </div>
                    <button onClick={handleAddBouquet} className="heart-icon add-bouquet-btn" data-testid="heart-test-id">Ajouter au panier</button>
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