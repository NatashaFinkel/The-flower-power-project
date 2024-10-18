// eslint-disable-next-line no-unused-vars
import React from "react";
import flowers from '../../flowers.json';

function Card() {

    function showModal(event) {
        let selectedBouquet = event.target;
        let modal = document.getElementById("bouquet-modal");
        let modalImgSrc = document.getElementById("modal-img-src");
        let modalTitle = document.getElementById("modal-title");
        let modalDescription = document.getElementById("modal-description");
        let modalContent = document.querySelector(".modal-content");

        modal.style.display = "flex";
        modalImgSrc.src = selectedBouquet.src;
        modalImgSrc.alt = selectedBouquet.alt;
        modalTitle.textContent = selectedBouquet.title;
        modalDescription.textContent = selectedBouquet.getAttribute("description");

        let parentDiv = selectedBouquet.closest("div");
        let parentDivId = parentDiv.id;
        modalContent.id = parentDivId;
    }

    return (
        <div className="card-container" key="cardContainer">
            {
                flowers && flowers.map(flower => {
                    return (
                        <div key={flower.index} id={flower.id} onClick={showModal}>
                            <img src={flower.imgSrc} alt={flower.imgAlt} id={flower.index} className="gallery-img" title={flower.imgTitle}
                                // eslint-disable-next-line react/no-unknown-property
                                description={flower.imgDescription}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;