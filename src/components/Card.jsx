// eslint-disable-next-line no-unused-vars
import React from 'react';
import flowers from '../../flowers.json';
import Image from './Image';

function Card() {

    function showModal(event) {
        let selectedBouquet = event.target;
        let modal = document.getElementById("bouquet-modal");
        let modalImgSrc = document.getElementById("modal-img-src");
        let modalTitle = document.getElementById("modal-title");
        let modalDescription = document.getElementById("modal-description");
        let modalContent = document.querySelector(".modal-content");
        let modalPrice = document.getElementById("modal-price");

        modal.style.display = "flex";
        modalImgSrc.src = selectedBouquet.src;
        modalImgSrc.alt = selectedBouquet.alt;
        modalTitle.textContent = selectedBouquet.title;
        modalDescription.textContent = selectedBouquet.getAttribute("description");
        modalPrice.textContent = selectedBouquet.getAttribute("price");

        let parentDiv = selectedBouquet.closest("div");
        let parentDivId = parentDiv.id;
        modalContent.id = parentDivId;
    }

    return (
        <div className="card-container" key="cardContainer">
            {
                flowers && flowers.map(flower => {
                    return (
                        <div key={flower.index} id={flower.id} className="card" onClick={showModal} data-testid={`card-test-id-${flower.index}`}>
                            <Image imageSrc={flower.imgSrc} imageAlt={flower.imgAlt} imageId={`card-${flower.index}`} imageTitle={flower.imgTitle} imageDescription={flower.imgDescription} imagePrice={flower.price} imageDataTestid={`card-img-${flower.index}-test-id`} />
                            <p className="card-title">{flower.imgTitle}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;