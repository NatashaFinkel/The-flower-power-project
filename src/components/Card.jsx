// eslint-disable-next-line no-unused-vars
import React from 'react';
import flowers from '../json/flowers.json';
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
        modalImgSrc.src = selectedBouquet.getAttribute("src");
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
                        // eslint-disable-next-line react/no-unknown-property
                        <div key={flower.index} id={flower.id} className="card clickable" src={flower.imgSrc} alt={flower.imgAlt} title={flower.imgTitle} description={flower.imgDescription} price={flower.price} onClick={showModal} data-testid={`card-test-id-${flower.index}`}>

                            <Image imageId={`card-${flower.index}-img`} imageSrc={flower.imgSrc} imageAlt={flower.imgAlt} imageTitle={flower.imgTitle} imageDescription={flower.imgDescription} imagePrice={flower.price} imageDataTestid={`card-img-${flower.index}-test-id`} imageClassName="card-img clickable" />

                            {/* eslint-disable-next-line react/no-unknown-property */}
                            <p className="card-title clickable" src={flower.imgSrc} alt={flower.imgAlt} title={flower.imgTitle} description={flower.imgDescription} price={flower.price}>{flower.imgTitle}</p>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;